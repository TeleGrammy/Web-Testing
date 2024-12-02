import LoginPage from './page-objects/loginPage'
import EditProfilePage from './page-objects/editProfilePage'
import PrivacyPage from './page-objects/privacyPage'
import SignupPage from './page-objects/signupPage'
import 'cypress-iframe'

Cypress.Commands.add('loginCommand', (email, password) => {
    cy.visit('/auth/login')
    LoginPage.emailInput.type(email)
    LoginPage.passInput.type(password)
    
    LoginPage.singinButton.click()
    cy.url().should('include', '/home')
  })

Cypress.Commands.add('logoutCommand', () => {
  EditProfilePage.menuButton.click()
  EditProfilePage.logoutButton.click()
  cy.url().should('include', '/auth/login')
})

Cypress.Commands.add('goToSettings', () => {
  EditProfilePage.menuButton.click()
  EditProfilePage.settingsButton.click()
  cy.get('h2').contains('Settings').should('be.visible')
})

Cypress.Commands.add('goToPrivacy', () => {
  EditProfilePage.menuButton.click()
  EditProfilePage.settingsButton.click()
  PrivacyPage.privacyButton.click()
  PrivacyPage.privacyTitle.contains('Privacy Settings').should('be.visible')
})

Cypress.Commands.add('signupCommand', (data) => {

  cy.visit('/auth/signup/register')
  cy.confirmCaptcha()
  SignupPage.userNameInput.type(data.signupData.username2);
  SignupPage.emailInput.type(data.signupData.email2);
  SignupPage.phoneInput.type(data.signupData.phone2);
  SignupPage.passwordInput.type(data.signupData.password);
  SignupPage.confirmPasswordInput.type(data.signupData.password);

  
  SignupPage.signupButton.click();

  cy.url().should('include', '/signup/verify');
})


Cypress.Commands.add('confirmCaptcha', function () {
  cy.wait(500)
  cy.frameLoaded('iframe[title="reCAPTCHA"]');
  cy.iframe('iframe[title="reCAPTCHA"]').find('.recaptcha-checkbox-border').click();
  cy.wait(1500)
})