class careersPageClass {

    elements = {
        getPageBody: () => cy.get('body.career-page'),
        getLocationBlock: () => cy.get('[id="career-our-location"]'),
        getCareersBlock: () => cy.get('[id="career-find-our-calling"]'),
        getLifeInsiderBlock: (name) => cy.get('section').contains(name),
    }
    verifyCareersPage() {
        this.elements.getPageBody().should('be.visible')
    }
    verifyLocationBlock() {
        this.elements.getLocationBlock().should('be.visible');
    }
    verifyCareersBlock() {
        this.elements.getCareersBlock().should('be.visible');
    }
    verifyLifeAtinsiderBlock(name) {
        this.elements.getLifeInsiderBlock(name).should('be.visible');
    }
}
export default careersPageClass