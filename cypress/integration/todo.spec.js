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

  it('As a user i can remove todo', () => {
    cy.get('[data-testid=todo-input]').type('Have a lunch{enter}')
    cy.get('[data-testid=remove-btn]')
      .first()
      .click()
    cy.get('[data-testid=todo-item]').should('have.length', 0)
  })

  it('As a user i can change todo status', () => {
    cy.get('[data-testid=todo-input]').type('Have a lunch{enter}')
    cy.get('[data-testid=checked-btn]')
      .check()
      .should('be.checked')
    cy.get('[data-testid=todo-item').contains('Done')
    cy.get('[data-testid=checked-btn]').uncheck()
    cy.get('[data-testid=todo-item').contains('In Progress')
  })

  it('As a user i can view only finished todo', () => {
    cy.get('[data-testid=todo-input]').type('Have a lunch{enter}')
    cy.get('[data-testid=todo-input]').type('Have a dinner{enter}')
    cy.get('[data-testid=checked-btn]')
      .first()
      .check()
    cy.get('[data-testid=done-menu]').click()
    cy.get('[data-testid=todo-item]')
      .should('have.length', 1)
      .contains('Have a lunch')
  })

  it('As a user i can see todo progress', () => {
    cy.get('[data-testid=progress-bar]').should('have.attr', 'width', '0%')
    cy.get('[data-testid=todo-input]').type('Have a lunch{enter}')
    cy.get('[data-testid=todo-input]').type('Have a dinner{enter}')
    cy.get('[data-testid=checked-btn]')
      .first()
      .check()
    cy.get('[data-testid=progress-bar]').should('have.attr', 'width', '50%')
  })

  it('As a user i can edit todo title', () => {
    cy.get('[data-testid=todo-input]').type('Have a lunch{enter}')
    cy.get('[data-testid=todo-item] p')
      .first()
      .click()
    cy.get('[data-testid=edit-input]').clear()
    cy.get('[data-testid=edit-input]').type('Have a wife{enter}')
    cy.get('[data-testid=todo-item] p')
      .first()
      .contains('Have a wife')
  })
})
