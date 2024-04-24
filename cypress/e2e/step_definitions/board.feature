Feature: [BOARD - TRELLO]  POST, PUT, GET, DELETE

  Scenario:CT001- Criar um board
    Given   que tenha uma conta criada no trello
    And     informo o <name>
    And     informo a <descricao>
    When    envio uma nova requisicao
    Then    deve retornar as infomrações do board e o status code 200

  Scenario:CT02 - Listar o Board via ID
    Given   que tenha criado um board2
    And     informo o <id> do board2
    When     envio uma nova requisicao2
    Then    deve retornar as informações do board de interesse e status code 2002


  Scenario:CT03 - Atualizar um board
    Given   que tenha criado um board3
    And     informo o <id> do board no parametro3
    And     informo o novo <name> do board3
    When    envio uma nova requisicao3
    Then    o nome do board deve ser atualizado e o status code = 2003

  Scenario:CT04 - Deletar um board
    Given   que tenha criado um board4
    And     informo o <id> do board no parametro4
    When    envio uma nova requisicao4
    Then    deve deletar o board de interesse e retornar status code 2004