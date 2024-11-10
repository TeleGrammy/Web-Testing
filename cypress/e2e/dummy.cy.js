describe('dummy test', () => {
    it('Correct title', () => {
        cy.visit("http://localhost:5173")
        cy.title().should('eq', 'TeleGrammy')
    })

    it('Incorrect title', () => {
        cy.visit("http://localhost:5173")
        cy.title().should('eq', 'Whatsuppy!')
    })

})