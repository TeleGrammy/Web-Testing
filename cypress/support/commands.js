// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from './page-objects/loginPage'
import SettingsPage from './page-objects/settingsPage'

Cypress.Commands.add('loginCommand', (email, password) => {
    cy.visit('/auth/login')
    LoginPage.emailInput.type(email)
    LoginPage.passInput.type(password)
    
    LoginPage.singinButton.click()
    cy.url().should('include', '/home')
  })

  Cypress.Commands.add('goToSettings', () => {
    SettingsPage.menuButton.click()
    SettingsPage.SettingsButton.click()
    cy.get('h2').contains('Settings').should('be.visible')
  })