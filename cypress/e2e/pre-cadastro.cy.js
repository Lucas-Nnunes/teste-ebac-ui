/// <reference types="cypress"/>

describe('Funcionalidade Pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
it('Deve completar o pré cadastro com sucesso', () => {
    cy.get('#reg_email').type()
});

});