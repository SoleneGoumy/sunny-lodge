// Types des données du site.
// Ils donnent l'autocomplétion et signalent les fautes de frappe
// quand vous complétez activities.ts ou data.ts.

/** Saison d'une activité. */
export type SeasonId = 'hiver' | 'ete'

export interface Season {
  label: string
  emoji: string
  /** Texte d'introduction affiché sur la page Activités. */
  intro: string
}

/** Chiffres d'une randonnée, d'un col ou d'une balade VTT (tous facultatifs). */
export interface HikeStats {
  /** Dénivelé positif en mètres, ex. 783 ou '≈ 600'. */
  ascent?: number | string
  /** Dénivelé négatif en mètres (descentes VTT). */
  descent?: number | string
  /** Distance en km, ex. 11.1 */
  distance?: number
  /** Pente moyenne, ex. '6,9 %' */
  grade?: string
  /** Durée, ex. '4 h 30' */
  duration?: string
  /** Type de parcours, ex. 'Depuis Briançon' ou 'Descente'. */
  type?: string
}

/** Point de départ : un lien GPS est généré vers Google Maps. */
export interface Parking {
  /** Nom affiché après « 🅿️ Départ : ». */
  name: string
  /** Coordonnées GPS [latitude, longitude] (prioritaires sur `query`). */
  coords?: [number, number]
  /** Recherche Google Maps si pas de coordonnées. */
  query?: string
  /** Avertissement affiché avec ⚠️ */
  warning?: string
  /** Astuce affichée avec 🚡 */
  tip?: string
}

/** Une carte : station, rando, spot, école, restaurant, plage… */
export interface Place {
  /** Nom affiché. */
  name: string
  /** Petit libellé posé sur la photo (école, sommet, plage…). */
  kind?: string
  description?: string
  /** Temps de trajet depuis la maison, ex. '20 min'. */
  distance?: string
  /** Lieu ou adresse : génère le lien « Itinéraire » (si pas de `parking`). */
  location?: string
  /** Photo de la carte, ex. '/randos/morgon.jpg' (fichier dans public/, format 3:2). */
  photo?: string
  /** Emoji affiché à la place de la photo tant qu'il n'y en a pas. */
  icon?: string
  hike?: HikeStats
  parking?: Parking
  /** Lien vers une fiche détaillée (PDF…). */
  guide?: string
  website?: string
  instagram?: string
  phone?: string
  /** Services / équipements affichés en pastilles. */
  features?: string[]
  /** Affiche la carte comme « À compléter ». */
  draft?: boolean
}

/** Liste supplémentaire sur une page d'activité. */
export interface PlaceSection {
  title: string
  places: Place[]
}

export interface Activity {
  /** Identifiant dans l'adresse : /activites/<slug> */
  slug: string
  season: SeasonId
  emoji: string
  title: string
  /** Titre de la liste principale, ex. « Nos randos préférées ». */
  placesTitle?: string
  /** Phrase courte affichée sur la carte de l'activité. */
  tagline: string
  /** Texte sous le titre de la page. */
  intro: string
  /** Conseils affichés en bas de page. */
  tips?: string[]
  places: Place[]
  /** Listes supplémentaires, ex. « Nos randonnées pour les enfants ». */
  sections?: PlaceSection[]
}

export interface RestaurantCategory {
  title: string
  emoji: string
  /** Pastille sous le titre, ex. « Ouverts uniquement l'été ». */
  note?: string
  places: Place[]
}

// ───────── Données du gîte (data.ts) ─────────

export interface Photo {
  src: string
  alt: string
}

export interface Highlight {
  value: string
  label: string
}

export interface Bedroom {
  name: string
  floor: string
  beds: string
  photo: string
}

export interface AmenityGroup {
  title: string
  icon: string
  items: string[]
}

export interface Review {
  name: string
  date: string
  text: string
}

/** [critère, note], ex. ['Propreté', '4,9'] */
export type Rating = [label: string, score: string]

export interface NearbyItem {
  icon: string
  title: string
  text: string
}
