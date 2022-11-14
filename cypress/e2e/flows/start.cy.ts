

describe('Teste inicial', ()=> {
  beforeEach(()=>{
    cy.start()
  })

  it('Should search a item', ()=>{
    cy.searchItem('iphone')

    cy.get('[data-testid="card-teste-id"]').should('have.length', 4)
  })

  it('Should find a item', ()=>{
    cy.findItem('iphone')

    cy.get('h2')
  })
})