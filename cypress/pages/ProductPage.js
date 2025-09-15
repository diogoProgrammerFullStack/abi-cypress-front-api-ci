import TestHelper from '../support/utils/TestHelper'
import 'cypress-file-upload'

export class ProductPage {
    constructor() {
        this.testData = TestHelper.dataProduct()
        this.selectors = {
            btnRegisterAccess: '[data-testid="cadastrarProdutos"]',
            inputNameProduct: '[data-testid="nome"]',
            inputPriceProduct: '[data-testid="preco"]',
            inputDescriptionProduct: '[data-testid="descricao"]',
            inputQuantityProduct: '[data-testid="quantity"]',
            uploadFile: '[data-testid="imagem"]',
            btnRegisterSubmit: 'button[data-testid="cadastarProdutos"]'
        }
    }

    registerProduct() {
        const name = this.testData.name
        cy.wrap(name, { log: false }).as('productName');

        cy.get(this.selectors.btnRegisterAccess).click();
        cy.get(this.selectors.inputNameProduct).type(name);
        cy.get(this.selectors.inputPriceProduct).type('50.00');
        cy.get(this.selectors.inputDescriptionProduct).type(this.testData.description);
        cy.get(this.selectors.inputQuantityProduct).type(String(this.testData.quantity));
        cy.get(this.selectors.uploadFile)
            .should('have.attr', 'type', 'file')
            .selectFile('cypress/fixtures/images/ABI.png', { force: true });

        cy.intercept('POST', '**/produtos').as('createProduct');
        cy.get(this.selectors.btnRegisterSubmit).click();
        cy.wait('@createProduct').its('response.statusCode').should('be.oneOf', [200, 201]);

        return cy.wrap(name, { log: false });
    }

    validateIfProductExists() {
        cy.get('@productName').then((name) => {
            cy.contains('body', name).should('be.visible');
        });
    }
}