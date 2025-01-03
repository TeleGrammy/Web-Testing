import GroupChannelPage from "../../support/page-objects/groupChannelPage"

describe('Searching when adding members', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        GroupChannelPage.createButton.should('be.visible')
        GroupChannelPage.createButton.click();
        GroupChannelPage.newChannelButton.should('exist').click()
        GroupChannelPage.createButton.should('not.exist');
        GroupChannelPage.channelNameInput.type('TEST_CHANNEL')
        GroupChannelPage.descriptionInput.type('Channel description')
        GroupChannelPage.createButton.should('be.visible').click();
    });


    it('should filter users based on search query', () => {

        GroupChannelPage.usersList
          .should('exist')
          .children()
          .should('have.length.greaterThan', 0); 
    
        const searchQuery = 'Adham Hussin'; 
        GroupChannelPage.searchInput
          .type(searchQuery)
          .should('have.value', searchQuery); 
    
        GroupChannelPage.usersList
        .should('exist')
        .children()
        .should('have.length', 3); 
    
        GroupChannelPage.usersList
          .children()
          .each(($userItem) => {
            const userName = $userItem.find('[data-test-id^="user-name"]').text();
            
            if (userName !== searchQuery) {
              cy.wrap($userItem).should('not.be.visible');
            } else {
              cy.wrap($userItem).should('be.visible');
            }
          });
    
        GroupChannelPage.searchInput
          .clear()
          .should('have.value', '') 
          .get('[data-test-id="user-list"]')
          .children()
          .should('have.length.greaterThan', 0);
      });
    
      it('should show no users when searching for a non-existent user', () => {
        const searchQuery = 'NonExistentUser';
        GroupChannelPage.searchInput
          .type(searchQuery)
          .should('have.value', searchQuery); 
    
        GroupChannelPage.noUsersMessage.should('exist').should('be.visible')
        
      });
   
    
  });