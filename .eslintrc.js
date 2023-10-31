{
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": ["eslint:recommended", "plugin:es6/recommended"],
    "overrides": [
      {
        "files": ["**/*.cy.js"],
        "env": { "cypress/globals": true },
        "plugins": ["cypress"],
        "extends": ["plugin:cypress/recommended"],
        "rules": {
          "cypress/no-unnecessary-waiting": "off",
          "no-unused-vars": "off"
        }
      },
      {
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }
    ],
    "parserOptions": {
      "ecmaVersion": 2021
    },
    "parser": "babel-eslint",
    "rules": {}
}
