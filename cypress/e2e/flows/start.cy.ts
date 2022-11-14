

describe('Teste inicial', ()=> {
  it('Should visit a url', ()=>{
    cy.start()
  })
  it('Should search a item', ()=>{
    cy.searchItem('iphone')
  })
})