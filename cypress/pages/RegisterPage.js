import TestHelper from '../support/utils/TestHelper'

export class RegisterPage {
  constructor() {
    this.testData = TestHelper.basicData(),
      this.selectors = {
        name: 'input[data-testid="nome"]',
        email: 'input[data-testid="email"]',
        pass: 'input[data-testid="password"]'
      }
  }

  typeName() {
    cy.get(this.selectors.name).clear().type(this.testData.name);
  }

  typeEmail() {
    cy.get(this.selectors.email).clear().type(this.testData.email);
  }

  typePassword() {
    cy.get(this.selectors.pass).clear().type(this.testData.password);
  }

  toggleAdmin(value = true) {
    const cb = cy.get('input[data-testid="checkbox"]');
    value ? cb.check({ force: true }) : cb.uncheck({ force: true });
  }

  submit() {
    cy.intercept('POST', '**/usuarios').as('createUser');
    cy.get('button[data-testid="cadastrar"]').click();
    cy.wait('@createUser').then(({ response }) => {
      expect(response?.statusCode).to.be.oneOf([201, 400]);
      if (response?.statusCode === 201) {
        expect(response.body).to.have.property('_id');
      } else {
        expect(response.body).to.have.property('message');
      }
    })
  }
}
