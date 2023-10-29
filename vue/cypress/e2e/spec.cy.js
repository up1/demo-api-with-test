describe('template spec', () => {
  it('passes', () => {

    cy.intercept({
      method: 'GET',
      url: '/complete/search?*'
    })

    cy.visit('http://google.com')
    cy.get('#APjFqb').type('cypress')
    cy.get('#APjFqb').type('{enter}')
  })
})