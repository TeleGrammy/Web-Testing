import VerifyEmailPage from "../../support/page-objects/verifyEmailPage"

describe('Email Verification Flow', () => {
    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    it('should handle all verification steps', () => {
        cy.signupCommand(data)

        VerifyEmailPage.submitButton.should('be.disabled')
        VerifyEmailPage.resendCodeButton.should('be.visible')

        VerifyEmailPage.codeInput0.type('1')
        VerifyEmailPage.codeInput1.type('2')
        VerifyEmailPage.codeInput2.type('3')
        VerifyEmailPage.codeInput3.type('4')
        VerifyEmailPage.codeInput4.type('5')
        VerifyEmailPage.codeInput5.type('6')

        VerifyEmailPage.submitButton.should('not.be.disabled')

        VerifyEmailPage.resendCodeButton.should('be.visible')

        // Fill in only some inputs and check that the submit button is still disabled
        VerifyEmailPage.codeInput5.clear()
        VerifyEmailPage.submitButton.should('be.disabled');

        // Fill in all inputs again and check that the submit button is enabled
        VerifyEmailPage.codeInput5.type('8');
        VerifyEmailPage.submitButton.should('not.be.disabled');
    });
});
