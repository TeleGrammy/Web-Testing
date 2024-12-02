class VerifyEmailPage {
    get codeInput0() { return cy.get("input[data-test-id='0-code-input']") }
    get codeInput1() { return cy.get("input[data-test-id='1-code-input']") }
    get codeInput2() { return cy.get("input[data-test-id='2-code-input']") }
    get codeInput3() { return cy.get("input[data-test-id='3-code-input']") }
    get codeInput4() { return cy.get("input[data-test-id='4-code-input']") }
    get codeInput5() { return cy.get("input[data-test-id='5-code-input']") }
    
    get submitButton() { return cy.get("button[data-test-id='submit-button']") }
    
    get resendCodeButton() { return cy.get("button[data-test-id='resend-code-button']") }
}

export default new VerifyEmailPage();