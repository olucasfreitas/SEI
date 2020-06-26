import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import api from "../../services/api";

export default function Cad_Itens() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const estabelecimento_id = localStorage.getItem('estabelecimento_id');
  const name = localStorage.getItem('name');
  const history = useHistory();

  async function handleCadastroItem(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      const response = await api.post("itens/create", data, {
        headers: {
          Authorization: estabelecimento_id,
        }
      });

      alert(`Seu item foi cadastrado no ${name}`);
      console.log(response.data.title);
      console.log(response.data.item_id);
      history.push("itens");
    } catch (err) {
      alert(`Erro no cadastro, tente novamente.`);
      console.log(err);
    }
  }

  return (
    <div className="citens-container">
      <div className="janela">
        <Link className="back-link" to="/itens">
          <FiArrowLeft size={35} color="#FFF" />
        </Link>
        <form onSubmit={handleCadastroItem}>
          <h1>Cadastro de Itens</h1>
          <div>
            <section>
              <div>
                <p>Nome Do Item</p>
                <input
                  type="text"
                  placeholder="Ex: Batata Frita"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
            </section>

            <section>
              <div>
                <p>Descrição</p>
                <textarea
                  placeholder="Aqui você pode colocar uma breve descrição do seu item"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
            </section>
            <section>
              <div>
                <p>Valor</p>
                <input
                  type="number"
                  placeholder="Ex: 10,00"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
              </div>
            </section>
          </div>
          <button type="submit">Cadastrar Item</button>
        </form>
      </div>
    </div>
  );
}
