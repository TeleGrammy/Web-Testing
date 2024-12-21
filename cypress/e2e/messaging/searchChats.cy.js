import GroupChannelPage from "../../support/page-objects/groupChannelPage"

describe('Searching in chats (users name)', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
    });


    it('should filter chats based on search query', () => {

        GroupChannelPage.chatList
          .should('exist')
          .children()
          .should('have.length.greaterThan', 0); 
    
        const searchQuery = 'user1'; 
        GroupChannelPage.searchInput
          .type(searchQuery)
          .should('have.value', searchQuery); 
    
        GroupChannelPage.chatList
        .should('exist')
        .children()
        .should('have.length', 1); 
    
        GroupChannelPage.chatList
          .children()
          .each(($userItem) => {
            const userName = $userItem.find('[data-test-id^="chat-name"]').text();
            
            if (userName !== searchQuery) {
              cy.wrap($userItem).should('not.be.visible');
            } else {
              cy.wrap($userItem).should('be.visible');
            }
          });
    
        GroupChannelPage.searchInput
          .clear()
          .should('have.value', '') 
          .get('[data-test-id="chats-list"]')
          .children()
          .should('have.length.greaterThan', 0);
      });
    
      it('should show no chats when searching for a non-existent chat', () => {
        const searchQuery = 'NonExistentChat';
        GroupChannelPage.searchInput
          .type(searchQuery)
          .should('have.value', searchQuery); 
    
          GroupChannelPage.chatList
          .should('exist')
          .children()
          .should('have.length', 0);
        
      });
   
    
  });