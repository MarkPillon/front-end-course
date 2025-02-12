import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    allowedHosts: [
      '5173-markpillon-frontendcour-yknrxx3n6l4.ws-us117.gitpod.io', // Add your Gitpod host here
    ],
  },
})