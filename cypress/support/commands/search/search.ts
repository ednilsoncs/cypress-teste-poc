Cypress.Commands.add('searchItem', (item) => {
  cy.visit(HOST)
  cy.get(".nav-search-input").first().type(`${item} {enter}`);
})