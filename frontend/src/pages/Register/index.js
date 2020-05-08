import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    //Estados para cada um dos inputs
        //[valor, função para atualizat o valor]
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    //Serve para fazer a navegação por uma função js
    const history = useHistory();

    //Responsável por fazer o cadastro do usuário
    async function handleRegister(e){
        //Evita que redirecte 
        e.preventDefault();

        //Converte para o formato json
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        try{
            //Chama a api e realiza o cadastro
            const response = await api.post('ongs', data);
            //Mostra essa mensagem ao usuário caso o cadastro tenha sido realizado
            alert(`Seu ID de acesso:${response.data.id}`);
            //Envia o user para pagina raiz
            history.push('/');
        } catch(err) {
            //Mostra essa mensagem ao usuário caso o cadastro nãp tenha sido realizado
            alert('Erro no cadastro, tente novamente!');
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/profile" >
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                     placeholder="Nome da ONG" 
                     value={name}
                     onChange={e => setName(e.target.value)}
                     />
                    <input
                     type="email" placeholder="E-mail"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     />
                    <input
                     placeholder="WhatsApp "
                     value={whatsapp}
                     onChange={e => setWhatsapp(e.target.value)}
                     />
                    <div className="input-group">
                        <input
                         placeholder="Cidade"
                         value={city}
                         onChange={e => setCity(e.target.value)}    
                         />
                        <input
                         placeholder="UF" style={{ width:80 }}
                         value={uf}
                         onChange={e => setUf(e.target.value)}     
                         />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}