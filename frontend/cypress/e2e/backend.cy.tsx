describe("Backend test, POST-request", () => {
  const testData = {
    title: "A New Post via the backend-test",
    display_name: "Jane Doe",
    description: "This is a test post created via the backend-test!",
  };
  it("passes", () => {
    cy.request("POST", "http://localhost:3000/post/", testData).then(
      (response) => {
        expect(response.status).to.eq(201);
        expect(response.body[0]).to.be.an("object");
        expect(response.body[0].title).to.eq(testData.title);
        expect(response.body[0].description).to.eq(testData.description);
        expect(response.body[0].user_id).to.be.greaterThan(0);
      }
    );
  });
});

describe("Backend test, GET-request", () => {
  it("passes", () => {
    cy.request("GET", "http://localhost:3000/").then((response) => {
      expect(response.body).to.be.an("array");
      expect(response.body[0]).to.be.an("object");
      const post = response.body[0];
      expect(post.title).to.be.a("string");
      expect(post.description).to.be.a("string");
      expect(post.display_name).to.be.a("string");
    });
  });
});
