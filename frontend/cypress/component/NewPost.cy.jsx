import NewPost from "../../src/components/NewPost";

describe("<NewPost />", () => {
  it("mounts the component, and shows the modal when the button is clicked", () => {
    cy.mount(<NewPost />);
    cy.get("#modal-button").click();
    cy.get("#my_modal_5").should("be.visible");
    cy.get("#close-modal-button").click();
    cy.get("#my_modal_5").should("not.be.visible");
  });
});
