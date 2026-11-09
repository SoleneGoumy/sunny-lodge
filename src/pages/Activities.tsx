import { Link } from 'react-router-dom'
import { activities, seasons } from '../activities'
import type { Activity, SeasonId } from '../types'

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <Link to={`/activites/${activity.slug}`} className={`activity-card activity-card--${activity.season}`}>
      <span className="activity-card__emoji" aria-hidden="true">{activity.emoji}</span>
      <h3>{activity.title}</h3>
      <p>{activity.tagline}</p>
      <span className="activity-card__more">Nos bonnes adresses →</span>
    </Link>
  )
}

export default function Activities() {
  return (
    <>
      <section className="page-hero page-hero--mixed">
        <div className="container">
          <p className="eyebrow">Que faire autour de Sunny Lodge ?</p>
          <h1>Activités été comme hiver</h1>
          <p className="page-hero__lead">
            Entre le lac de Serre-Ponçon et les stations des Hautes-Alpes, il y a de quoi remplir
            chaque journée de votre séjour. Voici nos activités préférées et les adresses que nous
            recommandons.
          </p>
          <div className="season-switch">
            {Object.entries(seasons).map(([key, s]) => (
              <a key={key} href={`#${key}`} className="btn btn--ghost">
                {s.emoji} {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {Object.entries(seasons).map(([key, s], i) => (
        <section key={key} id={key} className={`section ${i % 2 ? 'section--tinted' : ''}`}>
          <div className="container">
            <p className="eyebrow">{s.emoji} {s.label}</p>
            <h2>En {s.label.toLowerCase()}</h2>
            <p className="section__lead">{s.intro}</p>
            <div className="activity-grid">
              {activities
                .filter((a) => a.season === key)
                .map((a) => (
                  <ActivityCard key={a.slug} activity={a} />
                ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
