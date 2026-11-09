// Toutes les infos du gîte sont centralisées ici : modifiez ce fichier pour mettre le site à jour.

export const AIRBNB_URL = 'https://www.airbnb.fr/rooms/1592175823173427125'

// Adresse e-mail utilisée par le formulaire de contact (laisser vide pour masquer le formulaire).
export const CONTACT_EMAIL = ''

const base = 'https://a0.muscache.com/im/pictures/hosting'
const img = (path) => `${base}/${path}?im_w=1440`

// Photos de l'annonce Airbnb. Pour plus de fiabilité, vous pouvez les copier dans /public/photos
// et remplacer les URL par '/photos/nom.jpg'.
export const photos = [
  'Hosting-1592175823173427125/original/aff61be9-44fe-42bc-b406-c77c22b9bda2.jpeg',
  'Hosting-1592175823173427125/original/498fbe69-9dd4-4c42-8081-8f03d2bf3aa0.jpeg',
  'Hosting-1592175823173427125/original/2c09fb31-3c8f-4679-986c-f832020ea6aa.jpeg',
  'Hosting-1592175823173427125/original/471c2912-7e9a-42c8-b79f-ba0e4a062b1e.jpeg',
  'Hosting-1592175823173427125/original/53463db0-6fe8-4a26-8867-7793d157a1cd.jpeg',
  'Hosting-1551264521786378661/original/068b070b-d0cd-4449-a058-622bbf5bbcd5.jpeg',
  'Hosting-1592175823173427125/original/d0e9c01d-8701-45b6-a071-b48fe4ba046f.jpeg',
  'Hosting-1592175823173427125/original/b398be9c-8bde-4827-8f51-876db8a90623.jpeg',
  'Hosting-1592175823173427125/original/1cbde414-7e74-4643-a62b-0954f590d292.jpeg',
  'Hosting-1592175823173427125/original/86d7c2a1-9129-4763-ac57-7b63976514d2.jpeg',
  'Hosting-1592175823173427125/original/a2b397e5-c36e-40a9-97bf-54b541b58612.jpeg',
  'Hosting-1592175823173427125/original/1bcdd603-ca6e-4343-8bb0-15cba9fa6556.jpeg',
  'Hosting-1592175823173427125/original/d36a57fe-7e3c-4e1e-8578-0256e38c9c27.jpeg',
  'Hosting-1592175823173427125/original/589a743c-8886-405e-9674-8eb1e3580fc4.jpeg',
  'Hosting-1592175823173427125/original/4288d30e-16c0-461c-88af-f73956e2f4b0.jpeg',
  'Hosting-1592175823173427125/original/c3489f96-1927-423b-a90a-f815e58b5c08.jpeg',
].map((p, i) => ({ src: img(p), alt: `Sunny Lodge – photo ${i + 1}` }))

export const highlights = [
  { value: '10', label: 'voyageurs' },
  { value: '4', label: 'chambres' },
  { value: '7', label: 'lits' },
  { value: '2', label: 'salles de bain' },
]

export const bedrooms = [
  {
    name: 'Chambre 1',
    floor: 'Rez-de-chaussée',
    beds: '1 lit double (160 × 200)',
    photo: img('Hosting-1592175823173427125/original/cd113d5d-2238-4e63-9e0c-b6c3ab3be4cf.jpeg'),
  },
  {
    name: 'Chambre 2',
    floor: 'Étage',
    beds: '1 lit double (160 × 200)',
    photo: img('Hosting-1592175823173427125/original/d5e10ddf-6e57-4f5e-97c3-3f2f2b6ecf1d.jpeg'),
  },
  {
    name: 'Chambre 3',
    floor: 'Étage',
    beds: '2 lits superposés (90 × 190)',
    photo: img('Hosting-1592175823173427125/original/2dd65a6e-7c42-4c69-9f6d-57865d169f00.jpeg'),
  },
  {
    name: 'Chambre 4',
    floor: 'Étage',
    beds: '1 lit double (160 × 200)',
    photo: img('Hosting-1551264521786378661/original/d93aadfc-52d0-4f8b-9590-f50c8a5f2d87.jpeg'),
  },
]

export const amenities = [
  {
    title: 'Cuisine & repas',
    icon: '🍳',
    items: [
      'Cuisine entièrement équipée',
      'Four, plaques de cuisson, micro-ondes',
      'Lave-vaisselle',
      'Réfrigérateur & congélateur',
      'Cafetière Nespresso, bouilloire, grille-pain',
      'Vaisselle, verres à vin, table à manger',
    ],
  },
  {
    title: 'Extérieur',
    icon: '🌿',
    items: [
      'Jardin privé',
      'Grande terrasse vue montagnes',
      'Espace repas pour 10 personnes',
      'Barbecue à gaz',
      'Mobilier de jardin',
      'Parking gratuit sur place',
    ],
  },
  {
    title: 'Confort',
    icon: '🛋️',
    items: [
      'Wifi',
      'Télévision',
      'Chauffage',
      'Lave-linge',
      'Rideaux occultants',
      'Rangements pour vêtements',
    ],
  },
  {
    title: 'Famille',
    icon: '🧸',
    items: [
      'Lit bébé',
      'Livres et jouets pour enfants',
      'Mezzanine coin lecture vue lac',
      'Sèche-cheveux',
    ],
  },
]

export const reviews = [
  {
    name: 'Thomas',
    date: 'septembre 2026',
    text: 'Super séjour, maison spacieuse et lumineuse dans un cadre incroyable !',
  },
  {
    name: 'Laura',
    date: 'juillet 2026',
    text: 'Très beau séjour dans cette magnifique maison. La vue sur le lac depuis le deuxième étage est sublime ! Tout le confort y est.',
  },
  {
    name: 'Elena',
    date: 'août 2026',
    text: 'Nous avons passé un très bon séjour, la maison est fidèle aux photos, propre, au calme avec une cuisine bien équipée.',
  },
  {
    name: 'Nathan',
    date: 'juin 2026',
    text: 'Très bel endroit, très bel accueil, maison très propre. Je recommande !',
  },
]

export const ratings = [
  ['Propreté', '4,9'],
  ['Précision', '5,0'],
  ['Arrivée', '4,9'],
  ['Communication', '4,9'],
  ['Emplacement', '4,9'],
  ['Qualité-prix', '4,6'],
]

export const nearby = [
  { icon: '🏖️', title: 'Lac de Serre-Ponçon', text: 'Plages, baignade, paddle et voile à 5 minutes en voiture.' },
  { icon: '⛷️', title: 'Station de Réallon', text: 'Ski alpin et activités neige à 20 minutes.' },
  { icon: '🥾', title: 'Randonnées', text: 'Sentiers au départ du village, vues sur le lac et les sommets.' },
  { icon: '🥖', title: 'Village de Savines', text: 'Commerces, restaurants et marché à moins de 5 minutes.' },
]
