class homePageClass {

    elements = {
        getPageBody: () => cy.get('.home.home-page'),
        getCookieButton: () => cy.get('[data-cli_action="accept_all"]'),
        getMenuDropdown: () => cy.get('[id="navbarDropdownMenuLink"]'),
        getSubMenuItem: () => cy.get('.dropdown-sub'),

    };
    acceptAllCookies() {
        this.elements.getCookieButton().click();
    };
    openMenuDropdown(name) {
        this.elements.getMenuDropdown().contains(name).click();
    };
    clickSubMenuItem(name) {
        this.elements.getSubMenuItem().contains(name).click();
    };
    verifyHomePage() {
        this.elements.getPageBody().should("be.visible");
    }

}
export default homePageClass;