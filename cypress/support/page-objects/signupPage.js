class SignupPage {
    get userNameInput() { return cy.get("input[data-test-id='username-input']") }
    get emailInput() { return cy.get("input[data-test-id='email-input']")}    
    get phoneInput() { return cy.get("input[data-test-id='phone-input']")} 
    get passwordInput() { return cy.get("input[data-test-id='password-input']")} 
    get confirmPasswordInput() { return cy.get("input[data-test-id='confirm-password-input']")} 
    get signupButton() { return cy.get("input[data-test-id='sign-up-button']")}    
    get recaptchaAnchor() { return cy.get('#recaptcha-anchor')}
}

export default new SignupPage()