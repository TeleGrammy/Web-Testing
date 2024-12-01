class SignupPage {
    get userNameInput() { return cy.get("input[data-test-id='username-input']") }
    get emailInput() { return cy.get("input[data-test-id='email-input']")}    
    get phoneInput() { return cy.get("input[data-test-id='phone-input']")} 
    get passwordInput() { return cy.get("input[data-test-id='password-input']")} 
    get confirmPasswordInput() { return cy.get("input[data-test-id='confirm-password-input']")} 
    get signupButton() { return cy.get("button[data-test-id='sign-up-button']")}    
    get recaptchaAnchor() { return cy.get("[data-test-id='captcha']")}
    get googleSignupButton() { return cy.get("button[data-testid='social-login-button-google']")}    
    get githubSignupButton() { return cy.get("button[data-testid='social-login-button-github']")}    
}

export default new SignupPage()