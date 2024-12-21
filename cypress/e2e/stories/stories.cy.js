import StoryPage from "../../support/page-objects/storyPage"

describe('Chat Attachments and Audio Recording', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
    });

  it('should open the story when clicked', () => {
    StoryPage.story.click();
    StoryPage.closeButton.should('be.visible').click();
    StoryPage.story.should('be.visible');

  });
});
