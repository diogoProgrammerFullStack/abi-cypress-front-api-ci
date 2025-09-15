describe('API - Usuários /usuarios/{_id}', () => {
  before(() => {
    cy.apiLogin()
    cy.apiCreateUser()
  })

  it('Deve retornar um usuário existente (200)', () => {
    cy.get('@createdUserId').then((id) => {
      cy.get('@createdUserBody').then((created) => {
        cy.apiGetUserById(id).then((resp) => {
          expect(resp.status).to.eq(200)
          expect(resp.body).to.include.keys('nome', 'email', 'password', 'administrador', '_id')
          expect(resp.body._id).to.eq(id)
          expect(resp.body.nome).to.eq(created.nome)
          expect(resp.body.email).to.eq(created.email)
          expect(String(resp.body.administrador)).to.eq(String(created.administrador))
        })
      })
    })
  })
})
