# ServeRest - Testes E2E com Cypress

Este projeto contém testes automatizados de interface (E2E) e API para a aplicação ServeRest, desenvolvidos com Cypress em JavaScript.

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** (geralmente vem com o Node.js)

### Verificando as versões instaladas

```bash
node --version
npm --version
```

## 🚀 Instalação

1. **Clone o repositório** (se ainda não foi feito):
```bash
git clone <url-do-repositorio>
cd abi-cypress
```

2. **Instale as dependências**:
```bash
npm install
```

## ⚙️ Configuração

### Variáveis de Ambiente

O projeto utiliza as seguintes configurações:

- **Frontend**: `https://front.serverest.dev`
- **API**: `https://serverest.dev`

As credenciais de teste estão configuradas no arquivo `cypress.env.json`:
- Email: `diogooliveira@teste.com`
- Senha: `testeQA`

### Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── api/           # Testes de API
│   │   ├── login.cy.js
│   │   ├── register_user.cy.js
│   │   └── users.cy.js
│   └── ui/            # Testes de Interface
│       ├── loginLogout.cy.js
│       ├── product.cy.js
│       └── register.cy.js
├── fixtures/          # Dados de teste
├── pages/             # Page Objects
├── support/           # Comandos customizados
└── downloads/         # Arquivos baixados durante os testes
```

## 🧪 Executando os Testes

### 1. Interface Gráfica (Recomendado para desenvolvimento)

Abra o Cypress Test Runner para executar os testes de forma interativa:

```bash
npm run open
```

### 2. Linha de Comando

#### Executar todos os testes:
```bash
npm test
```

#### Executar apenas testes de interface:
```bash
npm run test:ui
```

#### Executar apenas testes de API:
```bash
npm run test:api
```

### 3. Executar testes específicos

```bash
# Teste específico de login
npx cypress run --spec "cypress/e2e/ui/loginLogout.cy.js"

# Teste específico de API
npx cypress run --spec "cypress/e2e/api/login.cy.js"
```

## 🛠️ Comandos Customizados

O projeto inclui comandos customizados para facilitar os testes:

- `cy.apiLogin()` - Realiza login via API
- `cy.apiCreateUser()` - Cria usuário via API
- `cy.apiGetUserById()` - Busca usuário por ID via API

## 🔧 Configurações Avançadas

### Modificar viewport

Para alterar o tamanho da tela dos testes, edite o arquivo `cypress.config.js`:

```javascript
viewportWidth: 1366,
viewportHeight: 800,
```

### Configurar timeouts

```javascript
// No cypress.config.js
defaultCommandTimeout: 10000,
requestTimeout: 10000,
responseTimeout: 10000,
```

## 🐛 Solução de Problemas

### Erro de dependências
```bash
# Limpar cache e reinstalar
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Problemas de permissão (Windows)
```bash
# Executar como administrador ou usar:
npx cypress run
```

