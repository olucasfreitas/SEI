import api from "../../services/api";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const history = useHistory();

  async function handleCadastroRestaurante(e) {
    e.preventDefault();

    const data = {
      name,
      password,
      adress,
      email,
      number,
      description,
    };

    try {
      const response = await api.post("estabelecimentos/create", data);

      alert(
        `Seu restuarante foi cadastrado com sucesso, use seu e-mail e senha para logar.`
      );
      console.log(response.data.name);

      history.push("/");
    } catch (err) {
      alert(`Erro no cadastro, tente novamente.`);
      console.log(err);
    }
  }

  return (
    <div className="cadastro-container">
      <div className="janela">
        <Link className="back-link" to="/">
          <FiArrowLeft size={25} color="#FFF" />
        </Link>
        <form className="content" onSubmit={handleCadastroRestaurante}>
          <h1>Cadastro Restaurante</h1>
          <div className="grupo">
            <section className="lados">
              <section>
                <p>Nome</p>
                <input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </section>

              <section>
                <div className="linha">
                  <section>
                    <p>Senha</p>
                    <input
                      type="password"
                      placeholder="Senha"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </section>
                  <section>
                    <p>Confirmar Senha</p>
                    <input type="password" placeholder="Senha" />
                  </section>
                </div>
              </section>

              <section>
                <p>Endereço</p>
                <input
                  type="text"
                  placeholder="Endereço"
                  value={adress}
                  onChange={e => setAdress(e.target.value)}
                />
              </section>

              <section>
                <p>E-mail</p>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </section>
            </section>

            <section className="lados">
              <section>
                <p>Confirmação de E-mail</p>
                <input type="email" placeholder="E-mail" className="input" />
              </section>

              <section>
                <p>Descrição</p>
                <textarea
                  placeholder="Descrição"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </section>

              <div className="bloco">
                <section className="lugar">
                  <section>
                    <p>Número de Telefone</p>
                    <input
                      placeholder="(XX) XXXXX-XXXX"
                      value={number}
                      onChange={e => setNumber(e.target.value)}
                    />
                  </section>
                </section>
              </div>
            </section>
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
