// <reference types="Cypress" />

describe("holiday search", () => {
  it("should click submit button", () => {
    cy.visit("http://localhost:3000");
    cy.get("#search-box").type("Australia");
    cy.contains("Submit").click();
    cy.get("#holidays_contain").should("have.length", 1);
  });
  it("should filter holidays with national type", () => {
    cy.visit("http://localhost:3000");
    cy.get("#search-box").type("Australia");
    cy.contains("Submit").click();
    cy.get("#national").check("national");
    cy.get("#holidays_contain").should("have.length", 1);
  });
  it("should have error when no any countries exist", () => {
    cy.visit("http://localhost:3000");
    cy.get("#search-box").type("Australi");
    cy.contains("Submit").click();
    cy.get("#error_text").contains("Search Error, Country not found");
  });
});
