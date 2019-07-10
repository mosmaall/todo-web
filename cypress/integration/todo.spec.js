describe('todo app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should load with todo app title', () => {
    cy.title().should('eq', 'Todo App')
  })

  it('As a user i can add todo ', () => {
    cy.get('[data-testid=todo-input]')
      .type('Have a lunch{enter}')
      .type('Have a dinner{enter}')
    cy.get('[data-testid=todo-item]').should('have.length', 2)
  })
})
