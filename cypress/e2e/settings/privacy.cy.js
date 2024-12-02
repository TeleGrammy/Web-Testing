
import PrivacyPage from '../../support/page-objects/privacyPage'

describe('privacy test', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data 
        })
    })

    beforeEach('navigate to settings page', () => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        cy.goToPrivacy()
    })


    it('navigate to privacy button and return back', () => { 

        PrivacyPage.goBackButton.click()
        cy.get('h2').contains('Settings').should('be.visible')
    })

    it('should show the correct options in dropdowns', () => {

        PrivacyPage.profilePictureVisibilityDropdown
          .should('have.value', 'EveryOne') 
          .select('Contacts')
          .should('have.value', 'Contacts') 
          .select('Nobody')
          .should('have.value', 'Nobody');

          PrivacyPage.storiesVisibilityDropdown
          .should('have.value', 'EveryOne') 
          .select('Contacts')
          .should('have.value', 'Contacts') 
          .select('Nobody')
          .should('have.value', 'Nobody');

          PrivacyPage.lastSeenVisibilityDropdown
          .should('have.value', 'EveryOne') 
          .select('Contacts')
          .should('have.value', 'Contacts') 
          .select('Nobody')
          .should('have.value', 'Nobody');

          PrivacyPage.groupAddPermissionDropdown
          .should('have.value', 'EveryOne') 
          .select('Admins')
          .should('have.value', 'Admins');
    })


    it('should display "No blocked users" when there are no blocked users', () => {
        
        PrivacyPage.blockedUsersList
          .find('[data-test-id="no-blocked-users"]')
          .should('be.visible')
          .and('contain.text', 'No blocked users');
    })

    it('should allow user to input a username to block', () => {
    
    const usernameToBlock = 'testUser123';

    PrivacyPage.blockUserInput
        .type(usernameToBlock)
        .should('have.value', usernameToBlock);
    })

    it('should toggle the Read Receipts checkbox', () => {
    
    PrivacyPage.readReceiptsCheckbox.should('be.checked');
    PrivacyPage.readReceiptsStatus.should('contain.text', 'Enabled');

    PrivacyPage.readReceiptsCheckbox.uncheck();

    PrivacyPage.readReceiptsCheckbox.should('not.be.checked');
    PrivacyPage.readReceiptsStatus.should('contain.text', 'Disabled');
    })

    it('should update option in dropdown', () => {

        PrivacyPage.profilePictureVisibilityDropdown.select('Contacts')
        PrivacyPage.goBackButton.click()
        PrivacyPage.privacyButton.click() 
        PrivacyPage.profilePictureVisibilityDropdown.should('have.value', 'Contacts')
         
    })
})
