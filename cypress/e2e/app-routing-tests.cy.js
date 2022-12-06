import { BUTTON } from "../../src/constants/test";

describe("routing in the app works correctly", () => {
  before(function () {
    cy.visit("/");
  });

  it("opening the start page of the app", () => {
    cy.contains("МБОУ АЛГОСОШ");
  });

  it("route to page Line works", () => {
    cy.get('a[href*="/recursion"]').click();
    cy.get(BUTTON).contains("К оглавлению").click();
  });

  it("route to Fibonacci page works", () => {
    cy.get('a[href*="/fibonacci"]').click();
    cy.get(BUTTON).contains("К оглавлению").click();
  });

  it("route to page Sorting array works", () => {
    cy.get('a[href*="/sorting"]').click();
    cy.get(BUTTON).contains("К оглавлению").click();
  });

  it("route to page Stack works", () => {
    cy.get('a[href*="/stack"]').click();
    cy.get(BUTTON).contains("К оглавлению").click();
  });

  it("route to page Queue running", () => {
    cy.get('a[href*="/queue"]').click();
    cy.get(BUTTON).contains("К оглавлению").click();
  });

  it("route to page Linked list works", () => {
    cy.get('a[href*="/list"]').click();
    cy.get(BUTTON).contains("К оглавлению").click();
  });
});