import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  AIRBNB_URL,
  CONTACT_EMAIL,
  photos,
  highlights,
  bedrooms,
  amenities,
  reviews,
  ratings,
  nearby,
} from '../data'
import { activities, seasons } from '../activities'

function Hero() {
  return (
    <section id="top" className="hero" style={{ backgroundImage: `url(${photos[0].src})` }}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="eyebrow">Savines-le-Lac · Hautes-Alpes</p>
        <h1>Sunny Lodge</h1>
        <p className="hero__lead">
          Une maison baignée de soleil, entre le lac de Serre-Ponçon et les montagnes,
          pour se retrouver en famille ou entre amis.
        </p>
        <div className="hero__actions">
          <a href="#reserver" className="btn">Vérifier les disponibilités</a>
          <a href="#galerie" className="btn btn--ghost">Voir les photos</a>
        </div>
        <ul className="hero__stats">
          {highlights.map((h) => (
            <li key={h.label}>
              <strong>{h.value}</strong> {h.label}
            </li>
          ))}
          <li>
            <strong>★ 4,93</strong> 14 avis
          </li>
        </ul>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="maison" className="section">
      <div className="container split">
        <div>
          <p className="eyebrow">La maison</p>
          <h2>Plein sud, grandes baies vitrées, vue sur les sommets</h2>
          <p>
            Maison paisible pour un séjour détente à Savines-le-Lac, dans un quartier calme à
            moins de 5 minutes en voiture du centre du village et des plages du lac de
            Serre-Ponçon, et à 20 minutes de la station de ski de Réallon.
          </p>
          <p>
            Grâce à son exposition plein sud, la maison est baignée de soleil en toute saison.
            La pièce de vie, spacieuse et très lumineuse, s'ouvre sur une grande terrasse
            offrant une vue magnifique sur les montagnes environnantes.
          </p>
          <div className="floors">
            <div className="floor">
              <h3>Rez-de-chaussée</h3>
              <p>Séjour, salon et cuisine ouverte · 1 chambre lit double · salle de bain · WC · buanderie</p>
            </div>
            <div className="floor">
              <h3>Étage</h3>
              <p>Mezzanine coin lecture vue lac · 3 chambres (dont 1 avec lits superposés) · salle de bain · WC</p>
            </div>
          </div>
        </div>
        <div className="mosaic">
          <img src={photos[1].src} alt={photos[1].alt} loading="lazy" />
          <img src={photos[2].src} alt={photos[2].alt} loading="lazy" />
          <img src={photos[3].src} alt={photos[3].alt} loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function Bedrooms() {
  return (
    <section id="chambres" className="section section--tinted">
      <div className="container">
        <p className="eyebrow">Où vous dormirez</p>
        <h2>4 chambres pour 10 voyageurs</h2>
        <div className="cards">
          {bedrooms.map((b) => (
            <article key={b.name} className="card">
              <img src={b.photo} alt={b.name} loading="lazy" />
              <div className="card__body">
                <h3>{b.name}</h3>
                <p className="muted">{b.floor}</p>
                <p>{b.beds}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="note">
          <strong>Linge de maison :</strong> draps et serviettes ne sont pas fournis, mais peuvent
          être proposés en option sur demande. Tailles : lits doubles 160 × 200 (housse de couette
          220 × 240), lits simples 90 × 190 (housse 140 × 200), taies 60 × 60.
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? photos : photos.slice(0, 9)

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null)
      if (e.key === 'ArrowRight') setIndex((i) => ((i ?? 0) + 1) % photos.length)
      if (e.key === 'ArrowLeft') setIndex((i) => ((i ?? 0) - 1 + photos.length) % photos.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index])

  return (
    <section id="galerie" className="section">
      <div className="container">
        <p className="eyebrow">Photos</p>
        <h2>Visitez Sunny Lodge</h2>
        <div className="gallery">
          {visible.map((p, i) => (
            <button key={p.src} className="gallery__item" onClick={() => setIndex(i)}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
          ))}
        </div>
        {!showAll && (
          <div className="center">
            <button className="btn btn--outline" onClick={() => setShowAll(true)}>
              Afficher les {photos.length} photos
            </button>
          </div>
        )}
      </div>

      {index !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setIndex(null)}>
          <button className="lightbox__close" aria-label="Fermer">×</button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Photo précédente"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => ((i ?? 0) - 1 + photos.length) % photos.length)
            }}
          >
            ‹
          </button>
          <img src={photos[index].src} alt={photos[index].alt} onClick={(e) => e.stopPropagation()} />
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Photo suivante"
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => ((i ?? 0) + 1) % photos.length)
            }}
          >
            ›
          </button>
          <p className="lightbox__count">
            {index + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  )
}

function Amenities() {
  return (
    <section id="equipements" className="section section--tinted">
      <div className="container">
        <p className="eyebrow">Équipements</p>
        <h2>Tout le confort pour un séjour serein</h2>
        <div className="amenities">
          {amenities.map((group) => (
            <div key={group.title} className="amenity">
              <h3>
                <span aria-hidden="true">{group.icon}</span> {group.title}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="avis" className="section">
      <div className="container">
        <p className="eyebrow">Avis voyageurs</p>
        <h2>
          <span className="star">★</span> 4,93 · 14 commentaires
        </h2>
        <ul className="ratings">
          {ratings.map(([label, value]) => (
            <li key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </li>
          ))}
        </ul>
        <div className="reviews">
          {reviews.map((r) => (
            <figure key={r.name} className="review">
              <blockquote>« {r.text} »</blockquote>
              <figcaption>
                <strong>{r.name}</strong> · {r.date}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="center">
          <a className="link" href={AIRBNB_URL} target="_blank" rel="noreferrer">
            Lire tous les avis sur Airbnb →
          </a>
        </div>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section id="acces" className="section section--tinted">
      <div className="container split">
        <div>
          <p className="eyebrow">Accès & alentours</p>
          <h2>Entre lac et montagne</h2>
          <p>
            Savines-le-Lac est un village des Hautes-Alpes posé sur les rives du lac de
            Serre-Ponçon, entre Gap et Embrun. Un point de départ idéal, été comme hiver.
          </p>
          <div className="nearby">
            {nearby.map((n) => (
              <div key={n.title} className="nearby__item">
                <span className="nearby__icon" aria-hidden="true">{n.icon}</span>
                <div>
                  <h3>{n.title}</h3>
                  <p>{n.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <Link className="link" to="/activites">Toutes nos activités et bonnes adresses →</Link>
          </p>
        </div>
        <div className="map">
          <iframe
            title="Carte de Savines-le-Lac"
            src="https://www.openstreetmap.org/export/embed.html?bbox=6.33%2C44.49%2C6.45%2C44.56&layer=mapnik&marker=44.526%2C6.398"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

function Booking() {
  const [form, setForm] = useState({ name: '', arrival: '', departure: '', guests: '', message: '' })
  const update = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `Demande de séjour – ${form.name}`
    const body = [
      `Nom : ${form.name}`,
      `Arrivée : ${form.arrival}`,
      `Départ : ${form.departure}`,
      `Voyageurs : ${form.guests}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="reserver" className="section booking">
      <div className="container split">
        <div>
          <p className="eyebrow">Réserver</p>
          <h2>Votre séjour à Sunny Lodge</h2>
          <ul className="practical">
            <li><strong>Arrivée</strong> à partir de 16h00</li>
            <li><strong>Départ</strong> avant 11h00</li>
            <li><strong>Capacité</strong> 10 voyageurs</li>
            <li><strong>Hôtes</strong> Solène & Sylvain, Superhôtes</li>
          </ul>
          <a className="btn" href={AIRBNB_URL} target="_blank" rel="noreferrer">
            Voir les disponibilités sur Airbnb
          </a>
        </div>
        {CONTACT_EMAIL ? (
          <form className="form" onSubmit={onSubmit}>
            <h3>Nous contacter directement</h3>
            <label>
              Nom
              <input required value={form.name} onChange={update('name')} />
            </label>
            <div className="form__row">
              <label>
                Arrivée
                <input type="date" value={form.arrival} onChange={update('arrival')} />
              </label>
              <label>
                Départ
                <input type="date" value={form.departure} onChange={update('departure')} />
              </label>
            </div>
            <label>
              Nombre de voyageurs
              <input type="number" min="1" max="10" value={form.guests} onChange={update('guests')} />
            </label>
            <label>
              Message
              <textarea rows={4} value={form.message} onChange={update('message')} />
            </label>
            <button className="btn" type="submit">Envoyer la demande</button>
          </form>
        ) : (
          <img className="booking__photo" src={photos[4].src} alt={photos[4].alt} loading="lazy" />
        )}
      </div>
    </section>
  )
}

function ActivitiesTeaser() {
  return (
    <section id="activites" className="section">
      <div className="container">
        <p className="eyebrow">Que faire autour ?</p>
        <h2>Activités & bonnes adresses</h2>
        <p className="section__lead">
          Ski à Réallon, randonnée au Pic de Morgon, kitesurf aux Eaux Douces ou baignade dans
          le lac : découvrez nos activités préférées, été comme hiver.
        </p>
        <div className="teaser">
          {Object.entries(seasons).map(([key, s]) => (
            <Link key={key} to={`/activites#${key}`} className={`teaser__card teaser__card--${key}`}>
              <span className="teaser__emoji" aria-hidden="true">{s.emoji}</span>
              <h3>En {s.label.toLowerCase()}</h3>
              <p>
                {activities
                  .filter((a) => a.season === key)
                  .map((a) => a.title)
                  .join(' · ')}
              </p>
              <span className="activity-card__more">Découvrir →</span>
            </Link>
          ))}
          <Link to="/restaurants" className="teaser__card teaser__card--food">
            <span className="teaser__emoji" aria-hidden="true">🍽️</span>
            <h3>Bars & restaurants</h3>
            <p>Nos tables et terrasses préférées autour du lac.</p>
            <span className="activity-card__more">Découvrir →</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Bedrooms />
      <Gallery />
      <Amenities />
      <ActivitiesTeaser />
      <Reviews />
      <Location />
      <Booking />
    </>
  )
}
