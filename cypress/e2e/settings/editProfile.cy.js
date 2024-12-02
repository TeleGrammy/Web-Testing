
import EditProfilePage from '../../support/page-objects/editProfilePage'

describe('edit profile test', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
            
        })
    })

    beforeEach('navigate to settings page', () => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        cy.goToSettings()
    })


    it('navigate to edit button and return back', () => { 
        
        EditProfilePage.editButton.click()
        cy.get('h2').contains('Edit Profile').should('be.visible')
        EditProfilePage.goBackButton.click()
        cy.get('h2').contains('Settings').should('be.visible')


        // EditProfilePage.privacyButton.click()
        // cy.get('h2').contains('Privacy Settings').should('be.visible')
        // EditProfilePage.backPrivacyButton.click()
        // cy.get('h2').contains('Settings').should('be.visible')

    })


    it('input fields should not be empty', () => { 
        
        EditProfilePage.editButton.click()
        EditProfilePage.nameInput.should('not.have.value', '')
        EditProfilePage.userNameInput.should('not.have.value', '')
        EditProfilePage.emailInput.should('not.have.value', '')
        EditProfilePage.phoneInput.should('not.have.value', '')
    })

    it('edit user name, name, and bio', () => { 
        
        EditProfilePage.editButton.click()
        EditProfilePage.nameInput.clear().type(data.editInputs.newName)
        EditProfilePage.userNameInput.clear().type(data.editInputs.newUserName)
        EditProfilePage.bioInput.clear().type(data.editInputs.newBio)
        EditProfilePage.saveButton.click()
    })

    it('check if the values were edited', () => { 
        
        cy.contains('p', data.editInputs.newName).should('exist')
        cy.contains('p', data.editInputs.newUserName).should('exist')
        cy.contains('p', data.editInputs.newBio).should('exist')
    })
    
    it('edit with an invalid email', () => { 
        
        EditProfilePage.editButton.click()
        EditProfilePage.emailInput.clear().type(data.editInputs.newInvalidEmail)
        EditProfilePage.saveButton.click()
        EditProfilePage.emailErrorMessage.should('be.visible').should('have.text', 'Please enter a valid email address.')
        
    })

    it('assert email not changed', () => { 
        
        cy.contains('p', data.editInputs.newInvalidEmail).should('not.exist')
    })

    it('edit with a valid email', () => { 
        
        EditProfilePage.editButton.click()
        EditProfilePage.emailInput.clear().type(data.editInputs.newValidEmail)
        EditProfilePage.saveButton.click()
        cy.get('h2').contains('Settings').should('be.visible')
    })

    it('assert email changed', () => { 
        
        cy.contains('p', data.editInputs.newValidEmail).should('exist')
    })
   })
