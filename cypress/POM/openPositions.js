class openPositionsPageClass {

    elements = {
        getButtonByName: (name) => cy.get('.btn').contains(name),
        getDropdown: (dropdown) => cy.get('label').contains(dropdown),
        getListItem: () => cy.get('.position-list-item'),
        getDepartment: () => cy.get('.position-department'),
        getLocation: () => cy.get('.position-location')

    }
    selectAllQaJobs(name) {
        this.elements.getButtonByName(name).click({ force: true });
    }
    selectDropdownItem(dropdown, item) {
        this.elements.getDropdown(dropdown).siblings('select').wait(2000).select(item, { force: true }, { timeout: 10000 })
    }
    redirectToPage(button) {
        this.elements.getButtonByName(button).first().invoke('removeAttr', 'target').click({ force: true });
    }
    
}
export default openPositionsPageClass