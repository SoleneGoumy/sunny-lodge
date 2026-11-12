import { useMemo, useState } from 'react'
import type { BlockedPeriod } from '../types'
import { isNightBlocked, isRangeFree, nightsBetween, toDay } from './dates'

export interface Selection {
  arrival: string | null
  departure: string | null
}

interface Props {
  blocked: BlockedPeriod[]
  minNights: number
  value: Selection
  onChange: (value: Selection) => void
}

const WEEKDAYS = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
const monthFmt = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' })

/** Jours d'un mois, précédés de cases vides pour commencer un lundi. */
function monthGrid(year: number, month: number): (string | null)[] {
  const first = new Date(year, month, 1, 12)
  const offset = (first.getDay() + 6) % 7
  const days = new Date(year, month + 1, 0).getDate()
  return [
    ...Array<null>(offset).fill(null),
    ...Array.from({ length: days }, (_, i) => toDay(new Date(year, month, i + 1, 12))),
  ]
}

export default function AvailabilityCalendar({ blocked, minNights, value, onChange }: Props) {
  const today = toDay(new Date())
  const [start, setStart] = useState(() => {
    const d = new Date()
    return { year: d.getFullYear(), month: d.getMonth() }
  })
  const [hover, setHover] = useState<string | null>(null)
  const { arrival, departure } = value

  const months = useMemo(
    () =>
      [0, 1].map((i) => {
        const d = new Date(start.year, start.month + i, 1, 12)
        return { label: monthFmt.format(d), days: monthGrid(d.getFullYear(), d.getMonth()) }
      }),
    [start]
  )

  const shift = (n: number) =>
    setStart((s) => {
      const d = new Date(s.year, s.month + n, 1)
      return { year: d.getFullYear(), month: d.getMonth() }
    })
  const now = new Date()
  const canGoBack = start.year > now.getFullYear() || start.month > now.getMonth()

  /** Choix en cours : on attend le départ. */
  const pickingDeparture = arrival !== null && departure === null

  const isDisabled = (day: string): boolean => {
    if (day < today) return true
    if (arrival && !departure) {
      // Départ possible si toutes les nuits depuis l'arrivée sont libres
      if (day <= arrival) return isNightBlocked(day, blocked)
      return nightsBetween(arrival, day) < minNights || !isRangeFree(arrival, day, blocked)
    }
    return isNightBlocked(day, blocked)
  }

  const onPick = (day: string) => {
    if (arrival && !departure && day > arrival) {
      onChange({ arrival, departure: day })
    } else {
      onChange({ arrival: day, departure: null })
    }
  }

  const rangeEnd = departure ?? (arrival && !departure && hover && hover > arrival ? hover : null)

  return (
    <div className="cal">
      <div className="cal__nav">
        <button type="button" onClick={() => shift(-1)} disabled={!canGoBack} aria-label="Mois précédent">
          ←
        </button>
        <p className="cal__hint">
          {pickingDeparture ? 'Choisissez votre date de départ' : 'Choisissez votre date d’arrivée'}
        </p>
        <button type="button" onClick={() => shift(1)} aria-label="Mois suivant">
          →
        </button>
      </div>
      <div className="cal__months">
        {months.map((m) => (
          <div key={m.label} className="cal__month">
            <p className="cal__title">{m.label}</p>
            <div className="cal__grid">
              {WEEKDAYS.map((w) => (
                <span key={w} className="cal__weekday">
                  {w}
                </span>
              ))}
              {m.days.map((day, i) => {
                if (!day) return <span key={`e${i}`} />
                const disabled = isDisabled(day)
                const taken = day >= today && isNightBlocked(day, blocked)
                const inRange = arrival && rangeEnd && day > arrival && day < rangeEnd
                const cls = [
                  'cal__day',
                  taken && 'cal__day--taken',
                  day === arrival && 'cal__day--start',
                  day === rangeEnd && 'cal__day--end',
                  inRange && 'cal__day--range',
                  day === today && 'cal__day--today',
                ]
                  .filter(Boolean)
                  .join(' ')
                return (
                  <button
                    key={day}
                    type="button"
                    className={cls}
                    disabled={disabled}
                    onClick={() => onPick(day)}
                    onMouseEnter={() => setHover(day)}
                    onMouseLeave={() => setHover(null)}
                    aria-pressed={day === arrival || day === departure}
                    aria-label={`${day}${taken ? ' (occupé)' : ''}`}
                  >
                    {Number(day.slice(8))}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="cal__legend">
        <span>
          <i className="cal__swatch" /> Libre
        </span>
        <span>
          <i className="cal__swatch cal__swatch--taken" /> Occupé
        </span>
        <span>
          <i className="cal__swatch cal__swatch--selected" /> Votre séjour
        </span>
        {(arrival || departure) && (
          <button type="button" className="cal__reset" onClick={() => onChange({ arrival: null, departure: null })}>
            Effacer les dates
          </button>
        )}
      </div>
      <p className="cal__note">
        {minNights > 1 && <>Séjour de {minNights} nuits minimum. </>}
        Arrivée à partir de 16h00, départ avant 11h00.
      </p>
    </div>
  )
}

