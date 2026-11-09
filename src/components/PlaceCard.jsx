const mapsSearch = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

function parkingUrl(parking) {
  if (parking.coords) return mapsSearch(parking.coords.join(','))
  return mapsSearch(parking.query || parking.name)
}

const formatKm = (km) => `${String(km).replace('.', ',')} km`

export default function PlaceCard({ place }) {
  const mapsUrl = !place.parking && place.location ? mapsSearch(place.location) : null
  const hike = place.hike
  const showMedia = Boolean(place.photo || hike || place.icon)
  const top = (place.kind || place.distance) && (
    <div className="place__top">
      {place.kind && <span className="tag">{place.kind}</span>}
      {place.distance && <span className="place__distance">🚗 {place.distance}</span>}
    </div>
  )

  return (
    <article className={`place ${place.draft ? 'place--draft' : ''} ${hike || place.icon ? 'place--hike' : ''}`}>
      {showMedia ? (
        <div className="place__media">
          {place.photo ? (
            <img className="place__photo" src={place.photo} alt={place.name} loading="lazy" />
          ) : (
            <div className="place__photo place__photo--empty" aria-hidden="true">
              {place.icon || '⛰️'}
            </div>
          )}
          {top}
        </div>
      ) : (
        top
      )}
      <h3>{place.name}</h3>
      {place.description && <p>{place.description}</p>}

      {place.features?.length > 0 && (
        <ul className="features">
          {place.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}

      {hike && (
        <dl className="hike-stats">
          {hike.ascent && (
            <div>
              <dt>Dénivelé</dt>
              <dd>↗ {hike.ascent} m</dd>
            </div>
          )}
          {hike.descent && (
            <div>
              <dt>Descente</dt>
              <dd>↘ {hike.descent} m</dd>
            </div>
          )}
          {hike.distance && (
            <div>
              <dt>Distance</dt>
              <dd>{formatKm(hike.distance)}</dd>
            </div>
          )}
          {hike.grade && (
            <div>
              <dt>Pente moy.</dt>
              <dd>{hike.grade}</dd>
            </div>
          )}
          {hike.duration && (
            <div>
              <dt>Durée</dt>
              <dd>{hike.duration}</dd>
            </div>
          )}
          {hike.type && (
            <div>
              <dt>Parcours</dt>
              <dd>{hike.type}</dd>
            </div>
          )}
        </dl>
      )}

      {place.parking && (
        <div className="parking">
          <p className="parking__title">
            <span aria-hidden="true">🅿️</span> Départ : {place.parking.name}
          </p>
          {place.parking.warning && <p className="parking__warning">⚠️ {place.parking.warning}</p>}
          {place.parking.tip && <p className="parking__tip">🚡 {place.parking.tip}</p>}
        </div>
      )}

      {(place.parking || mapsUrl || place.website || place.instagram || place.phone || place.guide) && (
        <div className="place__links">
          {place.parking && (
            <a href={parkingUrl(place.parking)} target="_blank" rel="noreferrer">
              📍 Point de départ
            </a>
          )}
          {mapsUrl && (
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              Itinéraire
            </a>
          )}
          {place.guide && (
            <a href={place.guide} target="_blank" rel="noreferrer">
              Fiche détaillée
            </a>
          )}
          {place.website && (
            <a href={place.website} target="_blank" rel="noreferrer">
              Site web
            </a>
          )}
          {place.instagram && (
            <a href={place.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          )}
          {place.phone && <a href={`tel:${place.phone.replace(/\s/g, '')}`}>{place.phone}</a>}
        </div>
      )}
      {place.draft && <p className="place__draft">À compléter</p>}
    </article>
  )
}
