const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev', // Frontend
    env: {
      apiBaseUrl: 'https://serverest.dev'   // API pública
    },
    viewportWidth: 1366,
    viewportHeight: 800,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      return config
    }
  }
})
