import { reviewSources } from '../data'
import type { ReviewSource } from '../types'

// Petits pictogrammes aux couleurs de chaque plateforme.
function Mark({ source }: { source: ReviewSource }) {
  switch (source) {
    case 'airbnb':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#FF385C" />
          <path
            d="M12 5.5c-.9 0-1.5.6-2 1.6L6.6 14.4c-.8 1.8.3 3.6 2 3.6 1.2 0 2.3-.8 3.4-2.1 1.1 1.3 2.2 2.1 3.4 2.1 1.7 0 2.8-1.8 2-3.6L14 7.1c-.5-1-1.1-1.6-2-1.6Zm0 9.1c-.9-1.1-1.4-2.1-1.4-2.8 0-.8.6-1.3 1.4-1.3s1.4.5 1.4 1.3c0 .7-.5 1.7-1.4 2.8Z"
            fill="#fff"
          />
        </svg>
      )
    case 'google':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#fff" stroke="#e3e3e3" />
          <text x="12" y="17" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif" fill="#4285F4">
            G
          </text>
        </svg>
      )
    case 'gites-de-france':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#0B7A3B" />
          <path d="M12 5 4.5 11.5h2.2V19h4v-4.5h2.6V19h4v-7.5h2.2Z" fill="#FFD200" />
        </svg>
      )
  }
}

export default function ReviewBadge({ source }: { source: ReviewSource }) {
  return (
    <span className={`review-badge review-badge--${source}`}>
      <Mark source={source} />
      {reviewSources[source].label}
    </span>
  )
}
