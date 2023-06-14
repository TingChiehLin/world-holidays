// <reference types="Cypress" />

describe("template spec", () => {
  it("should render the home (main) page", () => {
    cy.visit("http://localhost:3000");
    cy.get(".content-wrap");
  });
  it("should display the page title", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains("Holidays across the world");
  });
});
