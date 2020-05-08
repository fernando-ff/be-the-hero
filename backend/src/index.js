//Importa o módulo express
const express = require('express');

//Importa o CORS
const cors = require('cors');

//Importa as rotas
const routes = require('./routes');

//Instância o express
const app = express();

//Identifica que estamos utilizando json para o corpo das requisições
app.use(express.json());

//Utiliza o cors, permitindo que todas as aplicações front end acessem nosso back end
app.use(cors());

//Utiliza as rotas
app.use(routes);

/** 
 * Métodos HTTP
 *  GET: Busca uma informação do back-end
 *  POST: Cria uma informação no back-end
 *  PUT: Altera uma informação no back-end
 *  DELETE: Deleta uma informação no back-end   
 */

/**
 * Tipos de parâmetros:
 *  (Query) Params: Parâmetros nomeados enviados na rota aṕos "?"(filtros,páginação)
 *  Route (Params): Parâmetros utilizados para identificar recursos
 *  Request (Body): Corpo da requisição utilizado para criar ou alterar recursos
 */


//Manda a aplicação ouvir a porta 3333
app.listen(3333);
