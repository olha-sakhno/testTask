describe('POST /pet API', () => {
  let petId;
  beforeEach(function () {
    cy.fixture('api').then((petData) => {
      this.petData = petData;
    });
  })
  afterEach(function () {
    cy.deletePet(petId);
  });

  it('Return 200 when a new pet is successfully found by id', function () {
    cy.createPet(this.petData.pet)
    petId = this.petData.pet.id;
    cy.request('GET', `${this.petData.url}/${petId}`).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
  it('Return 404 when no pet found by id', function () {
    cy.createPet(this.petData.pet)
    petId = this.petData.pet.id;
    cy.request({
      method: 'GET',
      url: `${this.petData.url}/${this.petData.idInvalid}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});