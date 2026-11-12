// Récupère les calendriers iCal (Airbnb, Gîtes de France…) et écrit
// public/availability.json avec UNIQUEMENT les périodes occupées.
//
// Les liens iCal sont privés (ils contiennent un jeton et Airbnb y met des
// infos sur les voyageurs) : ils restent dans .env.local, jamais dans le site.
//
//   AIRBNB_ICAL_URL=https://www.airbnb.fr/calendar/ical/....ics?s=...
//   GDF_ICAL_URL=https://...            (facultatif)
//
// Lancement : npm run sync:dispo  (fait aussi automatiquement avant chaque déploiement)

import { existsSync, readFileSync, writeFileSync } from 'node:fs'

const OUT = new URL('../public/availability.json', import.meta.url)
const ENV = new URL('../.env.local', import.meta.url)

// Lecture minimale de .env.local (KEY=valeur par ligne)
const env = { ...process.env }
if (existsSync(ENV)) {
  for (const line of readFileSync(ENV, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/)
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}

const sources = [
  ['airbnb', env.AIRBNB_ICAL_URL],
  ['gites-de-france', env.GDF_ICAL_URL],
].filter(([, url]) => url)

if (sources.length === 0) {
  console.warn('⚠️  Aucun lien iCal dans .env.local : public/availability.json n’est pas mis à jour.')
  process.exit(0)
}

/** Convertit 20260712 ou 20260712T150000Z en '2026-07-12'. */
const toDay = (v) => `${v.slice(0, 4)}-${v.slice(4, 6)}-${v.slice(6, 8)}`

/** Ajoute n jours à une date 'AAAA-MM-JJ'. */
const addDays = (day, n) => {
  const d = new Date(`${day}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + n)
  return d.toISOString().slice(0, 10)
}

function parseIcal(text) {
  // Déplie les lignes coupées (RFC 5545)
  const lines = text.replace(/\r?\n[ \t]/g, '').split(/\r?\n/)
  const events = []
  let cur = null
  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') cur = {}
    else if (line === 'END:VEVENT') {
      if (cur?.start) events.push({ start: cur.start, end: cur.end ?? addDays(cur.start, 1) })
      cur = null
    } else if (cur) {
      const m = line.match(/^(DTSTART|DTEND)[^:]*:(\d{8})/)
      if (m) cur[m[1] === 'DTSTART' ? 'start' : 'end'] = toDay(m[2])
    }
  }
  return events
}

const blocked = []
for (const [source, url] of sources) {
  const res = await fetch(url, { headers: { 'User-Agent': 'sunny-lodge-sync' } })
  if (!res.ok) {
    console.error(`❌ ${source} : erreur ${res.status}. Rien n’est mis à jour.`)
    process.exit(1)
  }
  const events = parseIcal(await res.text())
  console.log(`✓ ${source} : ${events.length} période(s) occupée(s)`)
  // On ne garde que les dates : aucun nom, téléphone ni lien de réservation.
  for (const e of events) blocked.push({ start: e.start, end: e.end, source })
}

blocked.sort((a, b) => a.start.localeCompare(b.start))
const today = new Date().toISOString().slice(0, 10)
const data = {
  updatedAt: new Date().toISOString(),
  blocked: blocked.filter((b) => b.end > today),
}
writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n')
console.log(`→ public/availability.json (${data.blocked.length} période(s) à venir)`)
