// Génère src/photos.generated.ts : la liste des images présentes dans public/.
// Grâce à ce type, l'éditeur propose les chemins des photos (autocomplétion)
// et signale une photo introuvable.
//
// Lancé automatiquement par `npm run dev` et `npm run build`
// (et à chaque ajout / suppression d'image pendant `npm run dev`).

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PUBLIC = join(ROOT, 'public')
const OUT = join(ROOT, 'src', 'photos.generated.ts')
const IMAGE = /\.(jpe?g|png|webp|avif|gif|svg)$/i

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name)
    if (e.isDirectory()) return walk(p)
    return IMAGE.test(e.name) ? [p] : []
  })
}

export function generatePhotoTypes() {
  const paths = walk(PUBLIC)
    .map((p) => '/' + relative(PUBLIC, p).split(sep).join('/'))
    .sort()
  const body = paths.length ? paths.map((p) => `  | '${p.replace(/'/g, "\\'")}'`).join('\n') : '  never'
  const content = `// ⚠️ Fichier généré automatiquement par scripts/photo-types.mjs : ne pas modifier.
// Liste des images de public/ (ajoutez une image dans public/ pour la voir apparaître ici).

export type PhotoPath =
${body}
`
  if (!existsSync(OUT) || readFileSync(OUT, 'utf8') !== content) writeFileSync(OUT, content)
  return paths.length
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(`✓ ${generatePhotoTypes()} photo(s) listée(s) dans src/photos.generated.ts`)
}
