import { HomePage } from '../../pages/HomePage'

describe('Login e Logout do sistema', () => {
    const home = new HomePage()
    
    beforeEach(() => {
        home.visit()
    });

    it('Deve efetuar login com sucesso no sistema', () => {
        home.goToLogin();
    });

    it('Deve efetuar logout com sucesso no sistema', () => {
        home.goToLogin();
        home.logout();
    });
});
