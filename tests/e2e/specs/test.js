describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("input data", () => {
    cy.get("#newTodoInput")
      .type("Walk the dog")
      .should("have.value", "Walk the dog");
  });
  it("adds a new todo", () => {
    cy.get(".addTodo").click();
    cy.get("#newTodoInput").type("Go to the gym").type("{enter}");
  });
  it("filter todos, checks checkboxes", () => {
    cy.get("#newTodoInput").type("Water flowers").type("{enter}");
    cy.get("#newTodoInput").type("Do homework").type("{enter}");
    cy.get("#newTodoInput").type("Write some code").type("{enter}");
    cy.get("#checkboxLabel").first().click();
    cy.get("label > :checkbox").first().check();
    cy.get("label > :radio").should("have.length", 3);
    cy.get("label").eq(1).click();
    cy.wait(2000);
    cy.get("label").eq(2).click();
  });
});

