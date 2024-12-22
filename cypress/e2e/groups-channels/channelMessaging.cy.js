import ChatMessagesPage from "../../support/page-objects/chatMessagesPage"

describe('Messages in a blocked channel ', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        ChatMessagesPage.channelItemButton.click()
    });

    it('should not allow typing in the message input if disabled', () => {
        
        ChatMessagesPage.messageInput.should('be.disabled');

        ChatMessagesPage.messageInput.should('have.attr', 'placeholder', "YOU DON'T HAVE PERMISSION!");
    });


  it('should not be able to send an image attachment', () => {
    ChatMessagesPage.attachmentsButton.click();

    const imageFilePath = '../fixtures/attachments/0194.jpg'; 
    ChatMessagesPage.attachImageInput.attachFile(imageFilePath);

    ChatMessagesPage.sendMessageButton.click();

    ChatMessagesPage.channelSentImage.should('have.attr', 'alt', '0194.jpg');
    ChatMessagesPage.channelSentImage.should('not.be.visible');
  });

  it('should not be able to send a video attachment', () => {
    ChatMessagesPage.attachmentsButton.click();

    const videoFilePath = '../fixtures/attachments/sakala.mp4'; 
    ChatMessagesPage.attachVideoInput.attachFile(videoFilePath);

    ChatMessagesPage.sendMessageButton.click();

    cy.get('video').should('not.be.visible'); 
  });

  it('should not be able to send a document attachment', () => {
    ChatMessagesPage.attachmentsButton.click();

    const documentFilePath = '../fixtures/attachments/RSA_Review.pdf'; 
    ChatMessagesPage.attachDocumentInput.attachFile(documentFilePath);

    ChatMessagesPage.sendMessageButton.click();

    ChatMessagesPage.channelSentDocument.should('not.be.visible'); 
 
  });

  it('should not be able to record and send a voice note', () => {

    ChatMessagesPage.voiceNoteButton.click();

    cy.wait(3000); 

    ChatMessagesPage.voiceNoteButton.click();

    ChatMessagesPage.sentVoiceNote.should('not.be.visible'); 
  });

});
