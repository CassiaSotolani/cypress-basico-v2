Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  const longText = 'teste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testandoteste testando'

    cy.get('#firstName')
      .type('Cassia')
    cy.get('#lastName')
      .type('Sottolano')
    cy.get('#email')
      .type('ca.sotolani@gmail.com')
    cy.get('#open-text-area')
      .type(longText, { delay: 0 })
    cy.get('button[type="submit"]')
      .click()
})