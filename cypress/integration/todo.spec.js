describe('todo app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should load with todo app title', () => {
    cy.title().should('eq', 'Todo App')
  })

  it('As a user i can add todo ', () => {
    cy.get('[data-cy=todo-input]')
      .type('Have a lunch{enter}')
      .type('Have a dinner{endter')
    cy.get('[data-cy=todo-item]').should('have.length', 2)
  })
})
