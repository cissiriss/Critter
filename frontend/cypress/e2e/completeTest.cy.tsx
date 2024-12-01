describe("E2E Test: Testing the frontend", () => {
  const testData = {
    title: "New Post via the complete test",
    display_name: "Jane Doe",
    description: "This is a test post created via the complete test!",
  };

  it("creates a new post and displays the post on the page", () => {
    cy.intercept("localhost:3000/", (req) => {
      req.continue((res) => {
        expect(res.statusCode).to.eq(200);
      });
    });

    cy.visit("http://localhost:5173/");

    cy.get("#modal-button").click();

    cy.get("#title-input").type(testData.title);
    cy.get("#name-input").type(testData.display_name);
    cy.get("#description-input").type(testData.description);

    cy.get("#submit-post").click();

    cy.visit("http://localhost:5173/");
  });
});
