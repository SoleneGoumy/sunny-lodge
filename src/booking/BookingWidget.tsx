import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { AIRBNB_URL, BOOKING } from '../data'
import type { Availability } from '../types'
import AvailabilityCalendar, { type Selection } from './AvailabilityCalendar'
import { formatDay, formatDayLong, isRangeFree, nightsBetween } from './dates'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const emptyForm = { name: '', email: '', phone: '', guests: '', message: '' }

export default function BookingWidget() {
  const [availability, setAvailability] = useState<Availability>({ updatedAt: null, blocked: [] })
  const [loaded, setLoaded] = useState(false)
  const [dates, setDates] = useState<Selection>({ arrival: null, departure: null })
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState<Status>('idle')

  // Périodes occupées, synchronisées depuis Airbnb / Gîtes de France (npm run sync:dispo)
  useEffect(() => {
    fetch('/availability.json', { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Availability) => setAvailability(data))
      .catch(() => {})
      .finally(() => setLoaded(true))
  }, [])

  const update = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const blocked = useMemo(
    () => [
      ...availability.blocked,
      ...BOOKING.manualBlocks.map((b) => ({ ...b, source: 'manuel' as const })),
    ],
    [availability]
  )

  const { arrival, departure } = dates
  const nights = arrival && departure ? nightsBetween(arrival, departure) : 0
  const ready = Boolean(arrival && departure)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!arrival || !departure) return
    // Dernière vérification au cas où le calendrier aurait changé
    if (!isRangeFree(arrival, departure, blocked)) {
      setDates({ arrival: null, departure: null })
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: BOOKING.web3formsKey,
          subject: `Demande de séjour du ${formatDayLong(arrival)} au ${formatDayLong(departure)} – ${form.name}`,
          from_name: 'Site Sunny Lodge',
          replyto: form.email,
          Nom: form.name,
          'E-mail': form.email,
          Téléphone: form.phone || '—',
          Arrivée: formatDayLong(arrival),
          Départ: formatDayLong(departure),
          Nuits: nights,
          Voyageurs: form.guests,
          Message: form.message || '—',
          botcheck: '',
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.message)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="booking-widget booking-widget--done">
        <p className="booking-widget__big">🎉</p>
        <h3>Demande envoyée, merci {form.name.split(' ')[0]} !</h3>
        <p>
          Nous avons bien reçu votre demande du {arrival && formatDayLong(arrival)} au{' '}
          {departure && formatDayLong(departure)}. Nous revenons vers vous très vite par e-mail pour la confirmer.
        </p>
        <button
          type="button"
          className="btn btn--outline"
          onClick={() => {
            setStatus('idle')
            setForm(emptyForm)
            setDates({ arrival: null, departure: null })
          }}
        >
          Faire une autre demande
        </button>
      </div>
    )
  }

  return (
    <div className="booking-widget">
      <AvailabilityCalendar blocked={blocked} minNights={BOOKING.minNights} value={dates} onChange={setDates} />
      {loaded && !availability.updatedAt && (
        <p className="booking-widget__warn">
          Calendrier en cours de synchronisation : nous vous confirmerons la disponibilité en réponse à votre demande.
        </p>
      )}

      <form className="booking-form" onSubmit={onSubmit}>
        <div className="booking-form__summary">
          {ready && arrival && departure ? (
            <>
              <strong>
                {formatDay(arrival)} → {formatDay(departure)}
              </strong>
              <span>
                {nights} nuit{nights > 1 ? 's' : ''} · arrivée à partir de 16h, départ avant 11h
              </span>
            </>
          ) : (
            <span>Sélectionnez vos dates dans le calendrier pour faire une demande.</span>
          )}
        </div>

        {ready && (
          <>
            <div className="form__row">
              <label>
                <span>
                  Nom <abbr title="obligatoire">*</abbr>
                </span>
                <input required value={form.name} onChange={update('name')} autoComplete="name" />
              </label>
              <label>
                <span>
                  Voyageurs <abbr title="obligatoire">*</abbr>
                </span>
                <input
                  required
                  type="number"
                  min={1}
                  max={BOOKING.maxGuests}
                  value={form.guests}
                  onChange={update('guests')}
                />
              </label>
            </div>
            <div className="form__row">
              <label>
                <span>
                  E-mail <abbr title="obligatoire">*</abbr>
                </span>
                <input required type="email" value={form.email} onChange={update('email')} autoComplete="email" />
              </label>
              <label>
                Téléphone
                <input type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />
              </label>
            </div>
            <label>
              Message
              <textarea rows={3} value={form.message} onChange={update('message')} />
            </label>

            {BOOKING.web3formsKey ? (
              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi…' : 'Envoyer la demande de réservation'}
              </button>
            ) : (
              <p className="booking-widget__warn">
                Les demandes directes seront bientôt disponibles. En attendant, vous pouvez{' '}
                <a href={AIRBNB_URL} target="_blank" rel="noreferrer">
                  réserver sur Airbnb
                </a>
                .
              </p>
            )}
            {status === 'error' && (
              <p className="booking-widget__error">
                L’envoi n’a pas fonctionné. Réessayez dans un instant ou contactez-nous via{' '}
                <a href={AIRBNB_URL} target="_blank" rel="noreferrer">
                  Airbnb
                </a>
                .
              </p>
            )}
            <p className="booking-form__fine">
              <abbr title="obligatoire">*</abbr> Champs obligatoires. Ceci est une demande : votre séjour est confirmé uniquement après notre réponse.
            </p>
          </>
        )}
      </form>
    </div>
  )
}
