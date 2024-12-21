import GroupChannelPage from "../../support/page-objects/groupChannelPage"

describe('Chat Attachments and Audio Recording', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        GroupChannelPage.createButton.should('be.visible')
    });

  it('should create and show the channel in the chatlist', () => {
    GroupChannelPage.createButton.click();
    GroupChannelPage.newChannelButton.should('exist').click()
    GroupChannelPage.createButton.should('not.exist');
    GroupChannelPage.channelNameInput.type('TEST_CHANNEL')
    GroupChannelPage.descriptionInput.type('Channel description')
    GroupChannelPage.createButton.should('be.visible').click();
    GroupChannelPage.userCheckbox.click()
    GroupChannelPage.createButton.click();
    

    GroupChannelPage.chatList 
      .children()                          
      .last()                              
      .find('[data-test-id^="chat-name-"]') 
      .should('have.text', 'TEST_CHANNEL');      
  });

  it('should create and show the channel in the chatlist', () => {
    GroupChannelPage.createButton.click();
    GroupChannelPage.newGroupButton.should('exist').click()
    GroupChannelPage.createButton.should('not.exist');
    GroupChannelPage.channelNameInput.type('TEST_GROUP')
    GroupChannelPage.descriptionInput.type('Group description')
    GroupChannelPage.createButton.should('be.visible').click();
    GroupChannelPage.userCheckbox.click()
    GroupChannelPage.createButton.click();
    

    GroupChannelPage.chatList  
      .children()                          
      .last()                              
      .find('[data-test-id^="chat-name-"]') 
      .should('have.text', 'TEST_GROUP');    
  });

  });
