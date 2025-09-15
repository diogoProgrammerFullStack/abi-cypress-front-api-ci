export class HomePage {
  constructor() {
    this.selectors = {
      logon: {
        inputemail: '[data-testid="email"]',
        inputPassword: '[data-testid="senha"]',
        btnEnter: '[data-testid="entrar"]'
      },
      register: {
        btnRegister: 'a[data-testid="cadastrar"]'
      },
      logout: {
        btnLogout: `button[data-testid='logout']`
      }
    }
  }

  visit() {
    cy.visit('/');
  }

  goToRegister() {
    cy.get(this.selectors.register.btnRegister).click();
    cy.url().should('include', '/cadastrar');
  }

  goToLogin() {
    cy.get(this.selectors.logon.inputemail).type(Cypress.env('USER_EMAIL'));
    cy.get(this.selectors.logon.inputPassword).type(Cypress.env('USER_PASSWORD'));
    cy.get(this.selectors.logon.btnEnter).click();
    cy.contains('h1', /bem vindo\s+diogo qa/i, { timeout: 10000 }).should('be.visible');
  }

  logout() {
    cy.get(this.selectors.logout.btnLogout).click();
    cy.contains('h1', 'Login', { timeout: 3000 }).should('be.visible');
  }
}
