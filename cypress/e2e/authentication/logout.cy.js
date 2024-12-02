
import EditProfilePage from '../../support/page-objects/editProfilePage'

describe('logout page', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })


    it('logout from the account', () => { 
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        EditProfilePage.menuButton.click()
        EditProfilePage.logoutButton.click()
        cy.url().should('include', '/auth/login')
    })
})
