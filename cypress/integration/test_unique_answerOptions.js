describe("Test Unique answerOptions", () => {
  it("Moves through questions then asserts that all three texts optins should be unique.", () => {
    cy.visit("http://localhost:3000/");
    Cypress.on("window:before:load", (win) => {
      cy.spy(win.console, "error");
      cy.spy(win.console, "warn");
    });
    cy.contains("Begin, We Shall →").parent().scrollIntoView().click();
    // Run for each question
    for (let cntr = 1; cntr <= 194; cntr++) {
      cy.get(".Options_options-container__3pnBB > div:first-child").then(
        ($optOne) => {
          const optOneText = $optOne.text();
          cy.get(".Options_options-container__3pnBB > div:nth-child(2)").then(
            ($optTwo) => {
              const optTwoText = $optTwo.text();
              expect(optOneText).not.to.eq(optTwoText);

              cy.get(
                ".Options_options-container__3pnBB > div:nth-child(3)"
              ).then(($optThree) => {
                expect($optThree.text()).not.to.eq(optOneText);
                expect($optThree.text()).not.to.eq(optTwoText);
                cy.get(
                  ".Options_options-container__3pnBB > div:first-child"
                ).click();
                cy.get(".Question_button__2kqkN").click();
              });
            }
          );
        }
      );
    }

    // Should be on a new URL which includes '/commands/actions'
    // cy.url().should("include", "/commands/actions");

    // // Get an input, type into it and verify that the value has been updated
    // cy.get(".action-email")
    //   .type("fake@email.com")
    //   .should("have.value", "fake@email.com");
  });
});
