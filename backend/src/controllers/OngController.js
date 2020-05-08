//Importa a conexão com o BD
const connection = require('../database/connection');

//Importa o crypto
const crypto = require('crypto');

module.exports = {

    //Listagem das ONGs
    async index(request, response) {
    //Selecionando todos os campos da tabela ONG
    const ongs = await connection('ongs').select('*');
    
    return response.json(ongs);
    },
    //Responsável por pegar os dados do usuário e inserir eles no BD
    async create(request, response){
        const { name, email, whatsapp, city, uf} = request.body;
        
        //Gera uma string aleátoria
        const id = crypto.randomBytes(4).toString('HEX');
    
        //Operações com o BD
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};