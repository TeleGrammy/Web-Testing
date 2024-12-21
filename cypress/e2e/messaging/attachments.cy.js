import ChatMessagesPage from "../../support/page-objects/chatMessagesPage"

describe('Chat Attachments and Audio Recording', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
    });

  it('should send an image attachment', () => {
    ChatMessagesPage.attachmentsButton.click();

    const imageFilePath = '../fixtures/attachments/0194.jpg'; 
    ChatMessagesPage.attachImageInput.attachFile(imageFilePath);

    ChatMessagesPage.sendMessageButton.click();

    ChatMessagesPage.sentImage.should('have.attr', 'alt', '0194.jpg');
    ChatMessagesPage.sentImage.should('be.visible');
  });

  it('should send a video attachment', () => {
    ChatMessagesPage.attachmentsButton.click();

    const videoFilePath = '../fixtures/attachments/sakala.mp4'; 
    ChatMessagesPage.attachVideoInput.attachFile(videoFilePath);

    ChatMessagesPage.sendMessageButton.click();

    cy.get('video').should('be.visible'); 
  });

  it('should send a document attachment', () => {
    ChatMessagesPage.attachmentsButton.click();

    const documentFilePath = '../fixtures/attachments/RSA_Review.pdf'; 
    ChatMessagesPage.attachDocumentInput.attachFile(documentFilePath);

    ChatMessagesPage.sendMessageButton.click();

    ChatMessagesPage.sentDocument.should('have.attr', 'href').and('include', 'blob:http'); 
    ChatMessagesPage.sentDocument.should('contain', 'RSA_Review.pdf');
    ChatMessagesPage.sentDocument.should('be.visible'); 
 
  });

  it('should record and send a voice note', () => {

    ChatMessagesPage.voiceNoteButton.click();

    cy.wait(3000); 

    ChatMessagesPage.voiceNoteButton.click();

    ChatMessagesPage.sentVoiceNote.should('be.visible'); 
  });

});
