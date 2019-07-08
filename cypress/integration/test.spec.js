describe('todo app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should load with todo app title', () => {
    cy.title().should('eq', 'Todo App')
  })
})
