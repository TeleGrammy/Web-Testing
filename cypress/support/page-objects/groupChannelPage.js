class GroupChannelPage {
    get createButton() { return cy.get("div[data-test-id='create-button']") }
    get newGroupButton() { return cy.get("li[data-test-id='menu-GroupList-item']")}    
    get newChannelButton() { return cy.get("li[data-test-id='menu-ChannelList-item']")}    
    get channelNameInput() { return cy.get("input[data-test-id='channel-name-input']")}    
    get descriptionInput() { return cy.get("input[data-test-id='description-input']")}    
    get userCheckbox() { return cy.get("input[data-test-id='user-checkbox-1']")}    
    get newChannelChat() { return cy.get("li[data-test-id='chat-item-5']")} 
    get chatList() { return cy.get('ul[data-test-id="chats-list"]')} 
    
}

export default new GroupChannelPage()