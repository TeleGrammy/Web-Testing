describe('Search functionality in Add Members page', () => {
    beforeEach(() => {
      // Visit the page where search functionality is available
      cy.visit('/path-to-add-members-page'); // Adjust with the actual URL or path
    });
  
    it('should filter users based on search query', () => {
      // Ensure the page is loaded and users are listed
      cy.get('[data-test-id="user-list"]')
        .should('exist')
        .children()
        .should('have.length.greaterThan', 0); // Make sure there are multiple users
  
      // Type into the search field to filter users
      const searchQuery = 'Adham Abd Elazeem'; // Name to search for
      cy.get('[data-test-id="search-input"]')
        .type(searchQuery)
        .should('have.value', searchQuery); // Ensure the input field contains the query
  
      // Verify that only the user matching the search query is displayed
      cy.get('[data-test-id="user-list"]')
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
      cy.get('[data-test-id="search-input"]')
        .clear()
        .should('have.value', '') // Ensure the search input is cleared
        .get('[data-test-id="user-list"]')
        .children()
        .should('have.length.greaterThan', 0); // All users should be visible again
    });
  
    it('should show no users when searching for a non-existent user', () => {
      // Search for a non-existent user
      const searchQuery = 'NonExistentUser';
      cy.get('[data-test-id="search-input"]')
        .type(searchQuery)
        .should('have.value', searchQuery); // Ensure the input field contains the query
  
      // Verify that no users are displayed
      cy.get('[data-test-id="user-list"]')
        .children()
        .should('have.length', 0); // No users should match the search
    });
  });
  