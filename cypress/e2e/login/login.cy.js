
describe('login page', () => {

    beforeEach('navigate to login page and input field should be empty', () => {
        cy.visit('/login')
        cy.get("input[id='email']").should('be.empty')
        cy.get("input[id='password']").should('be.empty')
    });

    it('signin with valid email', () => {
        cy.get("input[id='email']").type("sanade3052@cironex.com")
        cy.get("input[id='password']").type("12345678")
        cy.get("button[id='sign-up']").click()
        cy.url().should('include', '/home')
    })

    it('signin with invalid email', () => {
        cy.get("input[id='email']").type("sanade3052")
        cy.get("input[id='password']").type("12345678")
        cy.get("button[id='sign-up']").click()
        cy.url().should('not.include', '/home')
    })

    it('signin with wrong password', () => {
        cy.get("input[id='email']").type("sanade3052@cironex.com")
        cy.get("input[id='password']").type("1234rrrrr")
        cy.get("button[id='sign-up']").click()
        cy.url().should('not.include', '/home')
    })

    it('signin with empty inputs', () => {
        cy.get("button[id='sign-up']").click()
        cy.url().should('not.include', '/home')
    })

})