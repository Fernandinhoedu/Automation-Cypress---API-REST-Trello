import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import board from '../../../fixtures/board/board.json'

//  Scenario:CT001- Criar um board
Given(/^que tenha uma conta criada no trello$/, () => {
	return true;
});

Then(/^informo o <name>$/, () => {
	return true;
});

Then(/^informo a <descricao>$/, () => {
	return true;
});

When(/^envio uma nova requisicao$/, () => {

	let board_id = '';
    cy.request({
        method: 'POST',
        url: `${Cypress.config().trello_api}/boards/?name=fesQA&key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        board_id = response.body.id;
        cy.log(board_id);
    });

});

Then(/^deve retornar as infomrações do board e o status code 200$/, () => {
	return true;
});

// Scenario:CT02 - Listar o Board via ID
Given(/^que tenha criado um board2$/, () => {
	return true;
});

Then(/^informo o <id> do board2$/, () => {
	return true;
});

When(/^envio uma nova requisicao2$/, () => {
		let board_id = '';
    cy.request({
        method: 'POST',
        url: `${Cypress.config().trello_api}/boards/?name=fesQA&key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        board_id = response.body.id;
        cy.log(board_id);
    });
});

Then(/^deve retornar as informações do board de interesse e status code 2002$/, () => {
	return true;
});

//  Scenario:CT03 - Atualizar um board
Given(/^que tenha criado um board3$/, () => {
	return true;
});

Then(/^informo o <id> do board no parametro3$/, () => {
	return true;
});

Then(/^informo o novo <name> do board3$/, () => {
	return true;
});

When(/^envio uma nova requisicao3$/, () => {
	cy.request({
        method: 'PUT',
        url: `${Cypress.config().trello_api}/boards/${Cypress.env('board_id')}?key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
        body : board,
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body.id).to.eq("662872a52570ce65288a1254");
        expect(response.body.desc).to.eq("QA teste");
    });
});

Then(/^o nome do board deve ser atualizado e o status code = 2003$/, () => {
	return true;
});

//  Scenario:CT04 - Deletar um board
Given(/^que tenha criado um board4$/, () => {
	return true;
});

Then(/^informo o <id> do board no parametro4$/, () => {
	return true;
});

When(/^envio uma nova requisicao4$/, () => {
	
//create
let board_id = '';
cy.request({
  method: 'POST',
  url: `${Cypress.config().trello_api}/boards/?name=fesQA&key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
  failOnStatusCode: false
}).then((response) => {
  expect(response.status).to.eq(200);
  expect(response.body).to.not.be.null;
  board_id = response.body.id;
  cy.log(board_id);
});
    //delete
    cy.request({
        method: 'DELETE',
        url: `${Cypress.config().trello_api}/boards/${board_id}?key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
    
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
    });
    
});

Then(/^deve deletar o board de interesse e retornar status code 2004$/, () => {
	return true;
});

