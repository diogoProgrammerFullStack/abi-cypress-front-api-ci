import { HomePage } from '../../pages/HomePage'
import { RegisterPage } from '../../pages/RegisterPage'

describe('Cadastro de conta com senha gerada automaticamente', () => {
  
  it('Deve cadastrar um novo usuário (admin) com dados faker', () => {
    const home = new HomePage();
    const register = new RegisterPage();

    home.visit();
    home.goToRegister();

    register.typeName();
    register.typeEmail();
    register.typePassword();
    register.toggleAdmin(true);
    register.submit();
  });
});
