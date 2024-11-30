
import SettingsPage from '../../support/page-objects/settingsPage'


describe('Theme Toggle Tests', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

  
    it('should toggle when the theme button is clicked', () => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        SettingsPage.menuButton.click()

        cy.get('html').should('not.have.class', 'dark-theme');

        SettingsPage.themesButton.click()
        cy.get('html').should('have.class', 'dark-theme');
        
        SettingsPage.themesButton.click()
        cy.get('html').should('not.have.class', 'dark-theme');
    })
  
})