/**=================================
 *      Responsável pelo login
==================================== */
const connection = require('../database/connection');

module.exports = {

    async create(request, response){
        //Busca o id através do corpo da requisição
        const { id } = request.body;
        //Busca uma ong do banco de dados
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
        //Verifica se a ong existe
        if(!ong){
            //Se ela não existir
            return response.status(400).json({error:'No ONG found this id'});
        } 
        //Caso exista retorna o nome da ong
        return response.json(ong);
    }
}