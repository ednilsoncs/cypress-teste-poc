import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: './cypress/support/index.ts',
    env: {
      host: "https://www.mercadolivre.com.br/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})