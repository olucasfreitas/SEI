import React, { useState } from "react";
import {useHistory } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', {email, password});

      localStorage.setItem("name", response.data.name);
      localStorage.setItem("estabelecimento_id", response.data.id);

      history.push("/menu");
      console.log(`${response.data.id}`);
      console.log(`Login no ${response.data.name} foi feito com sucesso`);
    } catch (err) {

      alert("Falha no login, tente novamente.");

      console.log(err)
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h1>SEI</h1>
        <p>Sistema de Espera Inteligente</p>

        <input
          type="e-mail"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="button" type="submit">
          Login
        </button>

        <a href="/cadastro">Cadastre-se</a>
      </form>
    </div>
  );
}
