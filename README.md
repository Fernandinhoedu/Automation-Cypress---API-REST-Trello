# Automação Cypress - API Rest Trello

Autores: [Fernando SILVA](fesilva.eduardo@hotmail.com)

Objetivo deste desafio técnico e automatizar os respectivos cenários solicitados , utilizando a Collection do [Postman](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-group-boards).

## Requisitos
- Os requisitos para este projeto é ter o [Node.js](https://nodejs.org/en/) **versão 14** ou superior e o [npm] em sua máquina.

## 1. Estrutura
A estrutura base já contempla um projeto robusto e de facil manutenção

#### 1.1 Definição da estrutura
No caminho `cypress/e2e/step_definitions` ´armazenando os arquivos `.feature` em Gherkin de cada cenário de testes e os arquivos `.js` de cada step de execução

## 2.  Executando o projeto cypress

1.  Clonando o repositório

Clone o repositório em sua máquina para que possa executar/visualizar os testes

```
https://github.com/Fernandinhoedu/Automation-Cypress---API-REST-Trello.git
```

2. Instalando os pacotes

Após o repositório ser clonado, acesse-o pela linha de comando do seu sistema operacional e estando na raiz, use o comando:

```
$ npm install
```
```
$ npm install cypress --dev
```

3.  Executando o cypress

Depois de todos os pacotes serem instalados corretamente, podemos executar a interface do cypress usando:

```
$ npx cypress open
```

## 3.  Variáveis
Durante a construção dos testes foram criadas as Variáveis abaixo, utilizando os dados da minha conta **Trello**

 - KEY         : obtida no menu **power-up** do trello
 - TOKEN       : obtida no menu **power-up** do trello
 - board_id    : variável  criada para armazenar o ID do board criado no teste
 - list_id     : variável  criada para armazenar o ID do list criado no teste
 - card_id     : variável  criada para armazenar o ID do card criado no teste

### 3. Exemplo do formato do contéudo das variáveis
 -"TOKEN" :"FTTAe4691eb61cff55337c0232fae9084fbe6f435e015be592443ac613a84cea235cC650C5E9"
 -"KEY" :"3d933f7b732526f81b840036ab6104d9"
 -"board_id":"962872a52570ce65288a1254"
 -"list_id":"96287bc636a522a9bfc07d90"



## Cenários contemplados

Cenário 

<details>
  <summary>Descrição</summary>
    <br>-Cadastrar um board, Cadastrar um card, Excluir um card, Excluir um board    '



## Documentação a ser utilizada
- Deve seguir as orientações disponibilizadas  [Developers Trello](https://developers.trello.com/docs/api-introduction)  para a criação **KEY** e **TOKEN**  da API Rest











## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)