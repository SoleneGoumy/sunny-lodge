import { Link, useParams } from 'react-router-dom'
import { activities, getActivity, seasons } from '../activities'
import PlaceCard from '../components/PlaceCard'
import { ActivityCard } from './Activities'
import NotFound from './NotFound'

export default function Activity() {
  const { slug } = useParams()
  const activity = getActivity(slug)
  if (!activity) return <NotFound />

  const season = seasons[activity.season]
  const others = activities.filter((a) => a.season === activity.season && a.slug !== slug)

  return (
    <>
      <section className={`page-hero page-hero--${activity.season}`}>
        <div className="container">
          <Link to={`/activites#${activity.season}`} className="back">
            ← Activités d'{activity.season === 'ete' ? 'été' : 'hiver'}
          </Link>
          <p className="eyebrow">
            {season.emoji} {season.label}
          </p>
          <h1>
            <span aria-hidden="true">{activity.emoji}</span> {activity.title}
          </h1>
          <p className="page-hero__lead">{activity.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{activity.placesTitle || 'Nos bonnes adresses'}</h2>
          <div className="places">
            {activity.places.map((p) => (
              <PlaceCard key={p.name} place={p} />
            ))}
          </div>

          {activity.sections?.map((sec) => (
            <div key={sec.title} className="places-section">
              <h2>{sec.title}</h2>
              <div className="places">
                {sec.places.map((p) => (
                  <PlaceCard key={p.name} place={p} />
                ))}
              </div>
            </div>
          ))}

          {activity.tips && activity.tips.length > 0 && (
            <div className="tips">
              <h3>💡 Nos conseils</h3>
              <ul>
                {activity.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {others.length > 0 && (
        <section className="section section--tinted">
          <div className="container">
            <h2>Autres activités en {season.label.toLowerCase()}</h2>
            <div className="activity-grid">
              {others.map((a) => (
                <ActivityCard key={a.slug} activity={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
