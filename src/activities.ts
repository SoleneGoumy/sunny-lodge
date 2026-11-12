// Activités et bonnes adresses autour de Sunny Lodge.
// Pour ajouter une adresse : copiez un bloc { name: ..., } dans la liste `places` de l'activité.
// Les champs possibles sont décrits (avec autocomplétion) dans src/types.ts.

import type { Activity, RestaurantCategory, Season, SeasonId } from "./types";

export const seasons: Record<SeasonId, Season> = {
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

export const activities: Activity[] = [
	// ───────────── HIVER ─────────────
	{
		slug: "ski-alpin",
		season: "hiver",
		emoji: "⛷️",
		photo: "/ski/les-orres.jpg",
		title: "Ski alpin & snowboard",
		placesTitle: "Nos stations préférées",
		tagline: "Réallon à 20 minutes, Les Orres et Crévoux à 30-35 minutes",
		intro:
			"Sunny Lodge est à 15 minutes de la petite station familiale de Réallon mais vous pouvez également rejoindre le grand domaine des Orres, ou le charme authentique de Crévoux.",
		tips: [
			"Pensez à vérifier l’enneigement et l’ouverture des routes avant de partir.",
			"Équipements spéciaux (chaînes ou chaussettes) obligatoires dans les Hautes-Alpes en hiver.",
		],
		places: [
			{
				name: "Réallon",
				kind: "1 560 m",
				icon: "⛷️",
				distance: "20 min",
				description:
					"La plus proche du gîte : une station conviviale et familiale, avec un forfait journée à moins de 30 € ! Du sommet, la vue sur le lac est imprenable.",
				location: "Station de Réallon, 05160 Réallon",
				website: "https://www.lesorres.com",
			},
			{
				name: "Les Orres",
				photo: "/ski/les-orres.jpg",
				kind: "1 550 – 2 720 m",
				icon: "⛷️",
				distance: "35 min",
				description:
					"Grande station avec un domaine varié et assez pentu ! Patinoire, pôle innovation avec simulateur de ski, escalade, simulateurs VR (VTT, ski, kayak, parapente, speed riding)",
				location: "Les Orres 1650, 05200 Les Orres",
				website: "https://www.lesorres.com",
			},
			{
				name: "Crévoux",
				kind: "1 600 m",
				icon: "⛷️",
				distance: "35 min",
				description:
					"Petit village-station authentique dans un vallon sauvage. Un domaine modeste, mais idéal pour le hors-piste : il n’est pas damé après une chute de neige fraîche !",
				location: "Station de Crévoux, 05200 Crévoux",
				website: "https://www.lesorres.com",
			},
		],
	},
	{
		slug: "ski-de-randonnee",
		season: "hiver",
		emoji: "🏔️",
		photo: "/activities/ski-de-randonnee.jpg",
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
				photo: "/ski-rando/ratelle.jpg",
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
		photo: "/activities/raquettes.jpg",
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

	{
		slug: "chiens-de-traineau",
		season: "hiver",
		emoji: "🐕",
		title: "Chiens de traîneau",
		placesTitle: "Nos mushers préférés",
		tagline: "Glisser dans la neige au rythme de la meute",
		intro:
			"Une expérience inoubliable pour petits et grands : un baptême en traîneau tiré par une meute de chiens nordiques, au cœur des forêts enneigées, ou une initiation à la conduite d’attelage.",
		tips: [
			"Réservez à l’avance pendant les vacances scolaires, les places partent vite.",
			"Habillez-vous chaudement : on reste assis dans le traîneau pendant la balade.",
		],
		places: [
			{
				name: "Crévoux",
				kind: "Chiens de traîneau",
				distance: "35 min",
				icon: "🐕",
				description:
					"Sorties en traîneau à plus de 1 600 m d’altitude, au cœur du massif du Parpaillon.",
				location: "Station de Crévoux, 05200 Crévoux",
				draft: true,
			},
			{
				name: "Réallon",
				kind: "Chiens de traîneau",
				distance: "20 min",
				icon: "🐕",
				description:
					"Balades en chiens de traîneau à la station, la plus proche de la maison.",
				location: "Station de Réallon, 05160 Réallon",
				draft: true,
			},
		],
	},

	// ───────────── ÉTÉ ─────────────
	{
		slug: "randonnee",
		season: "ete",
		emoji: "🥾",
		photo: "/activities/randonnee.jpg",
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
				photo: "/randos/mont-guillaume.jpeg",
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
				kind: "Sommet · 2 351 m",
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
		sections: [
			{
				title: "Nos randonnées pour les enfants",
				places: [
					{
						name: "Le Peuple des Oiseaux",
						photo: "/randos/peuple-des-oiseaux.jpg",
						distance: "20 min",
						kind: "Réallon · sentier ludique",
						icon: "🐦",
						description:
							"Une rando ludique avec des statues en bois grandeur nature, des jeux et des épreuves amusantes.",
						location: "Le Peuple des Oiseaux, 05160 Réallon",
					},
					{
						name: "Le Prince et le Berger",
						photo: "/randos/le-prince-et-le-berger.jpg",
						kind: "Réallon · sentier ludique",
						distance: "20 min",
						icon: "🤴",
						description:
							"Entre forêt de mélèzes, énigmes en bois, labyrinthe et tyrolienne, suivez l’histoire du Prince et du Berger.",
						location: "Le Prince et le Berger, 05160 Réallon",
					},
					{
						name: "Le Parcours des Fées",
						kind: "Crévoux · sentier ludique",
						distance: "43 min",
						photo: "/randos/parcours-des-fees.jpeg",
						icon: "🧚",
						description:
							"Une balade facile au fond de la vallée de Crévoux, ponctuée d’œuvres d’art au cœur de la nature.",
						location: "Parcours des Fées, La Chalp, 05200 Crévoux",
					},
				],
			},
		],
	},
	{
		slug: "velo",
		season: "ete",
		emoji: "🚴",
		title: "Vélo de route & VTT",
		placesTitle: "Les cols mythiques du Tour de France",
		tagline: "Cols mythiques et single tracks avec vue sur le lac",
		intro:
			"Les Hautes-Alpes sont le paradis des cyclistes : sur la route, les plus grands cols des Alpes sont à portée de roue (ou de voiture, pour rejoindre le pied) ; en VTT, forêts de mélèzes, pistes forestières et single tracks offrent de superbes balades avec le lac de Serre-Ponçon en toile de fond.",
		tips: [
			"Partez tôt : moins de circulation, moins de chaleur, et les orages arrivent souvent l’après-midi.",
			"Prévoyez un coupe-vent pour la descente, il fait vite frais au-dessus de 2 000 m.",
			"Certains cols sont fermés en hiver et au printemps : vérifiez l’ouverture avant de partir.",
			"En VTT, les sentiers sont partagés avec les randonneurs : ralentissez et prévenez à leur approche.",
			"Pour l’enduro de Joubelle, vérifiez l’ouverture du télésiège de Réallon.",
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
				},
				parking: { name: "Briançon", query: "Briançon" },
			},
		],
		sections: [
			{
				title: "Nos balades VTT préférées",
				places: [
					{
						name: "Belvédère de la Para",
						kind: "VTT",
						icon: "🚵",
						description:
							"Boucle sportive sur les flancs du Mont Guillaume, entre larges pistes forestières et sentes en forêt, avec un panorama splendide sur le lac depuis le belvédère.",
						hike: { ascent: 1068, distance: 16.6, duration: "3 h" },
						parking: {
							name: "Parking de la Porte de la Forêt (Embrun)",
							coords: [44.5936455, 6.4765732],
						},
						guide:
							"https://prod-geotrek-ffc-admin.makina-corpus.net/api/fr/treks/5652/n4-les-fontainiers.pdf",
					},
					{
						name: "Cabane de Joubelle & lac de Saint-Apollinaire",
						kind: "VTT",
						icon: "🚵",
						description:
							"Boucle facile et contemplative entre le lac de Saint-Apollinaire et la station de Réallon. Pause à la cabane de Joubelle (fontaine et tables), puis descente plus technique vers le lac.",
						hike: {
							ascent: 447,
							distance: 8.6,
							duration: "1 h 30",
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
						kind: "VTT descente",
						icon: "🚵",
						description:
							"Un vrai slalom entre pins et mélèzes depuis le sommet de Réallon, en single track jusqu’au lac de Saint-Apollinaire en passant par la cabane de Joubelle.",
						hike: {
							descent: 740,
							distance: 3.7,
							duration: "30 min",
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
		],
	},
	{
		slug: "escalade",
		season: "ete",
		emoji: "🧗",
		photo: "/activities/escalade.jpg",
		title: "Escalade",
		placesTitle: "Nos sites d’escalade préférés",
		tagline: "Une falaise juste derrière la maison, et d’autres tout autour",
		intro:
			"Site original sur conglomérat qui permet des longueurs d’initiation et quelques longueurs dures de continuité. Le style est plutôt physique. La vue sur le lac est magnifique.",
		tips: [
			"Vérifiez l’état du matériel en place, et grimpez toujours avec un casque.",
		],
		places: [
			{
				name: "La Rochette",
				photo: "/escalade/la-rochette.jpeg",
				icon: "🧗",
				kind: "Savines-le-Lac",
				distance: "Juste derrière la maison",
				description:
					"Site accessible à pied depuis la maison avec une vue imprenable sur le lac ! Voies du 4a au 7b+ avec secteur d'initiation accessible et secteur perfectionnement plus exigeant.",
				location: "La Rochette, Savines-le-Lac",
			},
			{
				name: "La Roche",
				kind: "Ubaye",
				distance: "35 min",
				icon: "🧗",
				description:
					"Voies du 4a au 7a très adapté à l'initiation et à la découverte.",
				location: "Escalade La Roche, Ubaye",
			},
			{
				name: "Pinfol",
				kind: "Réotier",
				distance: "35 min",
				icon: "🧗",
				description:
					"Voies sur calcaire adaptées à l'initiation et aux familles, avec des hauteurs allant de 5 à 28 mètres.",
				location: "Site d’escalade, Réotier",
			},
			{
				name: "Roche Rousse",
				kind: "Châteauroux-les-Alpes",
				photo: "/escalade/roche-rousse.jpeg",
				distance: "20 min",
				icon: "🧗",
				description:
					"Ce site offre une escalade technique et originale liée à la nature du rocher qui est structuré en plats et réglettes souvent obliques. Des bandes schisteuses limitent des strates de calcaire et de silex. ",
				location: "Site d’escalade, Châteauroux-les-Alpes",
			},
			{
				name: "Via ferrata des Orres",
				kind: "Via ferrata · Les Orres",
				distance: "30 min",
				icon: "🪜",
				description:
					"Deux parcours au-dessus des Orres : Marcelinas, plutôt accessible, et La Cascade, longue et difficile (un guide est conseillé pour une première fois). Topo disponible à l’office de tourisme des Orres.",
				location: "Via ferrata, 05200 Les Orres",
				guide:
					"https://geotrek-cd05-aggregator.makina-corpus.net/api/fr/sites/71/via-ferrata-des-orres.pdf",
			},
		],
	},
	{
		slug: "voile-kite-wing",
		season: "ete",
		emoji: "🪁",
		photo: "/activities/wingfoil.jpg",
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
				distance: "8 min",
				photo: "/bateau/les-eaux-douces.jpeg",
				icon: "🪁",
				description:
					"Notre spot coup de cœur pour la glisse, où se trouvent Le Bus et Altitude Kite.",
				location: "Les Eaux Douces, Lac de Serre-Ponçon",
			},
			{
				name: "Chadenas",
				kind: "Spot",
				photo: "/bateau/chadenas.jpeg",
				distance: "20 min",
				icon: "🪁",
				description:
					"Le spot du plan d’eau d’Embrun, plus abrité : parfait pour débuter.",
				location: "Chadenas, Embrun",
			},
			{
				name: "Crots beach",
				kind: "Spot",
				photo: "/bateau/crots-beach.jpeg",
				distance: "15 min",
				icon: "🪁",
				description:
					"La plage de Chanterenne à Crots est le spot le plus venté du lac.",
				location: "Plage de Chanterenne, Crots",
			},
			{
				name: "Le Bus",
				kind: "École de wingfoil · Duotone",
				photo: "/bateau/le-bus.jpeg",
				distance: "8 min",
				icon: "🏄",
				description:
					"École de wingfoil aux Eaux Douces, apprenez à voler avec Lucile et Brice !",
				location: "Les Eaux Douces, Lac de Serre-Ponçon",
				instagram: "https://www.instagram.com/restaurantlebus_spw/",
			},
			{
				name: "Altitude Kite",
				photo: "/bateau/altitude-kite.jpeg",
				kind: "École de kite & wingfoil · F-One",
				distance: "8 min",
				icon: "🏄",
				description: "Ecole de kitesurf et de wingfoil aux Eaux Douces.",
				location: "Les Eaux Douces, Lac de Serre-Ponçon",
				instagram: "https://www.instagram.com/altitudekite05/",
			},
			{
				name: "Le Spot",
				photo: "/bateau/le-spot.jpg",
				kind: "École de wing & windsurf · AFS",
				distance: "15 min",
				icon: "🏄",
				description: "École de wingfoil et de planche à voile à Crots beach.",
				location: "Le Spot Wingfoil Windsurf School, Crots",
				instagram: "https://www.instagram.com/le_spot_serreponcon/",
			},
			{
				name: "La boutique du surfer",
				photo: "/bateau/la-boutique-du-surfer.jpg",
				distance: "9 min",
				kind: "Shop",
				icon: "🏄",
				description:
					"Boutique de vente et location de matos de glisse tenue par des passionés !",
				location: "Crots, 05200",
				instagram: "https://www.instagram.com/laboutiquedusurfer05/",
				//draft: true,
			},
		],
	},
	{
		slug: "bateau-wakesurf",
		season: "ete",
		emoji: "🚤",
		photo: "/activities/wakesurf.jpg",
		title: "Bateau & wakesurf",
		placesTitle: "Nos adresses préférées",
		tagline: "Explorer les criques du lac",
		intro:
			"Louer un bateau, c'est le meilleur moyen de découvrir les baies et criques secrètes du lac. Et pour les plus sportifs, pourquoi pas une initiation au wakesurf ?",
		tips: ["Réservez à l’avance en juillet-août, surtout pour les week-ends."],
		places: [
			{
				name: "Sud Escapade",
				photo: "/bateau/sud-escapade.jpg",
				kind: "Location & wakesurf",
				icon: "🏄",
				distance: "8 min",
				description: "Location de bateaux et cours de wakesurf.",
				instagram: "https://www.instagram.com/sudescapades/",
			},
			{
				name: "Aqua Detente Pros",
				photo: "/bateau/aqua-detente-pros.jpg",
				distance: "7 min",
				icon: "🛥️",
				kind: "Location",
				description: "Location de bateaux.",
				instagram: "https://www.instagram.com/aquadetenteprosserreponcon/",
			},
			{
				name: "La BD pirates",
				icon: "🏴‍☠️",
				distance: "7 min",
				kind: "Location & restauration",
				description: "Location de bateaux.",
				instagram: "https://www.instagram.com/labdpirates/",
			},
		],
	},
	{
		slug: "eaux-vives",
		season: "ete",
		emoji: "🌊",
		photo: "/eau-vive/rafting.jpeg",
		title: "Sports d'eau vive",
		placesTitle: "Nos spots préférés",
		tagline: "Sensations fortes sur la Durance et ses torrents",
		intro:
			"La Durance et les torrents qui l’entourent sont un terrain de jeu réputé pour les sports d’eau vive : rafting en famille, hydrospeed pour les plus téméraires et canyoning dans les gorges. Le spot emblématique : la vague du Rabioux, à Châteauroux-les-Alpes.",
		tips: [
			"Ces activités se pratiquent avec un moniteur diplômé, qui fournit combinaison, casque et gilet.",
			"Il faut savoir nager, et un âge minimum est demandé (souvent autour de 10 ans pour l’hydrospeed).",
		],
		places: [
			{
				name: "Rafting sur la Durance",
				kind: "Rafting",
				photo: "/eau-vive/rafting.jpeg",
				icon: "🛶",
				description:
					"Descente en bateau pneumatique accessible en famille : passage du Rabioux puis descente vers Embrun.",
			},
			{
				name: "Randonnée aquatique du Couleau",
				kind: "Canyoning",
				icon: "🧗",
				description:
					"Rando dans les gorges du torrent avec sauts et toboggants naturels dès 8 ans !",
			},
		],
	},
	{
		slug: "sports-aeriens",
		season: "ete",
		emoji: "🪂",
		title: "Parapente & montgolfière",
		placesTitle: "Nos vols préférés",
		tagline: "Le lac de Serre-Ponçon vu du ciel",
		intro:
			"Pour voir le lac de Serre-Ponçon et les sommets sous un autre angle : un baptême en parapente biplace avec un moniteur, ou un vol en montgolfière au lever du soleil au-dessus du lac.",
		tips: [
			"Les vols dépendent de la météo : réservez en début de séjour pour pouvoir décaler si besoin.",
			"Les vols en montgolfière partent tôt le matin, quand l’air est le plus calme.",
		],
		places: [
			{
				name: "Baptême de parapente biplace",
				kind: "Parapente",
				icon: "🪂",
				description:
					"Un vol en tandem avec un moniteur diplômé, sans aucune expérience nécessaire, avec une vue plongeante sur le lac.",
				draft: true,
			},
			{
				name: "B2O Montgolfières",
				kind: "Montgolfière · Savines-le-Lac",
				icon: "🎈",
				distance: "5 min",
				description:
					"Vol au-dessus du lac de Serre-Ponçon au lever du soleil, au départ des rives du lac entre Savines-le-Lac et Chorges. Environ 1 h de vol, à partir de 6 ans.",
				location: "Gare de Savines-le-Lac, 05160 Savines-le-Lac",
				website: "https://www.b2o.fr",
			},
		],
	},
	{
		slug: "plages",
		season: "ete",
		emoji: "🏖️",
		photo: "/bateau/crots-beach.jpeg",
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
					"Snack-bar",
					"Trampoline parc",
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
export const restaurantCategories: RestaurantCategory[] = [
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
				photo: "/restaurants/le-duo-tapas.jpeg",
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

export const getActivity = (slug: string | undefined): Activity | undefined =>
	activities.find((a) => a.slug === slug);
