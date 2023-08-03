describe('UPDATE /pet API', () => {
  let petId;
  beforeEach(function () {
    cy.fixture('api')
      .then((petData) => {
        this.petData = petData;
      });
  })
  afterEach(function () {
    cy.deletePet(petId);
  });

  it('Return 200 when a new pet is successfully updated', function () {
    cy.createPet(this.petData.pet)
    petId = this.petData.pet.id;
    cy.request('PUT', this.petData.url, this.petData.petValid)
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });
  it('Return 500 when a new pet is invalid', function () {
    petId = this.petData.pet.id;
    cy.createPet(this.petData.pet)
    cy.request({
      method: 'PUT',
      url: this.petData.url,
      body: this.petData.petInvalid,
      failOnStatusCode: false,
    })
      .then((response) => {
        expect(response.status).to.equal(500);
      });
  });
});