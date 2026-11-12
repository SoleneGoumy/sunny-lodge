import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-expect-error script Node en JavaScript, sans déclaration de types
import { generatePhotoTypes } from './scripts/photo-types.mjs'

/** Tient à jour la liste des photos de public/ (autocomplétion des chemins). */
function photoTypes(): Plugin {
  return {
    name: 'sunny-lodge-photo-types',
    buildStart() {
      generatePhotoTypes()
    },
    configureServer(server) {
      const onChange = (file: string) => {
        if (file.includes('/public/')) generatePhotoTypes()
      }
      server.watcher.on('add', onChange)
      server.watcher.on('unlink', onChange)
    },
  }
}

export default defineConfig({
  plugins: [react(), photoTypes()],
})
