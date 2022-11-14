const HOST = Cypress.env('host')

Cypress.Commands.add('searchItem', (item) => {
  cy.visit(HOST)
  cy.get("input").first().type(`${item} {enter}`);
})