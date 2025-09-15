import TestHelper from './utils/TestHelper'

Cypress.Commands.add('apiLogin', (email = Cypress.env('USER_EMAIL'), password = Cypress.env('USER_PASSWORD')) => {
    const url = `${Cypress.env('apiBaseUrl')}/login`
    return cy.request('POST', url, { email, password }).then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.keys(['message', 'authorization'])
        const token = resp.body.authorization.replace(/^Bearer\s/, '')
        Cypress.env('token', token)
        return resp
    })
})

Cypress.Commands.add('apiCreateUser', (overrides = {}, { useAuth = true } = {}) => {
  const data = TestHelper.basicData(overrides)
  const body = {
    nome: data.name,
    email: data.email,
    password: data.password,
    administrador: data.admin ? 'true' : 'false'
  }

  const options = {
    method: 'POST',
    url: `${Cypress.env('apiBaseUrl')}/usuarios`,
    body,
    failOnStatusCode: false
  }

  const token = Cypress.env('token')
  if (useAuth && token) options.headers = { Authorization: `Bearer ${token}` }

  return cy.request(options).then((resp) => {
    expect([201, 400, 401]).to.include(resp.status)

    if (resp.status === 201 && resp.body?._id) {
      cy.wrap(resp.body._id, { log: false }).as('createdUserId')
      cy.wrap(body, { log: false }).as('createdUserBody')
    }

    return cy.wrap(resp, { log: false })
  })
})

Cypress.Commands.add('apiGetUserById', (id, { useAuth = true } = {}) => {
  const options = {
    method: 'GET',
    url: `${Cypress.env('apiBaseUrl')}/usuarios/${id}`,
    failOnStatusCode: false
  }

  const token = Cypress.env('token')
  if (useAuth && token) {
    options.headers = { Authorization: `Bearer ${token}` }
  }

  return cy.request(options)
})

Cypress.Commands.overwrite('type', (orig, subject, text, opts) => {
    return orig(subject, text, { ...(opts || {}), delay: 0 })
})