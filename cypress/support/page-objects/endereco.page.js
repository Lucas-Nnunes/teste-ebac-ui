class EnderecoPage{

editarEnderecoFaturamento(){

    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(1) > .title > .edit').click()
    cy.get('#billing_first_name').clear().type('Lucas')
    cy.get('#billing_last_name').clear().type('Oliveira')
    cy.get('#billing_company').clear().type('Construção do Corpo')
    cy.get('#select2-billing_country-container').click().type('Brasil').get('[aria-selected="true"]').click()
    cy.get('#select2-billing_country-container').type('Av Jacarandá')
    cy.get('#billing_address_2').clear().type('197')
    cy.get('#billing_city').clear().type('Florianópolis')
    cy.get('#select2-billing_state-container').click().type('Santa Catarina{enter}')

}

editarEnderecoEntrega(){

//elementos + ações

}

}

export default new EnderecoPage()