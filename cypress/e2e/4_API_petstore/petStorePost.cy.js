describe('POST /pet API', () => {
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

  it('Return 200 when a new pet is successfully created', function () {
    petId = this.petData.pet.id;
    cy.request('POST', this.petData.url, this.petData.pet)
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });
  it('Validate the name of the pet in response', function () {
    petId = this.petData.pet.id;
    cy.request('POST', this.petData.url, this.petData.pet)
      .then((response) => {
        expect(response.body.name).to.not.equal(this.petData.petNameInvalid);
      });
  });
});