const HOST = Cypress.env('host')

describe('Teste fluxo de items', ()=> {
  beforeEach(()=>{
    cy.start()
  })

  it('Should search a item', ()=>{
    cy.searchItem('iphone')

    cy.get('[data-testid="card-teste-id"]').should('have.length', 4)
  })

  it('Should search using a url', ()=>{
    cy.visit(`${HOST}/items?search=android`)
    cy.get('[data-testid="card-teste-id"]').should('have.length', 4)
  })

  it('Should find a item', ()=>{
    cy.findItem('iphone')

    cy.get('h2')
  })
})