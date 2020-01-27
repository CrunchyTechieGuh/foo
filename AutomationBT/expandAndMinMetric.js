describe('Hover, expand, and minimize metric', function() {
  it('Navigate and log in to Grow.com Dashboard', function() {
    cy.visit('https://app.gogrow.com/dashboard')

    cy.get('input.email')
      .type('crunchytechieguh@gmail.com')
    cy.get('input.password')
 })
})
