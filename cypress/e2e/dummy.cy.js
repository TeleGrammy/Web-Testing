describe('dummy test', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Correct title', () => {
        cy.title().should('eq', 'TeleGrammy')
    })

    it('Incorrect title', () => {
        cy.title().should('eq', 'Whatsuppy!')

    })

})