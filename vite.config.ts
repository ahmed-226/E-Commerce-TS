import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/<REPO_NAME>/', // Replace <REPO_NAME> with your repository name
  plugins: [react()],
})