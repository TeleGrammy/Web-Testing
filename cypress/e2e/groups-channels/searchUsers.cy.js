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
          .should('have.length.greaterThan', 0); // Make sure there are multiple users
    
        // Type into the search field to filter users
        const searchQuery = 'Adham Hussin'; // Name to search for
        cy.get('[data-test-id="search-input"]')
          .type(searchQuery)
          .should('have.value', searchQuery); // Ensure the input field contains the query
    
        GroupChannelPage.usersList
        .should('exist')
        .children()
        .should('have.length', 3); // Make sure there are multiple users
    
        // Verify that only the user matching the search query is displayed
        GroupChannelPage.usersList
          .children()
          .each(($userItem) => {
            const userName = $userItem.find('[data-test-id^="user-name"]').text();
            
            // If the user's name does not match the search query, it should not be visible
            if (userName !== searchQuery) {
              cy.wrap($userItem).should('not.be.visible');
            } else {
              // The user matching the query should be visible
              cy.wrap($userItem).should('be.visible');
            }
          });
    
        // Optionally: If the search query is clear, all users should be visible again
        GroupChannelPage.searchInput
          .clear()
          .should('have.value', '') // Ensure the search input is cleared
          .get('[data-test-id="user-list"]')
          .children()
          .should('have.length.greaterThan', 0); // All users should be visible again
      });
    
      it('should show no users when searching for a non-existent user', () => {
        // Search for a non-existent user
        const searchQuery = 'NonExistentUser';
        GroupChannelPage.searchInput
          .type(searchQuery)
          .should('have.value', searchQuery); // Ensure the input field contains the query
    
        GroupChannelPage.noUsersMessage.should('exist').should('be.visible')
        
      });
   
    
  });