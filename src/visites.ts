// Visites touristiques autour de Sunny Lodge.
// Mêmes champs que les adresses des activités (voir Place dans src/types.ts).

import type { Place } from "./types";

export const visits: Place[] = [
	{
		name: "Cité historique d’Embrun",
		photo: "/visites/embrun.jpg",
		kind: "Patrimoine",
		distance: "18 min",
		icon: "🏰",
		description:
			"La vieille ville perchée sur son roc au-dessus de la Durance : ruelles, fontaines et monuments, avec un panorama sur la vallée depuis le jardin de l’Archevêché.",
		features: [
			"Cathédrale Notre-Dame-du-Réal",
			"Tour Brune",
			"Maison des Chanonges",
			"Jardin de l’Archevêché",
		],
		location: "Cathédrale Notre-Dame-du-Réal, 05200 Embrun",
	},
	{
		name: "Village fortifié de Mont-Dauphin",
		kind: "Patrimoine",
		distance: "37 min",
		icon: "🌿",
		description:
			"Fortifications de Vauban inscrites à l'Unesco et classé au titre des monuments historiques",
		location: "Mont-Dauphin, 05600",
	},
	{
		name: "Baie Saint-Michel",
		kind: "Lac",
		distance: "12 min",
		icon: "⛪",
		description:
			"La chapelle Saint-Michel, sauvée des eaux lors de la mise en eau du lac, posée sur son îlot au milieu de la baie : l’une des images les plus célèbres de Serre-Ponçon.",
		location: "Chapelle Saint-Michel, Prunières",
	},
	{
		name: "Baie de Chanteloube",
		distance: "20 min",
		kind: "Lac",
		icon: "🌉",
		description:
			"Un ancien viaduc ferroviaire à demi englouti par le lac : ses arches émergent plus ou moins selon le niveau de l’eau.",
		location: "Baie de Chanteloube, Chorges",
	},
	{
		name: "Barrage de Serre-Ponçon",
		kind: "Point de vue · Muséoscope",
		distance: "32 min",
		icon: "🏞️",
		description:
			"Le barrage qui a donné naissance au lac : point de vue spectaculaire sur la retenue et le Muséoscope du lac pour découvrir son histoire.",
		location: "Muséoscope du Lac, Rousset",
	},
	{
		name: "Les Demoiselles coiffées",
		kind: "Curiosité géologique",
		distance: "14 min",
		icon: "🗿",
		description:
			"Des colonnes de terre surmontées d’un gros rocher qui les protège de l’érosion : de drôles de sculptures naturelles au-dessus du lac.",
		location: "Demoiselles coiffées, Pontis",
	},
	{
		name: "Abbaye et forêt de Boscodon",
		kind: "Patrimoine · Crots",
		distance: "15 min",
		icon: "🌲",
		description:
			"Une abbaye romane du XIIᵉ siècle nichée au cœur d’une immense forêt de sapins et de mélèzes, point de départ de belles balades.",
		location: "Abbaye de Boscodon, 05200 Crots",
	},
	{
		name: "Fontaine de l’Ours",
		kind: "Nature · forêt de Boscodon",
		distance: "25 min",
		icon: "💧",
		description:
			"Une source au cœur de la forêt de Boscodon, au-dessus de l’abbaye, au départ de nombreux sentiers.",
		location: "Fontaine de l’Ours, Crots",
	},
	{
		name: "La Ripisylve du Liou",
		kind: "Nature · Embrun",
		distance: "13 min",
		icon: "🌿",
		description:
			"Un sentier de découverte au fil de la zone humide du Liou, près du plan d’eau d’Embrun dans une forêt les pieds dans l’eau.",
		location: "Sentier du Liou, 05200 Embrun",
	},
];
