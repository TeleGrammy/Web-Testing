class SettingsPage {
    get menuButton() { return cy.get("div[data-test-id='menu-button']") }
    get SettingsButton() { return cy.get("li[data-test-id='menu-Setting-item']")}
    get editButton() { return cy.get("button[data-test-id='edit-settings']")}
    get goBackButton() { return cy.get("button[data-test-id='go-back-button']")}    
    get nameInput() { return cy.get("input[data-test-id='name-input']")}    
    get bioInput() { return cy.get("textarea[data-test-id='bio-input']")}    
    get userNameInput() { return cy.get("input[data-test-id='username-input']")}    
    get emailInput() { return cy.get("input[data-test-id='email-input']")}    
    get phoneInput() { return cy.get("input[data-test-id='phone-input']")} 
    get privacyButton() { return cy.get("button[data-test-id='privacy']")} 
    get backPrivacyButton() { return cy.get("button.text-primary")}  
    get saveButton() { return cy.get("button[data-test-id='save-button']")} 
    get emailErrorMessage(){return cy.get("p[data-test-id='email-error']")}  
}

export default new SettingsPage()