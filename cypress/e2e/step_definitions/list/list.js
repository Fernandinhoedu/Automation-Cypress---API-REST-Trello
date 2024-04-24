import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

//  Scenario:CT01 - Criar uma lista

Given(/^que tenha criado um board$/, () => {
	return true;
});

Then(/^informo o <id> do board$/, () => {
	return true;
});

Then(/^informo o <name> da lista$/, () => {
	return true;
});

When(/^envio uma nova requisicao$/, () => {
	cy.request({
        method: 'POST',
        url: `${Cypress.config().trello_api}/lists?name=backlog&idBoard=${Cypress.env('board_id')}&key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
    
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body.name).to.eq("backlog");
        expect(response.body.closed).to.eq(false);
        expect(response.body.color).to.eq(null);
       
    });
});

Then(/^deve retornar as informações da lista criada e status code 200$/, () => {
	return true;
});


//  Scenario:CT02 - Buscar uma lista pelo ID
Given(/^que tenha criado um board1$/, () => {
	return true;
});

Then(/^informo o <id> da lista1$/, () => {
	return true;
});

When(/^envio uma nova requisicao1$/, () => {
	return true;
});

Then(/^deve retornar a lista de interesse e status code 2001$/, () => {
	cy.request({
        method: 'GET',
        url: `${Cypress.config().trello_api}/lists/66287bc636a522a9bfc07d90?key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body.id).to.eq("66287bc636a522a9bfc07d90");
        expect(response.body.name).to.eq("QA");
        expect(response.body.closed).to.eq(false);
        expect(response.body.idBoard).to.eq("662872a52570ce65288a1254");
    
    });
});


//Scenario: CT03 - Atualziar um card