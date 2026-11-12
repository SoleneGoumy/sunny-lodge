// Toutes les infos du gîte sont centralisées ici : modifiez ce fichier pour mettre le site à jour.
// Les types (autocomplétion) sont dans src/types.ts.

import type {
	AmenityGroup,
	BookingSettings,
	Bedroom,
	Highlight,
	NearbyItem,
	Photo,
	Bathroom,
	Hosts,
	Rating,
	Review,
	ReviewSource,
	ReviewSourceInfo,
} from "./types";
import type { PhotoPath } from "./photos.generated";

export const AIRBNB_URL = "https://www.airbnb.fr/rooms/1592175823173427125";

// Demandes de réservation directes.
// web3formsKey : créez une clé gratuite sur https://web3forms.com avec sunnylodge05@gmail.com
// (la clé n'est pas secrète, elle indique seulement à quelle adresse envoyer les demandes).
export const BOOKING: BookingSettings = {
  web3formsKey: "59b5e2e1-3148-4169-9fae-ae8329529f37",
  maxGuests: 10,
  minNights: 2,
  // Dates fermées à la main (ex. réglages Airbnb qui ne sont pas exportés dans le lien iCal).
  // `end` est le premier jour à nouveau libre (jour de départ possible).
  manualBlocks: [{ start: "2026-11-09", end: "2027-02-01" }],
}


// Photos de la maison (dans public/maison/, originaux dans photos-originales/maison/).
// Chaque liste forme une section de photos sur l'accueil.

/** Texte sous le titre « Espace de vie ». */
export const livingIntro =
	"La maison s’articule autour d’une grande pièce de vie de 37 m² avec un coin salon, une grande table à manger et une cuisine ouverte tout équipée. À l’étage, un second petit salon sur la mezzanine offre une vue encore plus spectaculaire sur les montagnes et le lac. Une entrée spacieuse dessert aussi une buanderie avec de l’espace de rangement.";

/** Section « Espace de vie ». */
export const livingPhotos: Photo[] = [
	{ src: "/maison/salon.jpg", alt: "Le salon" },
	{ src: "/maison/salle-a-manger.jpg", alt: "La salle à manger" },
	{ src: "/maison/cuisine.jpg", alt: "La cuisine" },
	{ src: "/maison/entree.jpg", alt: "L’entrée" },
	{ src: "/maison/mezzanine.jpg", alt: "La mezzanine" },
];

/** Texte sous le titre « Extérieur ». */
export const outdoorIntro =
	"Une grande terrasse de 30 m² plein sud avec un petit coin salon, une grande table pour déjeuner dehors et un barbecue à gaz. Le jardin offre un grand espace vert au calme, et un grand parking peut accueillir vos véhicules.";

/** Section « Extérieur ». */
export const outdoorPhotos: Photo[] = [
	{ src: "/maison/maison-ete.jpg", alt: "La maison et son jardin en été" },
	{ src: "/maison/terrasse.jpg", alt: "La terrasse" },
	{ src: "/maison/terrasse-bbq.jpg", alt: "La terrasse et le barbecue" },
	{ src: "/maison/maison-hiver.jpg", alt: "La maison en hiver" },
	{ src: "/maison/parking.jpg", alt: "Le parking" },
	{ src: "/maison/parking-2.jpg", alt: "Le parking" },
];

/** Photo de fond de l'accueil. */
export const heroPhoto: PhotoPath = "/maison/maison-ete.jpg";

/** Les 3 photos à côté de la présentation « La maison ». */
export const aboutPhotos: Photo[] = [
	{ src: "/maison/salon.jpg", alt: "Le salon" },
	{ src: "/maison/salle-a-manger.jpg", alt: "La salle à manger" },
	{ src: "/maison/terrasse.jpg", alt: "La terrasse" },
];

/** Section « Vos hôtes » (ajoutez `photo: "/maison/hotes.jpg"` quand la photo est dans public/). */
export const hosts: Hosts = {
	names: "Solène & Sylvain",
	initials: "S & S",
	text: [
		"Nous habitons juste à côté de Sunny Lodge et nous sommes passionnés par notre région, entre lac et montagnes.",
		"Nous serons ravis de vous accueillir et de vous donner nos meilleurs conseils d’activités, de visites et de bonnes adresses pour profiter pleinement de votre séjour, été comme hiver.",
	],
};

export const highlights: Highlight[] = [
	{ value: "10", label: "voyageurs" },
	{ value: "4", label: "chambres" },
	{ value: "7", label: "lits" },
	{ value: "2", label: "salles de bain" },
];

export const bedrooms: Bedroom[] = [
	{
		name: "Chambre 1",
		floor: "Rez-de-chaussée",
		beds: "1 lit double (160 × 200)",
		photos: ["/maison/chambre-rdc.jpg"],
	},
	{
		name: "Chambre 2",
		floor: "Étage",
		beds: "1 lit double (160 × 200)",
		photos: ["/maison/chambre-nature.jpg", "/maison/chambre-nature-2.jpg"],
	},
	{
		name: "Chambre 3",
		floor: "Étage",
		beds: "2 lits superposés (90 × 190)",
		photos: ["/maison/chambre-montagne.jpg", "/maison/chambre-montagne-2.jpg"],
	},
	{
		name: "Chambre 4",
		floor: "Étage",
		beds: "1 lit double (160 × 200)",
		photos: ["/maison/chambre-soleil.jpg", "/maison/chambre-soleil-2.jpg"],
	},
];

/** Salles de bain, affichées sous les chambres. */
export const bathrooms: Bathroom[] = [
	{
		name: "Salle de bain",
		floor: "Rez-de-chaussée",
		photos: ["/maison/salle-de-bain-rdc.jpg"],
	},
	{
		name: "Salle de bain",
		floor: "Étage",
		photos: ["/maison/salle-de-bain-etage.jpg"],
	},
];

export const amenities: AmenityGroup[] = [
	{
		title: "Cuisine & repas",
		icon: "🍳",
		items: [
			"Four, plaques de cuisson, micro-ondes",
			"Lave-vaisselle",
			"Réfrigérateur & congélateur",
			"Cafetière Nespresso",
			"Bouilloire, grille-pain",
			"Verres à vin",
			"Appareil à raclette",
		],
	},
	{
		title: "Extérieur",
		icon: "🌿",
		items: [
			"Jardin privé",
			"Grande terrasse vue montagnes",
			"Espace repas pour 10 personnes",
			"Barbecue à gaz",
			"Mobilier de jardin",
			"Parking",
		],
	},
	{
		title: "Confort",
		icon: "🛋️",
		items: [
			"Wifi",
			"Télévision",
			"Chauffage au sol",
			"Lave-linge",
			"Volets roulants occultants",
			"Placards pour vêtements",
		],
	},
	{
		title: "Famille",
		icon: "🧸",
		items: [
			"Livres et jouets pour enfants",
			"Mezzanine coin lecture vue lac",
			"Lit parapluie",
		],
	},
];

// Plateformes d'avis : ajoutez l'adresse Google une fois la fiche validée.
export const reviewSources: Record<ReviewSource, ReviewSourceInfo> = {
	airbnb: { label: "Airbnb", url: AIRBNB_URL },
	"gites-de-france": {
		label: "Gîtes de France",
		url: "https://www.gites-de-france.com/fr/provence-alpes-cote-dazur/hautes-alpes/sunny-lodge-05g6767",
	},
	google: { label: "Google", url: "" },
};

export const reviews: Review[] = [
	{
		name: "Thomas",
		date: "septembre 2026",
		text: "Super séjour, maison spacieuse et lumineuse dans un cadre incroyable !",
		source: "airbnb",
	},
	{
		name: "Laura",
		date: "juillet 2026",
		text: "Très beau séjour dans cette magnifique maison. La vue sur le lac depuis le deuxième étage est sublime ! Tout le confort y est.",
		source: "airbnb",
	},
	{
		name: "Elena",
		date: "août 2026",
		text: "Nous avons passé un très bon séjour, la maison est fidèle aux photos, propre, au calme avec une cuisine bien équipée.",
		source: "airbnb",
	},
	{
		name: "Nathan",
		date: "juin 2026",
		text: "Très bel endroit, très bel accueil, maison très propre. Je recommande !",
		source: "airbnb",
	},
];

export const ratings: Rating[] = [
	["Propreté", "4,9"],
	["Précision", "5,0"],
	["Arrivée", "4,9"],
	["Communication", "4,9"],
	["Emplacement", "4,9"],
	["Qualité-prix", "4,6"],
];

export const nearby: NearbyItem[] = [
	{
		icon: "🥖",
		title: "Village",
		text: "Commerces et restaurants à 5 minutes en voiture.",
	},
	{
		icon: "🏖️",
		title: "Lac de Serre-Ponçon",
		text: "Plages à 5 minutes en voiture.",
	},
	{
		icon: "⛷️",
		title: "Ski",
		text: "Station de Réallon à 15 minutes en voiture.",
	},
	{
		icon: "🥾",
		title: "Randonnées",
		text: "Sentiers au départ de la maison.",
	},
];
