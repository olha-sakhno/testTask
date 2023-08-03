/// <reference types="cypress" />

import homePageClass from "../../POM/homePage.js";
import careersPageClass from "../../POM/careers.js";
import openPositionsPageClass from "../../POM/openPositions.js";

const homePage = new homePageClass();
const careersPage = new careersPageClass();
const openPositionsPage = new openPositionsPageClass();

describe("Application scenario", () => {
  before(function () {
    cy.fixture('insider')
      .then((insider) => {
        this.insider = insider;
      });
  });
  it("task #3", function () {

    cy.visit(this.insider.urlHomePage);
    homePage.verifyHomePage();
    homePage.acceptAllCookies();

    homePage.openMenuDropdown(this.insider.menuCompany);
    homePage.clickSubMenuItem(this.insider.menuCareers);
    careersPage.verifyCareersPage();
    careersPage.verifyLocationBlock();
    careersPage.verifyCareersBlock();
    careersPage.verifyLifeAtinsiderBlock(this.insider.lifeAtInsider)

    cy.visit(this.insider.urlQA)
    openPositionsPage.selectAllQaJobs(this.insider.AllQaJobs)
    cy.wait(2000)
    openPositionsPage.selectDropdownItem(this.insider.filterLocation, this.insider.itemLocationIstanbul)
    cy.wait(2000)

    openPositionsPage.elements.getListItem()
      .each(($el) => {
        cy.get($el)
          .within(() => {
            openPositionsPage.elements.getDepartment()
              .invoke('text')
              .then((txt) => {
                expect(txt).to.be.eq(this.insider.itemDepartQa);
              })
            openPositionsPage.elements.getLocation()
              .invoke('text')
              .then((txt) => {
                expect(txt).to.be.eq(this.insider.itemLocationIstanbul);
              })
          })
      })

    openPositionsPage.redirectToPage(this.insider.viewRole);
    cy.origin(this.insider.originLeverApp, () => {
      cy.url()
        .should('contain', this.insider.urlLeverApp);
    })
  })
})