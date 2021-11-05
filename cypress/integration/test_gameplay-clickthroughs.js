import { quoteList } from "../store/quotes";

describe("Test GameplayClicks and Pics", () => {
  it("Clicks on answers and the Next Question button and then asserts", () => {
    cy.visit("http://localhost:3000/");
    Cypress.on("window:before:load", (win) => {
      cy.spy(win.console, "error");
      cy.spy(win.console, "warn");
    });
    cy.contains("Begin, We Shall →").parent().scrollIntoView().click();
    // Run for each question
    const numberOfQuestions = quoteList.allFetchedQuotesIds.length;
    for (let cntr = 1; cntr <= numberOfQuestions; cntr++) {
      cy.get(".Options_options-container__3pnBB > div:first-child").click();
      cy.get(".Question_button__2kqkN").click();
    }
  });
});
