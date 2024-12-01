import { PostForm } from "../../src/components/PostForm";

describe("<PostForm />", () => {
  it("mounts", () => {
    cy.mount(<PostForm setModalOpen={() => {}} />);
    cy.get("#name-input").type("Johan den tredje");
    cy.get("#title-input").type("Johan den tredjes dagbok");
    cy.get("#description-input").type(
      "Kära dagbok, idag fick jag inte halshugga en endaste person.. "
    );
    cy.get("#submit-post").click();
  });
});
