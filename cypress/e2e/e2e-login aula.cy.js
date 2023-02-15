/// <reference types="cypress"/>

const perfil = require('../fixtures/perfil.json')

beforeEach(() => {
    cy.visit('minha conta')
});

context('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')

    })

    it('Deve fazer login com sucesso - Utilizando fixtures', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuário)
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
        })
    });

    it('Deve emitir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('aluno@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

    })
    it('Deve emitir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')

    })
})