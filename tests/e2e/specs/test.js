describe("My First Test", () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  })
  it('shows header text', () => {
    cy.get('div').contains('to do list');
  })
  it("input data", () => {
    cy.get("[newTodo-input]")
      .type("Walk the dog")
      .should("have.value", "Walk the dog");
  });
  it("checks and unchecks checkboxes", () => {
    cy.get("[newTodo-input]").type("{enter}");
    cy.get("#checkboxLabel").click();
    cy.get("label > :checkbox ").check();
    cy.wait(3000);
    cy.get("#checkboxLabel").click();
    cy.get("label > :checkbox").uncheck();
  });
  it("adds a new todo", () => {
    cy.get(".addTodo").click();
    cy.get("[newTodo-input]").type("Go to the gym").type("{enter}");
  });
  it("filter todos", () => {
    cy.get("[newTodo-input]").type("Water flowers").type("{enter}");
    cy.get("[newTodo-input]").type("Do homework").type("{enter}");
    cy.get("[newTodo-input]").type("Write some code").type("{enter}");
    cy.get("#checkboxLabel").first().click();
    cy.get("label > :checkbox").first().check();
    cy.get("label > :radio").should("have.length", 3);
    cy.get("label").eq(1).click();
    cy.wait(1000);
    cy.get("label").eq(2).click();
  });

