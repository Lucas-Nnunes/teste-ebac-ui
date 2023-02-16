/// <reference types ="cypress"/>

import EnderecoPage from "../support/page-objects/endereco.page";

describe('Funcionalidade Endereços - Faturamento e entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture("perfil").then(dados => {
            cy.login(dados.usuario , dados.senha)
        })
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
       EnderecoPage.editarEnderecoFaturamento('Lucas', 'Oliveira', 'Construção do corpo', 'Brasil', 'Av passa tempo', '288', 'Florianópolis', 'Santa Catarina', '45697000', '99842567', 'teste@mucilon.com')
       cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
        
    });
});