import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: './cypress/support/index.ts',
    env: {
      host: "http://localhost:3000/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})