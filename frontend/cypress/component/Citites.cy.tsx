import Cities from "../../src/components/Cities";

describe("<Cities />", () => {
  it("renders two cities", () => {
    cy.intercept(
      {
        method: "GET",
        url: "http://localhost:3000/post",
      },
      {
        body: [
          {
            display_name: "Hedda",
            title: "Målning av Bollnäs",
            description:
              "Bollnäs i solnedgången i augusti. Målat med akryl på a",
          },
          {
            id: "4787e794-b3ac-4a63-bba0-03203f78e553",
            name: "Göteborg",
            population: 549839,
          },
        ],
      }
    ).as("cities");

    cy.mount(<Cities />);

    cy.wait("@cities");

    cy.get("dt").should("contain", "Stockholm");
    cy.get("dd").should("contain", "1372565");

    cy.get("dt").should("contain", "Göteborg");
    cy.get("dd").should("contain", "549839");
  });
});
