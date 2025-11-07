import tailwindCSS from '@tailwindcss/vite'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  server: {
    host: true,
    open: true
  },
  preview: {
    host: true,
    open: false
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json']
    }),
    tanstackStart(),
    nitroV2Plugin({
      preset: 'node-server',
      prerender: {
        routes: ['/'],
        crawlLinks: true
      },
      compatibilityDate: 'latest'
    }),
    viteReact(),
    tailwindCSS()
  ]
})

export { config as default }
