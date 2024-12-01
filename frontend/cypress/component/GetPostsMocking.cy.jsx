import GetPosts from "../../src/components/GetPosts";

describe("GetPostsMocking", () => {
  it("Filles in the form with mocked data and submits successfully", () => {
    cy.fixture("post").then((json) => {
      console.log(json);
      cy.intercept("GET", "http://localhost:3000/", json).as("posts");
    });

    cy.mount(<GetPosts />);
    cy.wait("@posts");

    cy.get("#post-title").should("have.text", "Min kröning");
    cy.get("#post-name").should("have.text", "By: Elisabeth den första");
    cy.get("#post-description").should(
      "have.text",
      "Alla utom min kusin Mary kunde komma.."
    );
  });
});
