/**===============================================================================================
 * Armazena todo tipo de arquivo que vai prover uma integração com algum serviço externo 
================================================================================================== */
//importa o axios
import axios from 'axios';

//
const api = axios.create({
    //parte da url que vai se manter em todas as chamadas
    baseURL:'http://localhost:3333',
})

export default api;