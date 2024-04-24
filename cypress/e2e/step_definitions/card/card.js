import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import card from '../../../fixtures/card/card.json'

//  Scenario:CT01 - Criar uma Card
Given(/^que tenha criado um board e uma lista$/, () => {
	return true;
});

Then(/^informo o <id> da lista$/, () => {
	return true;
});

Then(/^informo o <name> do card$/, () => {
	return true;
});

Then(/^informo a <descricao> do card$/, () => {
	cy.request({
        method: 'POST',
        url: `${Cypress.config().trello_api}/cards?idList=${Cypress.env('list_id')}&key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
        body : card,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        cy.log(response.body)
    });
});

When(/^envio uma nova requisicao$/, () => {
	return true;
});

Then(/^deve retornar as informações do card status code 200$/, () => {
	return true;
});

//  Scenario: CT02 - Buscar o card via ID
Given(/^que tenha criado um CARD$/, () => {
	return true;
});

Then(/^informo o <id> card$/, () => {
	return true;
});

When(/^envio uma nova requisicao$/, () => {
	return true;
});

Then(/^deve retornar o card de interesse e status code 200$/, () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.config().trello_api}/cards/66287fefdab1a5579ff99264?key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
        failOnStatusCode: false
    }).should((response) => {
        expect(response.body).to.have.property('id', '66287fefdab1a5579ff99264');
        expect(response.body.badges).to.deep.equal({
                "attachmentsByType": {
                    "trello": {
                        "board": 0,
                        "card": 0
                    }
                },
                "location": false,
                "votes": 0,
                "viewingMemberVoted": false,
                "subscribed": false,
                "fogbugz": "",
                "checkItems": 0,
                "checkItemsChecked": 0,
                "checkItemsEarliestDue": null,
                "comments": 0,
                "attachments": 0,
                "description": true,
                "due": null,
                "dueComplete": false,
                "start": null
            });
            expect(response.body).to.have.property('closed', false);
            expect(response.body).to.have.property('dueComplete', false);
    });
  
});

//  Scenario: CT03 - Atualizar um card
Given(/^que tenha criado um CARD3$/, () => {
	return true;
});

Then(/^informo o <id> card3$/, () => {
	return true;
});

Then(/^informo o <id> lista3$/, () => {
	return true;
});

Then(/^informo o novo <name>3$/, () => {
	return true;
});

Then(/^informo a nova <descricao>3$/, () => {
	return true;
});

When(/^envio uma nova requisicao3$/, () => {
	cy.request({
        method: 'PUT',
        url: `${Cypress.config().trello_api}/cards/66287fefdab1a5579ff99264?key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
        body : card,
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body).to.have.property('id', '66287fefdab1a5579ff99264');
        expect(response.body.badges).to.deep.equal({
            "attachmentsByType": {
                "trello": {
                    "board": 0,
                    "card": 0
                }
            },
            "location": false,
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "checkItemsEarliestDue": null,
            "comments": 0,
            "attachments": 0,
            "description": true,
            "due": null,
            "dueComplete": false,
            "start": null
        });
        expect(response.body).to.have.property('closed', false);
        expect(response.body).to.have.property('dueComplete', false);
        expect(response.body).to.have.property('desc', 'Desafio cypress editado');
        expect(response.body.descData).to.deep.equal({"emoji": {}});
        expect(response.body).to.have.property('due', null);
        expect(response.body).to.have.property('idBoard', '662872a52570ce65288a1254');
        expect(response.body).to.have.property('idList', '66287bc636a522a9bfc07d90');
        expect(response.body).to.have.property('name', 'Tarefa editado');
      
    });
});

Then(/^deve exibir o card atualizado status code 2003$/, () => {
	return true;
});

//  Scenario: CT04 - Deletar um card
Given(/^que tenha criado um CARD4$/, () => {
	return true;
});

Then(/^informo o <id> card4$/, () => {
	return true;
});

When(/^envio uma nova requisicao4$/, () => {
	let board_id = '';
    let card = {};
    
    cy.request({
        method: 'POST',
        url: `${Cypress.config().trello_api}/boards/?name=DELETE&key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        board_id = response.body.id;
        cy.log(board_id);
    });

    // //CREATE LIST
    return cy.request({
        method: 'POST',
        url: `${Cypress.config().trello_api}/lists?name=backlog&idBoard=${board_id}&key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body.closed).to.eq(false);
        expect(response.body.color).to.eq(null);
        let list_id = response.body.id;
        cy.log(`List ID: ${list_id}`);
        cy.log(list_id);


    //create card
      
    return cy.request({
            method: 'POST',
            url: `${Cypress.config().trello_api}/cards?idList=${list_id}&key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
            body : card,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            let card_id = response.body.id;
            cy.log(`Card ID: ${card_id}`);
            cy.log(response.body)
        });

    //delete
        cy.request({
            method: 'DELETE',
            url: `${Cypress.config().trello_api}/cards/${card_id}?key=${Cypress.env('KEY')}&token=${Cypress.env('TOKEN')}`,
            body : card,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            card_id = response.body.id;
            cy.log(card_id);
            cy.log(response.body)
        });
    });

});

Then(/^deve deletar o card de interesse$/, () => {
	return true;
});
