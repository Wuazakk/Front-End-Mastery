describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("Check Login", () => {
  it("Checks login page", () => {
    cy.visit("http://localhost:3000/");
  });
});
