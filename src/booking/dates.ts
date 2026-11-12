// Petites fonctions de dates, toujours au format 'AAAA-MM-JJ'
// (pas de fuseau horaire : on raisonne en nuits).

import type { BlockedPeriod } from '../types'

export const toDay = (d: Date): string =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

export const parseDay = (day: string): Date => {
  const [y, m, d] = day.split('-').map(Number)
  return new Date(y, m - 1, d, 12)
}

export const addDays = (day: string, n: number): string => {
  const d = parseDay(day)
  d.setDate(d.getDate() + n)
  return toDay(d)
}

export const nightsBetween = (from: string, to: string): number =>
  Math.round((parseDay(to).getTime() - parseDay(from).getTime()) / 86_400_000)

/** La nuit du `day` est-elle déjà prise ? */
export const isNightBlocked = (day: string, blocked: BlockedPeriod[]): boolean =>
  blocked.some((b) => b.start <= day && day < b.end)

/** Toutes les nuits de `from` (inclus) à `to` (exclu) sont-elles libres ? */
export const isRangeFree = (from: string, to: string, blocked: BlockedPeriod[]): boolean =>
  !blocked.some((b) => b.start < to && from < b.end)

const fmt = new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'long' })
export const formatDay = (day: string): string => fmt.format(parseDay(day))

const fmtLong = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
export const formatDayLong = (day: string): string => fmtLong.format(parseDay(day))
