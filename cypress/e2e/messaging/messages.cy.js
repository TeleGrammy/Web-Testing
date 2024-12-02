import ChatMessagesPage from "../../support/page-objects/chatMessagesPage"

describe('Chat Page Tests', () => {
    
    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
    });


    it('should load the chat page correctly', () => {
        
        ChatMessagesPage.chatMessagesImage.should('be.visible');
        ChatMessagesPage.sendMessageButton.should('be.visible');
    })

    it('should send a message', () => {
        const toBeSent = 'Sent message (FOR TESTING)';
        ChatMessagesPage.messageInput.type(toBeSent);
    
        ChatMessagesPage.sendMessageButton.click();
    
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeSent);
    })

    it('should delete the message', () => {
        
        const toBeDeleted = 'Deleted Message (FOR TESTING)';
        ChatMessagesPage.messageInput.type(toBeDeleted);
    
        ChatMessagesPage.sendMessageButton.click();
    
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeDeleted);

        ChatMessagesPage.sentMessageDeleteButton.click()
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('not.contain.text', toBeDeleted);

    })

    it('should highlight the message when searched', () => {

        const searchKeyword = 'Hi';
        ChatMessagesPage.openSearchButton.click()
        ChatMessagesPage.searchInChatInput.should("be.visible").type(searchKeyword);
    
        cy.get('div.bg-bg-message-receiver p')
            .contains(searchKeyword)
            .closest('div')
            .parent()
            .parent()
            .should('have.class', 'bg-yellow-200');  
    })

    
    
    it('should show emojis options probarly', () => {
        ChatMessagesPage.emojiButton.should('not.exist')
        ChatMessagesPage.stickerButton.should('not.exist')
        ChatMessagesPage.gifButton.should('not.exist')
        
        ChatMessagesPage.emojisButton.should('be.visible').click()
        
        ChatMessagesPage.emojiButton.should('be.visible').click()
        ChatMessagesPage.stickerButton.should('be.visible').click()
        ChatMessagesPage.gifButton.should('be.visible').click()
        
        ChatMessagesPage.emojisButton.should('be.visible').click()

        ChatMessagesPage.emojiButton.should('not.exist')
        ChatMessagesPage.stickerButton.should('not.exist')
        ChatMessagesPage.gifButton.should('not.exist')
        
    })

    it('should show attachments options probarly', () => {
        ChatMessagesPage.attachImageButton.should('not.exist')
        ChatMessagesPage.attachVideoButton.should('not.exist')
        ChatMessagesPage.attachDocumentButton.should('not.exist')
        
        ChatMessagesPage.attachmentsButton.should('be.visible').click()
        
        ChatMessagesPage.attachImageButton.should('be.visible')
        ChatMessagesPage.attachVideoButton.should('be.visible')
        ChatMessagesPage.attachDocumentButton.should('be.visible')
        
        ChatMessagesPage.attachmentsButton.should('be.visible').click()

        ChatMessagesPage.attachImageButton.should('not.exist')
        ChatMessagesPage.attachVideoButton.should('not.exist')
        ChatMessagesPage.attachDocumentButton.should('not.exist')
        
    })

   it('should interact with received message buttons (Forward, Reply, Pin)', () => {
    // Check if the buttons for the first received message are visible
    ChatMessagesPage.receivedMessageForwardButton.should('be.visible').click();
    ChatMessagesPage.exitForwardButton.should('be.visible').click();
    
    // Check the Reply button
    ChatMessagesPage.receivedMessageReplyButton.should('be.visible').click();
    ChatMessagesPage.cancelReplyButton.should('be.visible').click()
    
    // Check the Pin button
    ChatMessagesPage.receivedMessagePinButton.should('be.visible').click();
    ChatMessagesPage.receivedMessagePinButton.should('be.visible').click();
    })

    it('should probably pin and unpin messages', () => {
        const pinnedMessage = 'Hi';
        
        ChatMessagesPage.receivedMessagePinButton.should('be.visible').click();
        ChatMessagesPage.navigateToPinButton.should('be.visible').click()
        cy.get('div.bg-bg-message-receiver p')
            .contains(pinnedMessage)
            .closest('div')
            .parent()
            .parent()
            .should('have.class', 'bg-yellow-200'); 
        ChatMessagesPage.receivedMessagePinButton.should('be.visible').click();
        ChatMessagesPage.navigateToPinButton.should('not.exist')
    })


    it('should probably forward the message', () => {
        
        const toBeForwarded = 'Forwarded Message (FOR TESTING)';
        ChatMessagesPage.messageInput.type(toBeForwarded);
    
        ChatMessagesPage.sendMessageButton.click();
    
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeForwarded);

        ChatMessagesPage.sentMessageForwardButton.click()
        ChatMessagesPage.forwardChatButton.click()
        ChatMessagesPage.chatItemButton.click()
        
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeForwarded);
    })

    it('should probably edit the message', () => {
        
        const toBeEdited = 'Edited Message (FOR TESTING)';
        const toBeSent = 'Sent message (FOR TESTING)';

        ChatMessagesPage.messageInput.type(toBeSent);
        ChatMessagesPage.sendMessageButton.click();
        
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeSent);

        ChatMessagesPage.sentMessageEditButton.click()
        ChatMessagesPage.messageInput.clear().type(toBeEdited);
        ChatMessagesPage.sendMessageButton.click();
        
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('not.contain.text', toBeSent);

        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeEdited);
    

    })
    
    // ################### FAILED  ###################
    it('should keep the sent message after loging out', () => {
        const toBeKeeped = 'test message';
        ChatMessagesPage.messageInput.type(toBeKeeped);
    
        ChatMessagesPage.sendMessageButton.click();
    
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeKeeped);
        
        cy.logoutCommand()
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeKeeped);
    })

    it('should keep the forwarded message after loging out', () => {
        
        const toBeKeepedForwarded = 'Keeped Forwarded Message (FOR TESTING)';

        ChatMessagesPage.messageInput.type(toBeKeepedForwarded);
        ChatMessagesPage.sendMessageButton.click();
        
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeKeepedForwarded);

        ChatMessagesPage.sentMessageForwardButton.click()
        ChatMessagesPage.forwardChatButton.click()
        
        cy.logoutCommand()
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        ChatMessagesPage.chatItemButton.click()
        
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeKeepedForwarded);
    })
    
    it('should probably keep the edited message after logging out', () => {
        
        const toBeEdited = 'Edited Message (FOR TESTING)';
        const toBeSent = 'Sent message (FOR TESTING)';

        ChatMessagesPage.messageInput.type(toBeSent);
        ChatMessagesPage.sendMessageButton.click();
        
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeSent);

        ChatMessagesPage.sentMessageEditButton.click()
        ChatMessagesPage.messageInput.clear().type(toBeEdited);
        ChatMessagesPage.sendMessageButton.click();
        
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('not.contain.text', toBeSent);

        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeEdited);

        cy.logoutCommand()
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        
        cy.get('div.bg-bg-message-sender p')
            .last()
            .should('contain.text', toBeEdited);

    })
})