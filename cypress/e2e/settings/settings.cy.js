
import SettingsPage from '../../support/page-objects/settingsPage'

describe('settings test', () => {

    before('load fixture', () => {
        cy.fixture("data").then((data) => {
            globalThis.data = data
            
        })
    })

    beforeEach('navigate to edit button', () => {
        cy.loginCommand(data.normalLogin.validEmail, data.normalLogin.validPassword)
        cy.goToSettings()
    })


    it('navigate to edit/privacy button and return back', () => { 
        
        SettingsPage.editButton.click()
        cy.get('h2').contains('Edit Profile').should('be.visible')
        SettingsPage.goBackButton.click()
        cy.get('h2').contains('Settings').should('be.visible')


        SettingsPage.privacyButton.click()
        cy.get('h2').contains('Privacy Settings').should('be.visible')
        SettingsPage.backPrivacyButton.click()
        cy.get('h2').contains('Settings').should('be.visible')

    })


    it('input fields should not be empty', () => { 
        
        SettingsPage.editButton.click()
        SettingsPage.nameInput.should('not.have.value', '')
        SettingsPage.userNameInput.should('not.have.value', '')
        SettingsPage.emailInput.should('not.have.value', '')
        SettingsPage.phoneInput.should('not.have.value', '')
    })

    it('edit user name, name, and bio', () => { 
        
        SettingsPage.editButton.click()
        SettingsPage.nameInput.clear().type(data.editInputs.newName)
        SettingsPage.userNameInput.clear().type(data.editInputs.newUserName)
        SettingsPage.bioInput.clear().type(data.editInputs.newBio)
        SettingsPage.saveButton.click()
    })

    it('check if the values were edited', () => { 
        
        cy.contains('p', data.editInputs.newName).should('exist')
        cy.contains('p', data.editInputs.newUserName).should('exist')
        cy.contains('p', data.editInputs.newBio).should('exist')
    })
    
    it('edit with an invalid email', () => { 
        
        SettingsPage.editButton.click()
        SettingsPage.emailInput.clear().type(data.editInputs.newInvalidEmail)
        SettingsPage.saveButton.click()
        SettingsPage.emailErrorMessage.should('be.visible').should('have.text', 'Invalid email address.')
        
    })

    it('assert email not changed', () => { 
        
        cy.contains('p', data.editInputs.newInvalidEmail).should('not.exist')
    })

    it('edit with a valid email', () => { 
        
        SettingsPage.editButton.click()
        SettingsPage.emailInput.clear().type(data.editInputs.newValidEmail)
        SettingsPage.saveButton.click()
        cy.get('h2').contains('Settings').should('be.visible')
    })

    it('assert email changed', () => { 
        
        cy.contains('p', data.editInputs.newValidEmail).should('exist')
    })
   })
