describe("te app launched successfully", function () {
  it("the app is available at localhost:3000", function () {
    cy.visit("/");
  });
});