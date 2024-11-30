
import LoginPage from '../../support/page-objects/loginPage'


describe('login page', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach('navigate to login page and input field should be empty', () => {
        cy.visit('/auth/login')
        LoginPage.emailInput.should('be.empty')
        LoginPage.passInput.should('be.empty')
    })

    it('signin with valid email', () => { 
        LoginPage.emailInput.type(data.normalLogin.validEmail)
        LoginPage.passInput.type(data.normalLogin.validPassword)
        
        LoginPage.singinButton.click()
        cy.url().should('include', '/home')
    })

    it('signin with invalid email', () => {
        LoginPage.emailInput.type(data.normalLogin.wrongEmail)
        LoginPage.passInput.type(data.normalLogin.validPassword)
        LoginPage.singinButton.click()
        cy.url().should('not.include', '/home')
    })

    it('signin with wrong password', () => {
        LoginPage.emailInput.type(data.normalLogin.validEmail)
        LoginPage.passInput.type(data.normalLogin.wrongPassword)
        LoginPage.singinButton.click()
        cy.url().should('not.include', '/home')
    })

    it('signin with empty inputs', () => {
        LoginPage.singinButton.click()
        cy.url().should('not.include', '/home')
    })

    it('return back to singup form', () => {
        LoginPage.singupButton.click()
        cy.url().should('include', '/signup/register')
    })
})
