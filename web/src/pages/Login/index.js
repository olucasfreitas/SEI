import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function Login(){
    return(
        <div className="login-container">
            <form>
                <h1>SEI</h1>
                <p>Sistema de Espera Inteligente</p>

                <input type="e-mail" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <Link className="button" to="/menu">Login</Link>

                <a href="/cadastro">Cadastre-se</a>
            </form>
        </div>
    );
}