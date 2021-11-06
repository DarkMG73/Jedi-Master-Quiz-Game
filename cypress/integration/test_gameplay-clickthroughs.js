import { quoteList } from "../../src/store/quotes";
import { randomQuestionsList } from "../../src/store/random-questions";
/* eslint-disable */
describe("Test GameplayClicks and Pics", () => {
  it("Clicks on answers and the Next Question button and then asserts", () => {
    cy.visit("http://localhost:3000/");
    Cypress.on("window:before:load", (win) => {
      cy.spy(win.console, "error");
      cy.spy(win.console, "warn");
    });
    cy.contains("Begin, We Shall →")
      .parent()
      .scrollIntoView()
      .click({ force: true });
    // Run for each question
    const numberOfQuestions =
      quoteList().allFetchedQuotesIds.length +
      randomQuestionsList().allFetchedQuestionIds.length;
    console.log("numberOfQuestions: ", numberOfQuestions);
    for (let cntr = 1; cntr < numberOfQuestions; cntr++) {
      cy.get(".Options_options-container__3pnBB > div:first-child").click();

      // Test Option One for picture use (not default pic)
      cy.get(
        '.Options_options-container__3pnBB > div:first-child [class^="Options_option-name"]'
      ).then((nameDiv) => {
        console.log("nameDiv: ", nameDiv);
        const nameText = nameDiv.text();
        console.log("nameText: ", nameText);
        if (
          !nameText.includes("Them") &&
          !nameText.includes("them") &&
          !nameText.includes("Battle") &&
          !nameText.includes("battle")
        ) {
          cy.get(
            '.Options_options-container__3pnBB > div:first-child >div[class^="Options_option"]'
          )
            .wait(500)
            .invoke("css", "background-image")
            .then((imageUrl) => {
              console.log("imageUrl: ", imageUrl);
              expect(imageUrl).not.to.contains("default");
            });
        }
      });

      // Test Option Two for picture use (not default pic)
      cy.get(
        '.Options_options-container__3pnBB > div:nth-child(2) [class^="Options_option-name"]'
      ).then((nameDiv) => {
        console.log("nameDiv: ", nameDiv);
        const nameText = nameDiv.text();
        console.log("nameText: ", nameText);
        if (
          !nameText.includes("Them") &&
          !nameText.includes("them") &&
          !nameText.includes("Battle") &&
          !nameText.includes("battle")
        ) {
          cy.get(
            '.Options_options-container__3pnBB > div:nth-child(2)  >div[class^="Options_option"]'
          )
            .wait(500)
            .invoke("css", "background-image")
            .then((imageUrl) => {
              console.log("imageUrl: ", imageUrl);
              expect(imageUrl).not.to.contains("default");
            });
        }
      });

      // Test Option One for picture use (not default pic)
      cy.get(
        '.Options_options-container__3pnBB > div:nth-child(3) [class^="Options_option-name"]'
      ).then((nameDiv) => {
        console.log("nameDiv: ", nameDiv);
        const nameText = nameDiv.text();
        console.log("nameText: ", nameText);
        if (
          !nameText.includes("Them") &&
          !nameText.includes("them") &&
          !nameText.includes("Battle") &&
          !nameText.includes("battle")
        ) {
          cy.get(
            '.Options_options-container__3pnBB > div:nth-child(3)  >div[class^="Options_option"]'
          )
            .wait(500)
            .invoke("css", "background-image")
            .then((imageUrl) => {
              console.log("imageUrl: ", imageUrl);
              expect(imageUrl).not.to.contains("default");
            });
        }
      });

      cy.get(".Question_button__2kqkN").click();
    }
  });
});
