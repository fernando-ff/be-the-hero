/**=============================================
 *    Responsável pelo perfil de uma única ong
 ===============================================*/
const connection = require('../database/connection');

module.exports = {
    //retornar os casos específicos de uma única ong
    async index(request, response){
        //acessa os dados de uma ong que já está logada
        const ong_id = request.headers.authorization;
        //busca todos os incidentes
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');
        return response.json(incidents);
    }
}