import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Photo } from "../types";
import {
	AIRBNB_URL,
	livingPhotos,
	outdoorPhotos,
	livingIntro,
	outdoorIntro,
	bathrooms,
	hosts,
	heroPhoto,
	aboutPhotos,
	highlights,
	bedrooms,
	amenities,
	reviews,
	nearby,
	reviewSources,
} from "../data";
import BookingWidget from "../booking/BookingWidget";
import ReviewBadge from "../components/ReviewBadge";
import type { ReviewSource } from "../types";
import { activities, seasons } from "../activities";

function Hero() {
	return (
		<section
			id="top"
			className="hero"
			style={{ backgroundImage: `url(${heroPhoto})` }}
		>
			<div className="hero__overlay" />
			<div className="hero__content">
				<p className="eyebrow">Location à Savines-le-Lac · Hautes-Alpes</p>
				<h1>Sunny Lodge</h1>
				<p className="hero__lead">
					Maison de vacances baignée de soleil, entre le lac de Serre-Ponçon et
					les montagnes, pour se retrouver en famille ou entre amis.
				</p>
				<div className="hero__actions">
					<a href="#reserver" className="btn">
						Vérifier les disponibilités
					</a>
					<a href="#espace-de-vie" className="btn btn--ghost">
						Voir les photos
					</a>
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
	);
}

function About() {
	return (
		<section id="maison" className="section">
			<div className="container split">
				<div>
					<p className="eyebrow">La maison</p>
					<h2>Plein sud, grandes baies vitrées, vue sur les sommets</h2>
					<p>
						La Maison Sunny Lodge est une location pouvant accueillir jusqu'à{" "}
						<strong>10 personnes</strong> pour un séjour à Savines-le-Lac, dans
						un <strong>quartier calme et paisible</strong>. A moins de 5 minutes
						du village et des plages et à 15 minutes des pistes de ski, elle est
						idéalement située pour des vacances inoubliables !
					</p>
					<p>
						Grâce à son exposition plein sud, la maison est baignée de soleil en
						toute saison. La pièce de vie, spacieuse et très lumineuse, s'ouvre
						sur une grande terrasse offrant une vue magnifique sur les montagnes
						environnantes.
					</p>
				</div>
				<div className="mosaic">
					{aboutPhotos.map((p) => (
						<img key={p.src} src={p.src} alt={p.alt} loading="lazy" />
					))}
				</div>
			</div>
		</section>
	);
}

/** Petit carrousel de photos d'une chambre (glisser au doigt, flèches ou points). */
function RoomCarousel({ photos, name }: { photos: string[]; name: string }) {
	const [index, setIndex] = useState(0);
	const track = useRef<HTMLDivElement>(null);

	const goTo = (i: number) => {
		const el = track.current;
		if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
	};
	const onScroll = () => {
		const el = track.current;
		if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth));
	};

	return (
		<div className="room-carousel">
			<div className="room-carousel__track" ref={track} onScroll={onScroll}>
				{photos.map((src, i) => (
					<img
						key={src}
						src={src}
						alt={photos.length > 1 ? `${name} – photo ${i + 1}` : name}
						loading="lazy"
					/>
				))}
			</div>
			{photos.length > 1 && (
				<>
					<button
						type="button"
						className="room-carousel__arrow room-carousel__arrow--prev"
						onClick={() => goTo(index - 1)}
						disabled={index === 0}
						aria-label="Photo précédente"
					>
						‹
					</button>
					<button
						type="button"
						className="room-carousel__arrow room-carousel__arrow--next"
						onClick={() => goTo(index + 1)}
						disabled={index === photos.length - 1}
						aria-label="Photo suivante"
					>
						›
					</button>
					<div className="room-carousel__dots">
						{photos.map((src, i) => (
							<button
								key={src}
								type="button"
								className={i === index ? "is-active" : undefined}
								onClick={() => goTo(i)}
								aria-label={`Photo ${i + 1}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
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
							<RoomCarousel photos={b.photos} name={b.name} />
							<div className="card__body">
								<h3>{b.name}</h3>
								<p className="muted">{b.floor}</p>
								<p>{b.beds}</p>
							</div>
						</article>
					))}
				</div>
				<h3 className="cards-title">Salles de bain</h3>
				<div className="cards">
					{bathrooms.map((b) => (
						<article key={b.floor} className="card">
							<RoomCarousel photos={b.photos} name={`${b.name} – ${b.floor}`} />
							<div className="card__body">
								<h3>{b.name}</h3>
								<p className="muted">{b.floor}</p>
								{b.details && <p>{b.details}</p>}
							</div>
						</article>
					))}
				</div>
				<div className="note">
					<strong>Linge de maison :</strong> draps et serviettes ne sont pas
					fournis, mais peuvent être proposés en option sur demande. Tailles :
					lits doubles 160 × 200 (housse de couette 220 × 240), lits simples 90
					× 190 (housse 140 × 200), taies 60 × 60.
				</div>
			</div>
		</section>
	);
}

/** Section de photos (grille + diaporama plein écran au clic). */
function PhotoSection({
	id,
	eyebrow,
	title,
	intro,
	photos,
}: {
	id: string;
	eyebrow: string;
	title: string;
	intro?: string;
	photos: Photo[];
}) {
	const [index, setIndex] = useState<number | null>(null);

	useEffect(() => {
		if (index === null) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIndex(null);
			if (e.key === "ArrowRight")
				setIndex((i) => ((i ?? 0) + 1) % photos.length);
			if (e.key === "ArrowLeft")
				setIndex((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [index]);

	return (
		<section id={id} className="section section--photos">
			<div className="container">
				<p className="eyebrow">{eyebrow}</p>
				<h2>{title}</h2>
				{intro && <p className="section-intro">{intro}</p>}
				<div className="gallery">
					{photos.map((p, i) => (
						<button
							key={p.src}
							className="gallery__item"
							onClick={() => setIndex(i)}
							aria-label={`Agrandir : ${p.alt}`}
							type="button"
						>
							<img src={p.src} alt={p.alt} loading="lazy" />
						</button>
					))}
				</div>
			</div>

			{index !== null && (
				<div
					className="lightbox"
					role="dialog"
					aria-modal="true"
					onClick={() => setIndex(null)}
				>
					<button className="lightbox__close" aria-label="Fermer">
						×
					</button>
					<button
						className="lightbox__nav lightbox__nav--prev"
						aria-label="Photo précédente"
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setIndex((i) => ((i ?? 0) - 1 + photos.length) % photos.length);
						}}
					>
						‹
					</button>
					<img
						src={photos[index].src}
						alt={photos[index].alt}
						onClick={(e) => e.stopPropagation()}
					/>
					<button
						className="lightbox__nav lightbox__nav--next"
						aria-label="Photo suivante"
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							setIndex((i) => ((i ?? 0) + 1) % photos.length);
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
	);
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
							<h3>{group.title}</h3>
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
	);
}

function Reviews() {
	return (
		<section id="avis" className="section section--reviews">
			<div className="container">
				<p className="eyebrow">Avis voyageurs</p>
				<h2>
					<span className="star">★</span> 4,93 · 14 commentaires sur Airbnb
				</h2>
				<div className="reviews">
					{reviews.map((r) => (
						<figure key={`${r.source}-${r.name}-${r.date}`} className="review">
							<ReviewBadge source={r.source} />
							<blockquote>« {r.text} »</blockquote>
							<figcaption>
								<strong>{r.name}</strong> · {r.date}
							</figcaption>
						</figure>
					))}
				</div>
				<div className="center review-links">
					{(Object.keys(reviewSources) as ReviewSource[])
						.filter(
							(key) =>
								reviewSources[key].url && reviews.some((r) => r.source === key),
						)
						.map((key) => (
							<a
								key={key}
								className="link"
								href={reviewSources[key].url}
								target="_blank"
								rel="noreferrer"
							>
								Lire tous les avis sur {reviewSources[key].label} →
							</a>
						))}
				</div>
			</div>
		</section>
	);
}

function Hosts() {
	return (
		<section id="hotes" className="section">
			<div className="container hosts">
				<div className="hosts__photo">
					{hosts.photo ? (
						<img src={hosts.photo} alt={hosts.names} loading="lazy" />
					) : (
						<span aria-hidden="true">{hosts.initials}</span>
					)}
				</div>
				<div>
					<p className="eyebrow">Vos hôtes</p>
					<h2>{hosts.names}</h2>
					{hosts.text.map((t) => (
						<p key={t}>{t}</p>
					))}
				</div>
			</div>
		</section>
	);
}

function Location() {
	return (
		<section id="acces" className="section section--tinted">
			<div className="container split">
				<div>
					<p className="eyebrow">Accès & alentours</p>
					<h2>Savines-le-Lac, entre lac et montagnes</h2>
					<p>
						Savines-le-Lac est un village des Hautes-Alpes sur les rives du lac
						de Serre-Ponçon, entre Gap et Embrun. Un cadre idéal, été comme
						hiver, pour les amoureux de nature, de montagne et d’activités en
						plein air.
					</p>
					<div className="nearby">
						{nearby.map((n) => (
							<div key={n.title} className="nearby__item">
								<span className="nearby__icon" aria-hidden="true">
									{n.icon}
								</span>
								<div>
									<h3>{n.title}</h3>
									<p>{n.text}</p>
								</div>
							</div>
						))}
					</div>
					<p style={{ marginTop: 24 }}>
						<Link className="link" to="/activites">
							Toutes nos activités et bonnes adresses →
						</Link>
					</p>
				</div>
				<div className="map">
					<iframe
						title="Carte de Savines-le-Lac"
						src="https://www.openstreetmap.org/export/embed.html?bbox=6.341%2C44.511%2C6.461%2C44.571&layer=mapnik&marker=44.541146%2C6.400990"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}

function Booking() {
	return (
		<section id="reserver" className="section booking">
			<div className="container">
				<div className="booking__head">
					<p className="eyebrow">Réserver en direct</p>
					<h2>Votre séjour à Sunny Lodge</h2>
					<p className="booking__intro">
						Choisissez vos dates parmi nos disponibilités et envoyez-nous votre
						demande : nous la validons avec vous directement, sans passer par
						une plateforme.
					</p>
				</div>
				<BookingWidget />
				<p className="booking__alt">
					Vous préférez passer par une plateforme ?{" "}
					<a href={AIRBNB_URL} target="_blank" rel="noreferrer">
						Réserver sur Airbnb →
					</a>
				</p>
			</div>
		</section>
	);
}

function ActivitiesTeaser() {
	return (
		<section id="activites" className="section">
			<div className="container">
				<p className="eyebrow">Que faire autour ?</p>
				<h2>Activités & bonnes adresses</h2>
				<p className="section__lead">
					Snowboard à Réallon, trail au Pic du Morgon, wingfoil aux Eaux Douces
					ou wakesurf sur le lac : découvrez nos activités préférées, été comme
					hiver !
				</p>
				<div className="teaser">
					{Object.entries(seasons).map(([key, s]) => (
						<Link
							key={key}
							to={`/activites#${key}`}
							className={`teaser__card teaser__card--${key}`}
						>
							<h3>En {s.label.toLowerCase()}</h3>
							<p>
								{activities
									.filter((a) => a.season === key)
									.map((a) => a.title)
									.join(" · ")}
							</p>
							<span className="activity-card__more">Découvrir →</span>
						</Link>
					))}
					<Link to="/restaurants" className="teaser__card teaser__card--food">
						<h3>Bars & restaurants</h3>
						<p>Nos tables et terrasses préférées autour du lac.</p>
						<span className="activity-card__more">Découvrir →</span>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Bedrooms />
			<PhotoSection
				id="espace-de-vie"
				eyebrow="Salon · Salle à manger · Cuisine"
				title="Espace de vie"
				intro={livingIntro}
				photos={livingPhotos}
			/>
			<PhotoSection
				id="exterieur"
				eyebrow="Terrasse · Jardin · Parking"
				title="Extérieur"
				intro={outdoorIntro}
				photos={outdoorPhotos}
			/>
			<Amenities />
			<ActivitiesTeaser />
			<Reviews />
			<Hosts />
			<Location />
			<Booking />
		</>
	);
}
