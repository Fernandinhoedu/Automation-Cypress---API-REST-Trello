Feature: [Lista - TRELLO]  POST, GET

  Scenario:CT01 - Criar uma lista
    Given   que tenha criado um board
    And     informo o <id> do board
    And     informo o <name> da lista
    When    envio uma nova requisicao
    Then    deve retornar as informações da lista criada e status code 200

  Scenario:CT02 - Buscar uma lista pelo ID
    Given   que tenha criado um board1
    And     informo o <id> da lista1
    When    envio uma nova requisicao1
    Then    deve retornar a lista de interesse e status code 2001
