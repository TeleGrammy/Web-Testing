class StoryPage {
    get story() { return cy.get("svg[data-test-id='0-story-border']") }
    
    get closeButton() { return cy.get("div[data-test-id='close-rightsidebar-button']")}
}
export default new StoryPage()