
import EditProfilePage from '../../support/page-objects/editProfilePage'


describe('Theme Toggle Tests', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

  
    it('should toggle when the theme button is clicked', () => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        EditProfilePage.menuButton.click()

        cy.get('html').should('not.have.class', 'dark-theme');

        EditProfilePage.themesButton.click()
        cy.get('html').should('have.class', 'dark-theme');
        
        EditProfilePage.themesButton.click()
        cy.get('html').should('not.have.class', 'dark-theme');
    })
  
})