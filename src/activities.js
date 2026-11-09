// Activités et bonnes adresses autour de Sunny Lodge.
// Pour ajouter une adresse : copiez un bloc { name: ..., } dans la liste `places` de l'activité.
// Champs d'une adresse :
//   name        nom affiché
//   kind        petit libellé (école, location, station, sommet...)
//   description texte libre
//   distance    temps depuis la maison (facultatif)
//   location    lieu ou adresse : sert à générer le lien « Itinéraire » vers Google Maps
//   website     site internet (facultatif)
//   instagram   lien Instagram (facultatif)
//   hike        randonnée / vélo : { ascent (m), descent (m), distance (km), grade (pente), duration, type }
//   icon        emoji affiché à la place de la photo tant qu'il n'y en a pas (facultatif)
//   photo       photo de la carte, ex. '/randos/morgon.jpg' (fichier dans public/randos, format 3:2)
//   parking     point de départ : { name, coords: [lat, lon] ou query, warning, tip }
//   guide       lien vers la fiche détaillée
//   features    liste de services / équipements (pastilles)
//   phone       téléphone (facultatif)
//   (activité) placesTitle : titre de la liste, ex. « Nos randos préférées »
//   draft: true -> affiché comme « à compléter » (à retirer une fois les infos vérifiées)

export const seasons = {
	hiver: {
		label: "Hiver",
		emoji: "❄️",
		intro:
			"Trois stations à moins de 35 minutes, des sommets enneigés au-dessus du lac et le soleil des Hautes-Alpes.",
	},
	ete: {
		label: "Été",
		emoji: "☀️",
		intro:
			"Le lac de Serre-Ponçon au pied de la maison, des randonnées à perte de vue et du vent pour la glisse.",
	},
};

export const activities = [
	// ───────────── HIVER ─────────────
	{
		slug: "ski-alpin",
		season: "hiver",
		emoji: "⛷️",
		title: "Ski alpin & snowboard",
		placesTitle: "Nos stations préférées",
		tagline: "Réallon à 20 minutes, Les Orres et Crévoux à 30-35 minutes",
		intro:
			"Depuis Sunny Lodge, on choisit sa station selon l'envie du jour : la petite station familiale de Réallon juste au-dessus du lac, le grand domaine des Orres, ou le charme authentique de Crévoux.",
		tips: [
			"Pensez à vérifier l’enneigement et l’ouverture des routes avant de partir.",
			"Équipements spéciaux (chaînes ou chaussettes) obligatoires dans les Hautes-Alpes en hiver.",
		],
		places: [
			{
				name: "Réallon",
				kind: "Station · 1 560 m",
				distance: "13 km · 20 min",
				description:
					"Station conviviale et très familiale. Au sommet, vue imprenable sur le lac de Serre-Ponçon !",
				location: "Station de Réallon, 05160 Réallon",
			},
			{
				name: "Les Orres",
				kind: "Station · 1 550 – 2 720 m",
				distance: "20 km · 30 min",
				description:
					"Station plus grande et plus sportive : un domaine suffisamment grand, varié et bien pentu… mais avec beaucoup de monde.",
				location: "Les Orres 1650, 05200 Les Orres",
				website: "https://www.lesorres.com",
			},
			{
				name: "Crévoux",
				kind: "Petite station",
				distance: "25 km · 35 min",
				description:
					"Petite station avec seulement 2 télésièges. Idéale après une chute de neige fraîche : les pistes ne sont pas damées, génial pour le hors-piste !",
				location: "Station de Crévoux, 05200 Crévoux",
			},
		],
	},
	{
		slug: "ski-de-randonnee",
		season: "hiver",
		emoji: "🏔️",
		title: "Ski de randonnée",
		placesTitle: "Nos itinéraires préférés",
		tagline: "Monter à la force des jambes, descendre en poudreuse",
		intro:
			"Trois itinéraires accessibles que nous conseillons, chacun au départ d'une station : idéal pour découvrir ou pratiquer le ski de randonnée en toute tranquillité.",
		tips: [
			"Consultez toujours le bulletin d’estimation du risque d’avalanche (BERA) avant de partir.",
			"DVA, pelle, sonde : indispensables hors des itinéraires balisés en station. En cas de doute, faites appel à un guide.",
		],
		places: [
			{
				name: "Le Serre du Mouton",
				kind: "Réallon",
				distance: "20 min",
				description:
					"Depuis la station, on rejoint la route forestière de Joubelle puis le sentier du Serre du Mouton. Une belle sortie tranquille avec vue sur le lac.",
				hike: { ascent: "≈ 600", type: "Aller-retour" },
				parking: {
					name: "Parking de la station de Réallon, 1 550 m",
					coords: [44.5758029, 6.3618725],
				},
			},
			{
				name: "La Ratelle",
				kind: "Crévoux",
				distance: "35 min",
				description:
					"Itinéraire balisé qui monte jusqu’à la crête de la Ratelle sans croiser les pistes de ski alpin. Échappatoire possible au départ du téléski du Pré de l’Étoile (environ +600 m).",
				hike: { ascent: "≈ 1 000", type: "Itinéraire balisé" },
				parking: {
					name: "Front de neige de la station de Crévoux",
					query: "Station de ski de Crévoux",
				},
				guide:
					"https://geotrek-admin.ecrins-parcnational.fr/api/fr/courses/199/trace-de-letoile.pdf",
			},
			{
				name: "La Trace",
				kind: "Les Orres",
				distance: "30 min",
				description:
					"Itinéraire de montée en peaux de phoque aménagé dans la station, jusqu’au sommet du télésiège du Pic Vert. Descente par les pistes de son niveau.",
				hike: { type: "Itinéraire balisé en station" },
				parking: {
					name: "Station des Orres",
					query: "Les Orres 1650, 05200 Les Orres",
					warning:
						"Accessible uniquement pendant les heures d’ouverture des remontées. Au-delà du belvédère des Myrtilles : skieurs expérimentés.",
				},
				website:
					"https://www.lesorres.com/en/skiing-in-les-orres/ski-touring-la-trace",
			},
		],
	},
	{
		slug: "luge-et-neige",
		season: "hiver",
		emoji: "🎿",
		title: "Ski de fond, raquettes & luge",
		placesTitle: "Nos spots préférés",
		tagline: "Glisser autrement, pour petits et grands",
		intro:
			"Pas besoin d'être skieur alpin pour profiter de la neige : pistes de ski de fond tracées, balades en raquettes et descentes en luge font partie des meilleurs souvenirs d'hiver.",
		tips: ["Prévoyez des luges : certaines stations en louent sur place."],
		places: [
			{
				name: "La Chalp",
				kind: "Foyer nordique de Crévoux",
				distance: "60 min",
				icon: "🎿",
				description: "45 km de pistes tracées en pas alternatif et en skating.",
				location: "Foyer nordique, La Chalp, 05200 Crévoux",
			},
			{
				name: "Les Gourniers",
				kind: "Foyer nordique de Réallon.",
				distance: "30 min",
				icon: "🎿",
				description:
					"Une boucle nordique inédite de 2,5 km, tracée à 1 650 m d’altitude sur le plateau du Courtier.",
				location: "Les Gourniers, 05160 Réallon",
			},
		],
	},

	// ───────────── ÉTÉ ─────────────
	{
		slug: "randonnee",
		season: "ete",
		emoji: "🥾",
		title: "Randonnée",
		placesTitle: "Nos randos préférées",
		tagline: "Des sommets avec le lac à vos pieds",
		intro:
			"Autour de Savines-le-Lac, chaque sommet offre un panorama différent sur le lac de Serre-Ponçon et les massifs des Écrins et du Parpaillon. Voici nos randonnées préférées.",
		tips: [
			"Partez tôt l’été : la chaleur et les orages arrivent souvent l’après-midi.",
			"Emportez suffisamment d’eau, il y a peu de sources sur les crêtes.",
		],
		places: [
			{
				name: "Pic de Morgon",
				kind: "Sommet · 2 324 m",
				description:
					"Le sommet emblématique qui domine le lac : montée par le cirque de Morgon, puis boucle par la crête avec une vue plongeante sur Serre-Ponçon.",
				hike: { ascent: 783, distance: 11.1, duration: "4 h" },
				parking: {
					name: "Parking de Grand Clot (Crots), 1 664 m",
					coords: [44.4982579, 6.4336568],
					warning: "Parking payant l’été à partir de 8h.",
				},
				guide:
					"https://geotrek-admin.ecrins-parcnational.fr/api/fr/treks/918557/le-pic-de-morgon.pdf",
			},
			{
				name: "Mont Guillaume",
				kind: "Sommet · 2 542 m",
				description:
					"Avec sa chapelle au sommet, l’incontournable au-dessus d’Embrun : un panorama à 360° sur le lac, les Écrins et la vallée de la Durance.",
				hike: { ascent: 953, distance: 14.1, duration: "5 h 30" },
				parking: {
					name: "Parking de la Forêt (Embrun), 1 587 m",
					coords: [44.5933776, 6.475299],
				},
				guide:
					"https://geotrek-cd05-aggregator.makina-corpus.net/api/fr/treks/17788/mont-guillaume.pdf",
			},
			{
				name: "Aiguilles de Chabrières",
				photo: "/randos/chabrieres.jpg",
				kind: "Tour · 2 351 m",
				description:
					"Le tour des aiguilles rocheuses qui dominent Réallon, avec passage par la brèche des Aiguilles. Paysages minéraux spectaculaires.",
				hike: { ascent: 844, distance: 11.2, duration: "4 h 30" },
				parking: {
					name: "Station de Réallon, 1 550 m",
					coords: [44.5758029, 6.3618725],
					tip: "Possibilité de monter jusqu\u2019au sommet de la station de Réallon en télésiège.",
				},
				guide:
					"https://geotrek-cd05-aggregator.makina-corpus.net/api/fr/treks/17817/tour-des-aiguilles-de-chabrieres.pdf",
			},
			{
				name: "Lac Sainte-Marguerite",
				kind: "Lac · 2 239 m",
				description:
					"Une boucle accessible au départ des Orres jusqu’à un joli lac d’altitude, parfaite pour un pique-nique en famille.",
				hike: { ascent: 591, distance: 10.8, duration: "4 h 30" },
				parking: {
					name: "Parking de Pra Paisset, Les Orres 1800",
					query: "Parking Pra Paisset, Les Orres",
				},
				guide:
					"https://geotrek-cd05-aggregator.makina-corpus.net/api/fr/treks/17711/lac-sainte-marguerite.pdf",
			},
			{
				name: "Le Méale",
				kind: "Sommet · 2 420 m",
				description:
					"Un sommet ensoleillé au-dessus des Orres, avec une vue dégagée sur le lac de Serre-Ponçon et l’Embrunais.",
				hike: { ascent: 782, distance: 10.5, duration: "4 h" },
				parking: {
					name: "Parking de la Forêt (Saint-Sauveur), 1 671 m",
					coords: [44.5298238, 6.5488923],
					warning:
						"Piste déconseillée aux voitures basses, parking inaccessible en hiver.",
				},
				guide:
					"https://geotrek-admin.ecrins-parcnational.fr/api/fr/treks/974239/le-meale.pdf",
			},
		],
	},
	{
		slug: "velo-de-route",
		season: "ete",
		emoji: "🚴",
		title: "Vélo de route",
		placesTitle: "Nos cols préférés",
		tagline: "Les cols mythiques du Tour de France",
		intro:
			"Les Hautes-Alpes sont le paradis des cyclistes : depuis Sunny Lodge, les plus grands cols des Alpes sont à portée de roue (ou de voiture, pour rejoindre le pied). Voici les incontournables de la région.",
		tips: [
			"Partez tôt : moins de circulation, moins de chaleur, et les orages arrivent souvent l’après-midi.",
			"Prévoyez un coupe-vent pour la descente, il fait vite frais au-dessus de 2 000 m.",
			"Certains cols sont fermés en hiver et au printemps : vérifiez l’ouverture avant de partir.",
		],
		places: [
			{
				name: "Col d’Izoard",
				kind: "Col · 2 360 m",
				icon: "🚴",
				description:
					"Le col légendaire du Tour de France et son paysage lunaire de la Casse Déserte. Versant sud par le Queyras : une longue approche roulante, puis 14 km bien raides à partir d’Arvieux.",
				hike: {
					ascent: "≈ 1 380",
					distance: 31.5,
					grade: "4,4 %",
					type: "Depuis Guillestre",
				},
				parking: { name: "Guillestre (versant sud)", query: "Guillestre" },
			},
			{
				name: "Col du Galibier",
				kind: "Col · 2 642 m",
				icon: "🚴",
				description:
					"Le géant des Alpes, l’un des plus hauts cols routiers de France. Depuis le Lautaret, 8,5 km soutenus jusqu’au sommet, avec vue sur la Meije et les glaciers.",
				hike: {
					ascent: "≈ 585",
					distance: 8.5,
					grade: "6,9 %",
					type: "Depuis le Lautaret",
				},
				parking: { name: "Col du Lautaret", query: "Col du Lautaret" },
			},
			{
				name: "Col du Lautaret",
				kind: "Col · 2 058 m",
				icon: "🚴",
				description:
					"Une longue montée régulière depuis Briançon par la vallée de la Guisane, face aux glaciers de la Meije. À enchaîner avec le Galibier pour les plus motivés.",
				hike: {
					ascent: "≈ 850",
					distance: 28,
					grade: "3 %",
					type: "Depuis Briançon",
				},
				parking: { name: "Briançon", query: "Briançon" },
			},
			{
				name: "Col de l’Échelle",
				kind: "Col · 1 762 m",
				icon: "🚴",
				description:
					"Une belle balade par la vallée de la Clarée, l’une des plus belles des Alpes, avec une dernière partie en lacets bien pentue. Moins fréquenté que ses voisins.",
				parking: { name: "Briançon", query: "Briançon" },
			},
			{
				name: "Col du Granon",
				kind: "Col · 2 413 m",
				icon: "🚴",
				description:
					"Le plus raide de la liste : une pente régulière et sans répit, récemment rendu célèbre par le Tour de France. Panorama exceptionnel sur les Écrins au sommet.",
				hike: {
					ascent: "≈ 1 050",
					distance: 11.5,
					grade: "9 %",
					type: "Depuis Saint-Chaffrey",
				},
				parking: { name: "Saint-Chaffrey", query: "Saint-Chaffrey" },
			},
		],
	},
	{
		slug: "vtt",
		season: "ete",
		emoji: "🚵",
		title: "VTT",
		placesTitle: "Nos balades VTT préférées",
		tagline: "Single tracks en forêt et vues sur le lac",
		intro:
			"Entre forêts de mélèzes, pistes forestières et single tracks, les environs de Savines-le-Lac offrent de superbes balades VTT, toujours avec le lac de Serre-Ponçon en toile de fond.",
		tips: [
			"Les sentiers sont partagés avec les randonneurs : ralentissez et prévenez à leur approche.",
			"Pour l’enduro de Joubelle, vérifiez l’ouverture du télésiège de Réallon.",
		],
		places: [
			{
				name: "Belvédère de la Para",
				kind: "Embrun",
				icon: "🚵",
				description:
					"Boucle sportive sur les flancs du Mont Guillaume, entre larges pistes forestières et sentes en forêt, avec un panorama splendide sur le lac depuis le belvédère.",
				hike: { ascent: 1068, distance: 16.6, duration: "3 h", type: "Boucle" },
				parking: {
					name: "Parking de la Porte de la Forêt (Embrun)",
					coords: [44.5936455, 6.4765732],
				},
				guide:
					"https://prod-geotrek-ffc-admin.makina-corpus.net/api/fr/treks/5652/n4-les-fontainiers.pdf",
			},
			{
				name: "Cabane de Joubelle & lac de Saint-Apollinaire",
				kind: "Réallon",
				icon: "🚵",
				description:
					"Boucle facile et contemplative entre le lac de Saint-Apollinaire et la station de Réallon. Pause à la cabane de Joubelle (fontaine et tables), puis descente plus technique vers le lac.",
				hike: {
					ascent: 447,
					distance: 8.6,
					duration: "1 h 30",
					type: "Boucle",
				},
				parking: {
					name: "Lac de Saint-Apollinaire",
					coords: [44.5622517, 6.3460207],
				},
				guide:
					"https://prod-geotrek-ffc-admin.makina-corpus.net/api/fr/treks/5639/n23-le-lac-de-saint-apollinaire.pdf",
			},
			{
				name: "Enduro de Joubelle",
				kind: "Réallon · descente",
				icon: "🚵",
				description:
					"Un vrai slalom entre pins et mélèzes depuis le sommet de Réallon, en single track jusqu’au lac de Saint-Apollinaire en passant par la cabane de Joubelle.",
				hike: {
					descent: 740,
					distance: 3.7,
					duration: "30 min",
					type: "Descente",
				},
				parking: {
					name: "Parking de la station de Réallon",
					coords: [44.5758029, 6.3618725],
					tip: "Montée en télésiège de Chabrières jusqu’au départ.",
				},
				guide:
					"https://prod-geotrek-ffc-admin.makina-corpus.net/api/fr/treks/5646/n29-enduro-de-joubelle.pdf",
			},
		],
	},
	{
		slug: "escalade",
		season: "ete",
		emoji: "🧗",
		title: "Escalade",
		placesTitle: "Nos sites d’escalade préférés",
		tagline: "Une falaise juste derrière la maison, et d’autres tout autour",
		intro:
			"Les grimpeurs seront ravis : le site d'escalade de La Rochette se trouve juste derrière Sunny Lodge, idéal pour une session en fin de journée, à la fraîche. Et plusieurs autres belles falaises sont à quelques minutes de route.",
		tips: [
			"Vérifiez l’état du matériel en place, et grimpez toujours avec un casque.",
		],
		places: [
			{
				name: "La Rochette",
				icon: "🧗",
				kind: "Site d’escalade",
				distance: "Juste derrière la maison",
				description:
					"Le site de grimpe le plus proche, accessible à pied depuis la maison.",
				location: "La Rochette, Savines-le-Lac",
				draft: true,
			},
			{
				name: "La Roche (Ubaye)",
				kind: "Site d’escalade",
				icon: "🧗",
				description: "Site de grimpe côté Ubaye.",
				location: "Escalade La Roche, Ubaye",
			},
			{
				name: "Réotier",
				kind: "Site d’escalade",
				icon: "🧗",
				description:
					"Un site de grimpe réputé de la vallée de la Durance, entre Embrun et Guillestre.",
				location: "Site d’escalade, Réotier",
			},
			{
				name: "Châteauroux-les-Alpes",
				kind: "Site d’escalade",
				icon: "🧗",
				description: "Site de grimpe à Châteauroux-les-Alpes, à côté d’Embrun.",
				location: "Site d’escalade, Châteauroux-les-Alpes",
			},
		],
	},
	{
		slug: "voile-kite-wing",
		season: "ete",
		emoji: "🪁",
		title: "Voile, kitesurf & wingfoil",
		placesTitle: "Nos spots et écoles préférés",
		tagline: "Le lac de Serre-Ponçon, un spot de glisse réputé",
		intro:
			"Grâce à ses vents thermiques réguliers l'après-midi, le lac de Serre-Ponçon est un terrain de jeu idéal pour la voile, la planche à voile, le kitesurf et le wingfoil. Notre spot préféré : Les Eaux Douces.",
		tips: ["Le vent thermique se lève généralement en début d’après-midi."],
		places: [
			{
				name: "Les Eaux Douces",
				kind: "Spot",
				icon: "🪁",
				description:
					"Notre spot coup de cœur pour la glisse, où se trouvent Le Bus et Altitude Kite.",
				location: "Les Eaux Douces, Lac de Serre-Ponçon",
			},
			{
				name: "Chadenas",
				kind: "Spot · plan d’eau d’Embrun",
				icon: "🪁",
				description:
					"Le spot du plan d’eau d’Embrun, plus abrité : parfait pour débuter.",
				location: "Chadenas, Embrun",
			},
			{
				name: "Plage de Crots",
				kind: "Spot",
				icon: "🪁",
				description:
					"Plage de Chanterenne, l’un des endroits les plus ventés du lac.",
				location: "Plage de Chanterenne, Crots",
			},
			{
				name: "Le Bus",
				kind: "École de wingfoil · Duotone",
				icon: "🏄",
				description:
					"École 100 % wingfoil, sur matériel Duotone, installée aux Eaux Douces.",
				location: "Les Eaux Douces, Lac de Serre-Ponçon",
			},
			{
				name: "Altitude Kite",
				kind: "École de kite & wing · F-One",
				icon: "🏄",
				description:
					"Cours de kitesurf et de wingfoil sur matériel F-One, aux Eaux Douces.",
				location: "Les Eaux Douces, Lac de Serre-Ponçon",
			},
			{
				name: "Le Spot",
				kind: "École de wing & windsurf · AFS",
				icon: "🏄",
				description:
					"École de wingfoil et de planche à voile, sur matériel AFS.",
				location: "Le Spot Wingfoil Windsurf School, Crots",
			},
			{
				name: "Magasin de location à Crots",
				kind: "Location",
				icon: "🏄",
				description: "Location de matériel de glisse.",
				location: "Crots, 05200",
				draft: true,
			},
		],
	},
	{
		slug: "bateau-wakesurf",
		season: "ete",
		emoji: "🚤",
		title: "Bateau & wakesurf",
		placesTitle: "Nos adresses préférées",
		tagline: "Explorer les criques du lac",
		intro:
			"Louer un bateau, c'est le meilleur moyen de découvrir les baies et criques secrètes du lac. Et pour les plus sportifs, pourquoi pas une initiation au wakesurf ?",
		tips: ["Réservez à l’avance en juillet-août, surtout pour les week-ends."],
		places: [
			{
				name: "Sud Escapade",
				kind: "Location & wakesurf",
				description: "Location de bateaux et cours de wakesurf.",
				draft: true,
			},
		],
	},
	{
		slug: "plages",
		season: "ete",
		emoji: "🏖️",
		title: "Plages",
		placesTitle: "Nos plages préférées",
		tagline: "Baignade dans une eau turquoise",
		intro:
			"Le lac de Serre-Ponçon compte de nombreuses plages, dont plusieurs à Savines-le-Lac, à quelques minutes de voiture de la maison.",
		tips: ["Certaines plages sont surveillées en juillet et août."],
		places: [
			{
				name: "Savin’Plage",
				kind: "Savines-le-Lac · côté ouest",
				icon: "🏖️",
				distance: "5 min",
				description:
					"La plage des couchers de soleil. Graviers fins et pelouse, avec un parc aquatique et des pédalos.",
				features: ["Restauration", "Sanitaires", "Parc aquatique", "Pédalos"],
				location: "Savin’Plage, Savines-le-Lac",
			},
			{
				name: "Plage des Combettes",
				kind: "Savines-le-Lac · côté est",
				icon: "🏖️",
				distance: "5 min",
				description:
					"Grande pelouse ombragée, galets et accès goudronné à l’eau. Ponton loisirs avec toboggan et plongeoir.",
				features: [
					"Snack-bar à proximité",
					"Skate-park",
					"Jeux pour enfants",
					"Toboggan & plongeoir",
					"Sanitaires",
				],
				location: "Plage des Combettes, Savines-le-Lac",
			},
			{
				name: "Crots Beach",
				kind: "Crots · plage de Chanterenne",
				icon: "🏖️",
				description:
					"La plage de Chanterenne, à Crots, sur la rive nord du lac.",
				location: "Plage de Chanterenne, Crots",
			},
			{
				name: "Plan d’eau d’Embrun",
				kind: "Embrun",
				icon: "🏖️",
				description: "Un plan d’eau plein d’activités pour toute la famille.",
				features: [
					"Parc aquatique géant",
					"Pédalo",
					"Aviron",
					"Canoë",
					"Minigolf",
					"Restauration",
					"Boutiques",
				],
				location: "Plan d’eau, Embrun",
			},
		],
	},
];

// Restaurants & bars que nous recommandons.
export const restaurantCategories = [
	{
		title: "Au bord de l’eau",
		emoji: "🏖️",
		note: "Ouverts uniquement l’été",
		places: [
			{
				name: "Au Happy Day",
				kind: "Plage des Eygoires",
				description: "Sur la plage des Eygoires, avec une superbe terrasse.",
				location: "Au Happy Day, Lac de Serre-Ponçon",
				instagram: "https://www.instagram.com/auhappyday/",
			},
			{
				name: "La Chaise Longue",
				kind: "Plage de Savines",
				description:
					"Sur la plage de Savines-le-Lac, idéal pour les couchers de soleil.",
				location: "La Chaise Longue, Savines-le-Lac",
				instagram: "https://www.instagram.com/lachaiselonguesavines/",
			},
			{
				name: "Le Duo Tapas",
				kind: "Plage de Savines",
				description:
					"Tapas et smoothies sur la plage de Savines-le-Lac, idéal pour les couchers de soleil.",
				location: "Le Duo Tapas, Savines-le-Lac",
				instagram: "https://www.instagram.com/leduo_tapas.smoothies/",
			},
			{
				name: "Le Bus",
				kind: "Plage des Eaux Douces",
				description:
					"Sur la plage des Eaux Douces à Crots : cuisine colorée, avec vue sur les wingfoils.",
				location: "Le Bus, Les Eaux Douces, Crots",
				instagram: "https://www.instagram.com/restaurantlebus_spw/",
			},
			{
				name: "La Paillote du Lac",
				kind: "Baie de Foreston",
				description:
					"Dans la baie de Foreston, une crique paisible au bord du lac, accessible en voiture par une toute petite route… ou en bateau !",
				location: "La Paillote du Lac, Lac de Serre-Ponçon",
				instagram: "https://www.instagram.com/lapaillotedulac05/",
			},
			{
				name: "Le Rooftop",
				kind: "Plan d’eau d’Embrun",
				description:
					"Au plan d’eau d’Embrun, ambiance animée avec soirées DJ et spectacles.",
				location: "Rooftop, Plan d’eau, Embrun",
				instagram: "https://www.instagram.com/rooftop_embrun/",
			},
		],
	},
	{
		title: "Nos bonnes adresses",
		emoji: "🍽️",
		places: [
			{
				name: "Chez Pierrot Fils",
				kind: "Restaurant",
				description:
					"Cuisine maison et ambiance familiale… et les frites à la crème !",
				location: "Chez Pierrot Fils, Le Village, 05200 Crots",
				instagram: "https://www.instagram.com/chezpierrotfils/",
			},
			{
				name: "Les Copains Savinois",
				kind: "Pizzas à emporter",
				icon: "🍕",
				description:
					"Pratique pour un soir à la maison, à déguster sur la terrasse.",
				location:
					"Les Copains Savinois, Av. de la Combe d’Or, 05160 Savines-le-Lac",
				website:
					"https://www.traiteur-les-copains-savinois.fr/pizza-a-emporter",
			},
			{
				name: "Les Glaces de Louane",
				kind: "Glacier",
				icon: "🍦",
				description: "Nos glaces préférées pour une pause gourmande.",
				instagram: "https://www.instagram.com/les_glaces_de_louane/",
			},
		],
	},
];

export const getActivity = (slug) => activities.find((a) => a.slug === slug);
