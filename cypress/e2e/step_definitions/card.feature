Feature: [Card - TRELLO]  POST, GET, PUT, DELETE

  Scenario:CT01 - Criar uma Card
    Given   que tenha criado um board e uma lista
    And     informo o <id> da lista
    And     informo o <name> do card
    And     informo a <descricao> do card
    When    envio uma nova requisicao
    Then    deve retornar as informações do card status code 200

  Scenario: CT02 - Buscar o card via ID
    Given   que tenha criado um CARD
    And     informo o <id> card
    When    envio uma nova requisicao
    Then    deve retornar o card de interesse e status code 200

  Scenario: CT03 - Atualizar um card
    Given   que tenha criado um CARD3
    And     informo o <id> card3
    And     informo o <id> lista3
    And     informo o novo <name>3
    And     informo a nova <descricao>3
    When    envio uma nova requisicao3
    Then    deve exibir o card atualizado status code 2003

  Scenario: CT04 - Deletar um card
    Given   que tenha criado um CARD4
    And     informo o <id> card4
    When    envio uma nova requisicao4
    Then    deve deletar o card de interesse