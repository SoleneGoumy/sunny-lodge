// Toutes les infos du gîte sont centralisées ici : modifiez ce fichier pour mettre le site à jour.
// Les types (autocomplétion) sont dans src/types.ts.

import type {
	AmenityGroup,
	BookingSettings,
	Bedroom,
	Highlight,
	NearbyItem,
	Photo,
	Rating,
	Review,
	ReviewSource,
	ReviewSourceInfo,
} from "./types";

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


const base = "https://a0.muscache.com/im/pictures/hosting";
const img = (path: string): string => `${base}/${path}?im_w=1440`;

// Photos de l'annonce Airbnb. Pour plus de fiabilité, vous pouvez les copier dans /public/photos
// et remplacer les URL par '/photos/nom.jpg'.
export const photos: Photo[] = [
	"Hosting-1592175823173427125/original/aff61be9-44fe-42bc-b406-c77c22b9bda2.jpeg",
	"Hosting-1592175823173427125/original/498fbe69-9dd4-4c42-8081-8f03d2bf3aa0.jpeg",
	"Hosting-1592175823173427125/original/2c09fb31-3c8f-4679-986c-f832020ea6aa.jpeg",
	"Hosting-1592175823173427125/original/471c2912-7e9a-42c8-b79f-ba0e4a062b1e.jpeg",
	"Hosting-1592175823173427125/original/53463db0-6fe8-4a26-8867-7793d157a1cd.jpeg",
	"Hosting-1551264521786378661/original/068b070b-d0cd-4449-a058-622bbf5bbcd5.jpeg",
	"Hosting-1592175823173427125/original/d0e9c01d-8701-45b6-a071-b48fe4ba046f.jpeg",
	"Hosting-1592175823173427125/original/b398be9c-8bde-4827-8f51-876db8a90623.jpeg",
	"Hosting-1592175823173427125/original/1cbde414-7e74-4643-a62b-0954f590d292.jpeg",
	"Hosting-1592175823173427125/original/86d7c2a1-9129-4763-ac57-7b63976514d2.jpeg",
	"Hosting-1592175823173427125/original/a2b397e5-c36e-40a9-97bf-54b541b58612.jpeg",
	"Hosting-1592175823173427125/original/1bcdd603-ca6e-4343-8bb0-15cba9fa6556.jpeg",
	"Hosting-1592175823173427125/original/d36a57fe-7e3c-4e1e-8578-0256e38c9c27.jpeg",
	"Hosting-1592175823173427125/original/589a743c-8886-405e-9674-8eb1e3580fc4.jpeg",
	"Hosting-1592175823173427125/original/4288d30e-16c0-461c-88af-f73956e2f4b0.jpeg",
	"Hosting-1592175823173427125/original/c3489f96-1927-423b-a90a-f815e58b5c08.jpeg",
].map((p, i) => ({ src: img(p), alt: `Sunny Lodge – photo ${i + 1}` }));

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
		photo: img(
			"Hosting-1551264521786378661/original/d93aadfc-52d0-4f8b-9590-f50c8a5f2d87.jpeg",
		),
	},
	{
		name: "Chambre 2",
		floor: "Étage",
		beds: "1 lit double (160 × 200)",
		photo: img(
			"Hosting-1592175823173427125/original/d5e10ddf-6e57-4f5e-97c3-3f2f2b6ecf1d.jpeg",
		),
	},
	{
		name: "Chambre 3",
		floor: "Étage",
		beds: "2 lits superposés (90 × 190)",
		photo: img(
			"Hosting-1592175823173427125/original/2dd65a6e-7c42-4c69-9f6d-57865d169f00.jpeg",
		),
	},
	{
		name: "Chambre 4",
		floor: "Étage",
		beds: "1 lit double (160 × 200)",
		photo: img(
			"Hosting-1592175823173427125/original/cd113d5d-2238-4e63-9e0c-b6c3ab3be4cf.jpeg",
		),
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
