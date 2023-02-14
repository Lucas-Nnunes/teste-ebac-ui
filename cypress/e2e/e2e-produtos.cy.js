/// <reference types ="cypress" />


describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Red').click()
            cy.get('.input-text').clear().type(2)
            cy.get('.single_add_to_cart_button').click()
        
    });

});