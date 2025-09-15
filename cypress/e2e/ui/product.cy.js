import { HomePage } from '../../pages/HomePage'
import { ProductPage } from '../../pages/ProductPage';

describe('Cadastro de produto contendo upload e validação de existência do produto na lista', () => {
    const home = new HomePage()
    const product = new ProductPage()
    
    beforeEach(() => {
        home.visit()
        home.goToLogin()
    });

    it('Deve cadastrar produto com sucesso com upload de imagem & validar existência do produto na listagem', () => {
        product.registerProduct();
        product.validateIfProductExists();
    });
});
