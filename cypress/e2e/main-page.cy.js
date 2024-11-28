/// <reference types="cypress" />

describe('Main page e2e testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Displays the header of main page', () => {
    cy.get('[data-cy="ilia-title"]').should('have.text', 'Ília get Pokémons')
  })

  it('Displays the 10 first pokemon cards', () => {
    cy.get('[data-cy="pokemon-card"]').should('have.length', 10)
  })

  it('The cards should contains proper fields', () => {
    cy.get('[data-cy="pokemon-card"]').each((card) => {
      cy.wrap(card).should('contains.text', "Name:")
      cy.wrap(card).should('contains.text', "ID:")
      cy.wrap(card).should('contains.text', "Type:")
    })
  })

  it('The card button should open the pokemon page', () => {
    cy.get('[data-cy="card-button"]').first().click()
    cy.url().should('include', 'http://localhost:3000/pokemon/')
  })

})
