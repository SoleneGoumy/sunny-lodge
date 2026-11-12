import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const NAV = [
  ['/#maison', 'La maison'],
  ['/#chambres', 'Chambres'],
  ['/#espace-de-vie', 'Espace de vie'],
  ['/#exterieur', 'Extérieur'],
  ['/activites', 'Activités'],
  ['/visites', 'Visites'],
  ['/restaurants', 'Restaurants'],
  ['/#acces', 'Accès'],
]

// Gère le défilement : en haut de page à chaque changement de page, ou vers l'ancre (#section).
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.slice(1)
    let tries = 0
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView()
      else if (tries++ < 10) setTimeout(tryScroll, 50)
    }
    tryScroll()
  }, [pathname, hash])
  return null
}

function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const solid = !isHome || scrolled || open

  return (
    <header className={`header ${solid ? 'header--solid' : ''}`}>
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        <span className="logo__sun" aria-hidden="true" />
        Sunny Lodge
      </Link>
      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav ${open ? 'nav--open' : ''}`}>
        {NAV.map(([to, label]) =>
          to.includes('#') ? (
            <Link key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ) : (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          )
        )}
        <Link to="/#reserver" className="btn btn--small" onClick={() => setOpen(false)}>
          Réserver
        </Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="logo">
          <span className="logo__sun" aria-hidden="true" />
          Sunny Lodge
        </p>
        <nav className="footer__nav">
          <Link to="/">Accueil</Link>
          <Link to="/activites">Activités</Link>
          <Link to="/visites">Visites</Link>
          <Link to="/restaurants">Restaurants</Link>
        </nav>
        <p className="muted">© {new Date().getFullYear()} Sunny Lodge · Savines-le-Lac</p>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
