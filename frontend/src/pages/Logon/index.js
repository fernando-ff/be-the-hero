import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    //Estados para cada um dos inputs
        //[valor, função para atualizat o valor]
    const [id, setId] = useState('');

    //Serve para fazer a navegação por uma função js
    const history = useHistory();

    //Válida se a Ong existe
    async function handleLogin(e){
        //Evita que redirecte 
        e.preventDefault();

        try {
            //Pega o id 
            const response = await api.post('sessions',{ id });
            //Deixa disponivel em toda aplicação
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            //Envia o user oara rota profile
            history.push('/profile');
        } catch(err) { 
            alert('Falha no login, tente novamente');
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logo</h1>

                    <input
                     placeholder="Sua Id"
                     value={id}
                     onChange={e => setId(e.target.value)}
                     />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}