const HOST = Cypress.env('host')

Cypress.Commands.add('findItem', (item) => {
  cy.start()
  cy.get("input").first().type(`${item} {enter}`);
  cy.get('[data-testid="card-teste-id"]').first().click()
})