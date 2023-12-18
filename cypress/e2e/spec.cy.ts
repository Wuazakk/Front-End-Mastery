describe("Check Home Screen", () => {
  it("Checks Home page", () => {
    cy.visit("/");
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("#login").click();
  });
});

describe("Checks we are in login page and form input", () => {
  it("Visits login page from homepage", () => {
    cy.visit("/");
    cy.get("#login").click();
  });
  it("Checks we are within login page", () => {
    cy.visit("/login");
    cy.url().should("eq", "http://localhost:3000/login");
  });
});

describe("checks form exists and form structure/inputs", () => {
  it("Checks form exists", () => {
    cy.visit("/login");
    cy.get("#login-form").should("exist");
  });

  it("Checks form structure", () => {
    cy.visit("/login");
    cy.get("#login-form").should("exist");
    // Fields input
    cy.get("#email").should("have.attr", "type", "email").type("br@gmail.com");
    cy.get("#password").type("12345");
    cy.get("[type='checkbox']").check();
    cy.get(".btn").contains(/login/i).click();
    // cy.intercept("POST", "/api/login", (req) => {});
  });
});
