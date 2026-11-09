import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero page-hero--mixed">
      <div className="container">
        <h1>Page introuvable</h1>
        <p className="page-hero__lead">Cette page n'existe pas ou a été déplacée.</p>
        <Link to="/" className="btn">Retour à l'accueil</Link>
      </div>
    </section>
  )
}
