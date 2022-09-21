# Recicla Mais API

### API de agendamento para coleta de materiais recicláveis.

### Starting

Para executar o projeto será necessário instalar os seguintes programas:

* [Visual Studio Code](https://code.visualstudio.com/) (recomendado)
* [Node.js](https://nodejs.org/en/)
* [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)

### Desenvolvimento

Para iniciar é necessário clonar o projeto do GitHub num diretório de sua preferência através do terminal:

```shell
git clone https://github.com/AndresaTrentini/recicla-mais.git
```

#### Instalação das Dependências

abra a pasta do projeto e instale as dependências do projeto executando o comando abaixo no terminal:

```shell
$ npm install
```
#### Variáveis de Ambiente

Para o correto funcionamento do projeto crie um arquivo .env usando como base o arquivo .env.example e preencha todos os dados.

#### Start no servidor

Para dar start no servidor execute o comando:

```shell
$ npm start
```

Esse comando irá iniciar o servidor através do nodemon e estará disponivél através da porta que você definiu no arquivo .env. Se você definiu API_PORT=3000 você acessará pela URL [http://localhost:3000](http://localhost:3000)

Para visualizar a documentação localmente no browser da sua preferência navegue para [http://localhost:3000/docs](http://localhost:3000/api-doc).

Faça um primeiro teste na [API Recicla Mais](https://reciclamais.herokuapp.com/api-doc) clicando em signup, depois em Try it Out e em seguida no botão Execute. Neste ponto o cadastrado será realizado e as informações serão enviadas para o banco de dados.

### Deploy e Publicação

Para Deploy foi utilizado o [Heroku](https://www.heroku.com/).

##### Acessar documentação da API no Heroku

* https://reciclamais.herokuapp.com/api-doc


### LinkedIn dos Colaboradores

* [Andresa Tretini](https://www.linkedin.com/in/andresatrentini)
* [Talita Lima](https://www.linkedin.com/in/talitalimadc)
* [Robson Rosa](https://www.linkedin.com/in/robsonrosajr/)


###### Este Projeto Integrador teve como objetivo colocar em prática os conhecimentos obtidos durante o curso de Backend Node ministrado pela Digital House em parceria com o Ifood através do programa Potência Tech.




