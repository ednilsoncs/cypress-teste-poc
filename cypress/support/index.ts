// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      start(): Chainable<Element>
      searchItem(value: string):  Chainable<Element>
      findItem(value: string): Chainable<Element>
    }
  }
}


import './commands';