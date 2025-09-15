describe('API - Login', () => {
  it('Deve logar e retornar token Bearer válido', () => {
    cy.apiLogin().then((resp) => {
      const token = Cypress.env('token')
      expect(token, 'Bearer salvo').to.be.a('string').and.have.length.greaterThan(10)
    })
  })
})
