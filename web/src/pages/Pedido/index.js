import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";

export default function Pedido() {
  const [users, setUsers] = useState([]);
  const estabelecimento_id = localStorage.getItem("estabelecimento_id");

  useEffect(() => {
    api
      .get("user/list", {
        headers: {
          Authorization: estabelecimento_id,
        },
      })
      .then((response) => {
        const users = response.data;
        const users_list = users.filter((user) => user.entry === 1);
        setUsers(users_list);
      });
  }, [estabelecimento_id]);

  async function handleDelete(id) {
    try {
      await api
        .delete(`user/delete/${id}`, {
          headers: {
            Authorization: estabelecimento_id,
          },
        })
        .then(console.log("Usuário removido"));

      setUsers(users.filter((users) => users.id !== id));
    } catch (err) {
      alert("Erro ao remover usuário, tente novamente");
      console.log(err);
    }
  }

  return (
    <div className="pedido-container">
      <heather>
        <Link className="back-link" to="/menu">
          <FiArrowLeft size={35} color="#FFF" />
        </Link>

        <h1>Pedidos para Preparo</h1>
      </heather>

      <div className="pedidos">
        {users.map((user) => (
          <Accordion defaultActiveKey="0" className="acord" key={user.id}>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Cliente: {user.id}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <section className="linha">
                    <p>Nome: {user.name}</p>
                    <h5>Cliente: {user.id}</h5>
                  </section>
                  <section className="itens">
                    <p>Bife à Milanesa</p>
                    <p>Batata Rústica</p>
                  </section>
                  <p>Valor: {user.preco_total}</p>
                  <section className="alinha">
                    <button className="button" onClick={() => handleDelete(user.id)}>Confirmar Saída</button>
                  </section>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
