const HOST = Cypress.env('host')

Cypress.Commands.add('start', () => {
  cy.visit(HOST) 
})