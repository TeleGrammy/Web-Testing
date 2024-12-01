class PrivacyPage {
    get privacyButton() {
         return cy.get("button[data-test-id='privacy']")
    } 
    get goBackButton() {
        return cy.get("button[data-test-id='privacy-go-back']");
    }

    get privacyTitle() {
        return cy.get("h2[data-test-id='privacy-title']");
    }

    get profilePictureVisibilityDropdown() {
        return cy.get("select[data-test-id='profile-picture-visibility']");
    }

    get storiesVisibilityDropdown() {
        return cy.get("select[data-test-id='stories-visibility']");
    }

    get lastSeenVisibilityDropdown() {
        return cy.get("select[data-test-id='last-seen-visibility']");
    }

    get blockedUsersList() {
        return cy.get("div[data-test-id='blocked-users-list']");
    }

    get noBlockedUsersMessage() {
        return cy.get("p[data-test-id='no-blocked-users']");
    }

    get blockUserInput() {
        return cy.get("input[data-test-id='block-user-input']");
    }

    get readReceiptsCheckbox() {
        return cy.get("input[data-test-id='read-receipts-checkbox']");
    }

    get readReceiptsStatus() {
        return cy.get("span[data-test-id='read-receipts-status']");
    }

    get groupAddPermissionDropdown() {
        return cy.get("select[data-test-id='group-add-permission']");
    }
}

export default new PrivacyPage();
