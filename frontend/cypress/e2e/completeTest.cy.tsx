describe("E2E Test: POST and GET Posts", () => {
  const testData = {
    title: "New Post2",
    display_name: "Jane Doe",
    description: "This is a test post created via POST!",
  };

  const length = 0;

  it("creates a new post via POST and retrieves it via GET", () => {
    cy.intercept("/", (req) => {
      req.continue((res) => {
        if (res.body.status === "failed") {
          // sends a fixture body instead of the existing 'res.body'
          res.send({ fixture: "success.json" });
        }
      });
    });

    cy.visit("http://localhost:5174/");
    cy.request("GET", "/localhost:3000/");
    cy.get("#modal-button").click();

    cy.get("#title-input").type(testData.title);
    cy.get("#name-input").type(testData.display_name);
    cy.get("#description-input").type(testData.description);

    cy.get("#submit-post").click();

    cy.request("POST", "http://localhost:3000/post/", testData);

    cy.visit("http://localhost:5174/");

    cy.get("#post").should("have.length", length + 1);
  });
});
