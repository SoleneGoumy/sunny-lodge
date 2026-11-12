// Types des données du site.
// Ils donnent l'autocomplétion et signalent les fautes de frappe
// quand vous complétez activities.ts ou data.ts.

import type { PhotoPath } from './photos.generated'

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
  /**
   * Photo de la carte : chemin d'une image de public/, ex. '/randos/morgon.jpg' (format 3:2).
   * Tapez '/' entre les guillemets pour voir la liste des photos disponibles.
   */
  photo?: PhotoPath
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
  /**
   * Photo de la carte sur la page Activités (chemin dans public/, format 3:2).
   * Tapez '/' entre les guillemets pour voir la liste.
   */
  photo?: PhotoPath
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

/** Plateforme d'où vient un avis (un badge avec son logo est affiché). */
export type ReviewSource = 'airbnb' | 'gites-de-france' | 'google'

export interface ReviewSourceInfo {
  /** Nom affiché dans le badge. */
  label: string
  /** Page où lire tous les avis (laisser vide pour masquer le lien). */
  url?: string
}

export interface Review {
  name: string
  /** Mois de l'avis, ex. 'juillet 2026'. */
  date: string
  text: string
  /** Plateforme d'origine de l'avis. */
  source: ReviewSource
}

/** [critère, note], ex. ['Propreté', '4,9'] */
export type Rating = [label: string, score: string]

export interface NearbyItem {
  icon: string
  title: string
  text: string
}

// ───────── Disponibilités (public/availability.json) ─────────

/** Période occupée : nuits du `start` inclus au `end` exclu (jour du départ). */
export interface BlockedPeriod {
  start: string
  end: string
  source: 'airbnb' | 'gites-de-france' | 'manuel'
}

export interface Availability {
  /** Date de la dernière synchronisation des calendriers. */
  updatedAt: string | null
  blocked: BlockedPeriod[]
}

export interface BookingSettings {
  /** Clé d'accès Web3Forms (web3forms.com) : les demandes arrivent par e-mail. */
  web3formsKey: string
  maxGuests: number
  /** Nombre de nuits minimum pour une demande. */
  minNights: number
  /**
   * Périodes à bloquer à la main, en plus des calendriers synchronisés
   * (fermeture, réglages Airbnb non exportés…). `end` = premier jour libre.
   */
  manualBlocks: Omit<BlockedPeriod, 'source'>[]
}
