import SignupPage from "../../support/page-objects/signupPage";

describe('signup page', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach('navigate to login page and input field should be empty', () => {
        
        cy.visit('/auth/signup/register')
        SignupPage.userNameInput.should('be.empty')
        SignupPage.emailInput.should('be.empty')
        SignupPage.phoneInput.should('be.empty')
        SignupPage.passwordInput.should('be.empty')
        SignupPage.confirmPasswordInput.should('be.empty')
    })

    it('test recapcha', () => { 
        // SignupPage.recaptchaAnchor.click()
        cy.confirmCaptcha()
    })

    it('should successfully register a new user', () => {
        
        SignupPage.userNameInput.type(data.signupData.username);
        SignupPage.emailInput.type(data.signupData.email);
        SignupPage.phoneInput.type(data.signupData.phone);
        SignupPage.passwordInput.type(data.signupData.password);
        SignupPage.confirmPasswordInput.type(data.signupData.password);
    
        // cy.confirmCaptcha()
    
        SignupPage.signupButton.click();
    
        cy.url().should('include', '/home'); 
    })


    it('should show social login buttons', () => {
        SignupPage.googleSignupButton.should('be.visible');
        SignupPage.githubSignupButton.should('be.visible');
    })
})
