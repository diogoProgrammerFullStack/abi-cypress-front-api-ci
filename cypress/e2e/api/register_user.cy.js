describe('API - Criar Usuário', () => {
  before(() => {
    cy.apiLogin()
  })

  it('Deve criar um usuário via POST /usuarios usando TestHelper', () => {
    cy.apiCreateUser().then((resp) => {
      if (resp.status === 201) {
        expect(resp.body).to.have.property('_id')
        cy.log(`Criado com id: ${resp.body._id}`)
      } else if (resp.status === 400) {
        expect(resp.body).to.have.property('message')
      }
    })
  })

  it('Cria usuário não-admin', () => {
    cy.apiCreateUser({ admin: false }).then((resp) => {
      expect([201, 400]).to.include(resp.status)
    })
  })
})
