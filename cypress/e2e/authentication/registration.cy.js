import SignupPage from "../../support/page-objects/signupPage"

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
        SignupPage.authButton.click()
        SignupPage.authButton.click()
        SignupPage.authButton.click()
        SignupPage.authButton.click()
        
        cy.wait(500)
    })

    
    it('should show social login buttons', () => {
        SignupPage.googleSignupButton.should('be.visible');
        SignupPage.githubSignupButton.should('be.visible');
    })

    it('should not go to verification page if reCaptcha is not checked', () => {
        
        SignupPage.userNameInput.type(data.signupData.username);
        SignupPage.emailInput.type(data.signupData.email);
        SignupPage.phoneInput.type(data.signupData.phone);
        SignupPage.passwordInput.type(data.signupData.password);
        SignupPage.confirmPasswordInput.type(data.signupData.password);    
        SignupPage.signupButton.click();
    
        cy.url().should('not.include', '/signup/verify'); 
    })

    it('should not go to verification page if email is not valid', () => {
        
        cy.confirmCaptcha()
        SignupPage.userNameInput.type(data.signupData.username);
        SignupPage.emailInput.type(data.signupData.invalidEmail);
        SignupPage.phoneInput.type(data.signupData.phone);
        SignupPage.passwordInput.type(data.signupData.password);
        SignupPage.confirmPasswordInput.type(data.signupData.password);    
        
        SignupPage.signupButton.click();
    
        cy.url().should('not.include', '/signup/verify'); 
    })

    it('should not go to verification page if passwords does not match', () => {

        
        cy.confirmCaptcha()
        SignupPage.userNameInput.type(data.signupData.username);
        SignupPage.emailInput.type(data.signupData.email);
        SignupPage.phoneInput.type(data.signupData.phone);
        SignupPage.passwordInput.type(data.signupData.password);
        SignupPage.confirmPasswordInput.type(data.signupData.unmachedPassword);    

        SignupPage.signupButton.click();
    
        cy.url().should('not.include', '/signup/verify'); 
    })

    it('should not go to verification page if password is too short', () => {
        
        cy.confirmCaptcha()
        SignupPage.userNameInput.type(data.signupData.username);
        SignupPage.emailInput.type(data.signupData.email);
        SignupPage.phoneInput.type(data.signupData.phone);
        SignupPage.passwordInput.type(data.signupData.shortPassword);
        SignupPage.confirmPasswordInput.type(data.signupData.shortPassword);    

        SignupPage.signupButton.click();
    
        cy.url().should('not.include', '/signup/verify'); 
    })

    it('should not go to verification page if any input field is empty', () => {
        
        cy.confirmCaptcha()
        SignupPage.userNameInput.type(data.signupData.username);
        SignupPage.emailInput.type(data.signupData.email);
        SignupPage.phoneInput.type(data.signupData.phone);
        SignupPage.passwordInput.type(data.signupData.password);
        SignupPage.confirmPasswordInput.type(data.signupData.password);    

        SignupPage.userNameInput.clear()
        SignupPage.signupButton.click()
        cy.url().should('not.include', '/signup/verify'); 
        SignupPage.userNameInput.type(data.signupData.username);

        SignupPage.emailInput.clear()
        SignupPage.signupButton.click()
        cy.url().should('not.include', '/signup/verify'); 
        SignupPage.emailInput.type(data.signupData.email);

        SignupPage.phoneInput.clear()
        SignupPage.signupButton.click()
        cy.url().should('not.include', '/signup/verify'); 
        SignupPage.phoneInput.type(data.signupData.phone);

        SignupPage.confirmPasswordInput.clear()
        SignupPage.signupButton.click()
        cy.url().should('not.include', '/signup/verify'); 

        // cy.url().should('include', '/signup/verify'); 
    })

    it('should successfully go to verification page if a new user', () => {
        
        cy.confirmCaptcha()
        SignupPage.userNameInput.type(data.signupData.username);
        SignupPage.emailInput.type(data.signupData.email);
        SignupPage.phoneInput.type(data.signupData.phone);
        SignupPage.passwordInput.type(data.signupData.password);
        SignupPage.confirmPasswordInput.type(data.signupData.password);
    
        
        SignupPage.signupButton.click();
    
        cy.url().should('include', '/signup/verify'); 
    })

    it('should not go to verification page if a duplicated user name', () => {
        
        cy.confirmCaptcha()
        SignupPage.userNameInput.type(data.signupData.username);
        SignupPage.emailInput.type(data.signupData.email2);
        SignupPage.phoneInput.type(data.signupData.phone2);
        SignupPage.passwordInput.type(data.signupData.password);
        SignupPage.confirmPasswordInput.type(data.signupData.password);
    
        
        SignupPage.signupButton.click();
    
        cy.url().should('not.include', '/signup/verify'); 
    })
  
    it('should not go to verification page if a duplicated email', () => {
        
        cy.confirmCaptcha()
        SignupPage.userNameInput.type(data.signupData.username2);
        SignupPage.emailInput.type(data.signupData.email);
        SignupPage.phoneInput.type(data.signupData.phone2);
        SignupPage.passwordInput.type(data.signupData.password);
        SignupPage.confirmPasswordInput.type(data.signupData.password);
    
        
        SignupPage.signupButton.click();
    
        cy.url().should('not.include', '/signup/verify'); 
    })

    it('should not go to verification page if a duplicated phone number', () => {
        
        cy.confirmCaptcha()
        SignupPage.userNameInput.type(data.signupData.username2);
        SignupPage.emailInput.type(data.signupData.email2);
        SignupPage.phoneInput.type(data.signupData.phone);
        SignupPage.passwordInput.type(data.signupData.password);
        SignupPage.confirmPasswordInput.type(data.signupData.password);
    
        
        SignupPage.signupButton.click();
    
        cy.url().should('not.include', '/signup/verify'); 
    })
  
    
})
