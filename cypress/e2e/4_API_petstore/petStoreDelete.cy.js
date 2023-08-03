describe('POST /pet API', () => {
  let petId;
  beforeEach(function () {
    cy.fixture('api')
      .then((petData) => {
        this.petData = petData;
      });
  })

  it('Return 200 when a new pet is successfully deleted', function () {
    cy.createPet(this.petData.pet)
    cy.request('DELETE', `${this.petData.url}/${this.petData.pet.id}`)
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });
  it('Return 404 when no pet deleted by id', function () {
    cy.createPet(this.petData.pet)
    cy.request({
      method: 'DELETE',
      url: `${this.petData.url}/${this.petData.idInvalid}`,
      failOnStatusCode: false,
    })
      .then((response) => {
        expect(response.status).to.equal(404);
      });
  });
});