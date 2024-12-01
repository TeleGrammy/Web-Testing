class EditProfilePage {
    get menuButton() { return cy.get("div[data-test-id='menu-button']") }
    get settingsButton() { return cy.get("li[data-test-id='menu-Setting-item']")}
    get themesButton() { return cy.get("li[data-test-id='dark-mode-button']")}
    get editButton() { return cy.get("button[data-test-id='edit-settings']")}
    get goBackButton() { return cy.get("button[data-test-id='settings-view']")}    
    get nameInput() { return cy.get("input[data-test-id='full-name']")}    
    get bioInput() { return cy.get("textarea[data-test-id='bio']")}    
    get userNameInput() { return cy.get("input[data-test-id='user-name']")}    
    get emailInput() { return cy.get("input[data-test-id='email']")}    
    get phoneInput() { return cy.get("input[data-test-id='phone']")} 
    get saveButton() { return cy.get("button[data-test-id='save']")} 
    get emailErrorMessage(){return cy.get("p[data-test-id='email-error']")}  
}

export default new EditProfilePage()