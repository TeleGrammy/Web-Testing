class ChatMessagesPage {
    get chatMessagesImage() {
        return cy.get("img[data-test-id='chat-image']");
    }
    get openSearchButton() {
        return cy.get("svg[data-test-id='open-search-in-chat-button']");
    }
    get searchInChatInput() {
        return cy.get("input[data-test-id='search-in-chat-input']");
    }
    

    get sentMessageForwardButton() {
        return cy.get("button[data-test-id='2-message-forward-button']");
    }
    get exitForwardButton() {
        return cy.get("button[data-test-id='forward-menu-exit-button']");
    }
    get forwardChatButton() {
        return cy.get("div[data-test-id='3-forward-to-div']");
    }
    get chatItemButton() {
        return cy.get("li[data-test-id='chat-item-3']");
    }
    get channelItemButton() {
        return cy.get("li[data-test-id='chat-item-4']");
    }
    get sentMessageEditButton() {
        return cy.get("button[data-test-id='2-message-edit-button']");
    }
    get sentMessageDeleteButton() {
        return cy.get("button[data-test-id='2-message-delete-button']");
    }
    get sentMessagePinButton() {
        return cy.get("button[data-test-id='0-message-pin-unpin-button']");
    }
    get sentMessageText() {
        return cy.get("div.bg-bg-message-sender p");  
    }
    get sentMessageTime() {
        return cy.get("div.bg-bg-message-sender span"); 
    }

    get receivedMessageText() {
        return cy.get("div.bg-bg-message-receiver p");  
    }
    get receivedMessageTime() {
        return cy.get("div.bg-bg-message-receiver span");  
    }
    get receivedMessageForwardButton() {
        return cy.get("button[data-test-id='1-recieved-forward-button']");
    }
    get receivedMessageReplyButton() {
        return cy.get("button[data-test-id='1-recieved-reply-button']");
    }
    get cancelReplyButton() {
        return cy.get("button[data-test-id='cancel-reply-button']");
    }
    get receivedMessagePinButton() {
        return cy.get("button[data-test-id='1-recieved-pin-unpin-button']");
    }
    get navigateToPinButton() {
        return cy.get("h2[data-test-id='navigate-to-pinned-h2']");
    }

    get emojisButton() {
        return cy.get("button[data-test-id='emojis-button']");
    }
    get emojiButton() {
        return cy.get("button[data-test-id='emoji-button']");
    }
    get stickerButton() {
        return cy.get("button[data-test-id='sticker-active-tab-button']");
    }
    get gifButton() {
        return cy.get("button[data-test-id='gif-active-tab-button']");
    }
    get messageInput() {
        return cy.get("input[data-test-id='message-input']");
    }
    
    get attachmentsButton() {
        return cy.get("button[data-test-id='toggle-menu-button']");
    }
    get attachImageButton() {
        return cy.get("button[data-test-id='attach-image-button']");
    }
    get attachVideoButton() {
        return cy.get("button[data-test-id='attach-video-button']");
    }
    get attachDocumentButton() {
        return cy.get("button[data-test-id='attach-document-button']");
    }
    get attachImageInput() {
        return cy.get("input[data-test-id='attach-image-input']");
    }
    get attachVideoInput() {
        return cy.get("input[data-test-id='attach-video-input']");
    }
    get attachDocumentInput() {
        return cy.get("input[data-test-id='attach-document-input']");
    }
    get voiceNoteButton() {
        return cy.get("button[data-test-id='voice-note-button']");
    }
    get sendMessageButton() {
        return cy.get("button[data-test-id='send-message-button']");
    }

    // For normal chat 
    get sentImage() {
        return cy.get("img[data-test-id='2-message-image']");
    }
    get sentDocument() {
        return cy.get("a[data-test-id='2-document-link']");
    }

    // For channel chat 
    get channelSentImage() {
        return cy.get("img[data-test-id='0-message-image']");
    }
    get channelSentDocument() {
        return cy.get("a[data-test-id='0-document-link']");
    }

    get sentVideo() {
        return cy.get("video[class='h-auto max-w-full rounded-lg]");
    }

    get sentVoiceNote() {
        return cy.get("div[data-test-id='voice-note-player']");
    }

}

export default new ChatMessagesPage();
