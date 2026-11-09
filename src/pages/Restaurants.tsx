import { restaurantCategories } from '../activities'
import PlaceCard from '../components/PlaceCard'

export default function Restaurants() {
  return (
    <>
      <section className="page-hero page-hero--food">
        <div className="container">
          <p className="eyebrow">Nos coups de cœur</p>
          <h1>Bars & restaurants</h1>
          <p className="page-hero__lead">
            Une terrasse au bord du lac, une bonne table pour un dîner entre amis ou des pizzas à
            déguster sur la terrasse de la maison : voici les adresses que nous aimons.
          </p>
        </div>
      </section>

      {restaurantCategories.map((cat, i) => (
        <section key={cat.title} className={`section section--compact ${i % 2 ? 'section--tinted' : ''}`}>
          <div className="container">
            <h2>
              <span aria-hidden="true">{cat.emoji}</span> {cat.title}
            </h2>
            {cat.note && <p className="category-note">☀️ {cat.note}</p>}
            <div className="places">
              {cat.places.map((p) => (
                <PlaceCard key={p.name} place={{ icon: '🍽️', ...p }} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
