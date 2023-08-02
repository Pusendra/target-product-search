describe("Search functionality", () => {
  it("performs a successful search", () => {
    cy.visit("/");
    
    cy.get("#search-input").type("gun");
   
    cy.get("#submit-button").click();
  
    cy.get('#spinner').should("be.visible");
  
    // Test the API endpoint
    cy.request("POST", "http://localhost:3000/api/products", { input: "hello" })
    .its("body.message")
    .should("eq", "Search and submit success");
  
    cy.get('#spinner').should("not.exist");
  
    cy.get(".product").should("be.visible");
  });
  
    it("shows error when search query is empty", () => {
      cy.visit("/");
  
      cy.get("#submit-button").click();
  
      cy.get(".text-red-500").should("be.visible").and("contain", "Please type anything to search");
    });
  });
  