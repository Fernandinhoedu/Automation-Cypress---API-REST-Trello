const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
  "trello_api": "https://api.trello.com/1",
  "video": false,
  "viewportWidth": 1520,
  "viewportHeight": 880,
});

