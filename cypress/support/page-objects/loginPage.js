class LoginPage {
    get emailInput() { return cy.get("input[data-test-id='email-input']") }
    get passInput() { return cy.get("input[data-test-id='password-input']")}
    get singinButton() { return cy.get("button[data-test-id='sign-in-button']")}
    get singupButton() { return cy.get("button[data-testid='auth-button']")}    
}

export default new LoginPage()