import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

export default function Fila() {
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
        const users_list = users.filter((user) => user.entry === 0);
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

  async function handleEntrance(user_id) {
    try {
      await api
        .put(`user/entry/${user_id}`)
        .then(console.log("Usuário movido"));

      setUsers(users.filter((user) => user.entry === 0));
      setUsers(users.filter((users) => users.id !== user_id));
    } catch (err) {
      alert("Erro ao mover o usuário, tente novamente");
      console.log(err);
    }
  }

  return (
    <div className="fila-container">
      <heather>
        <Link className="back-link" to="/menu">
          <FiArrowLeft size={35} color="#FFF" />
        </Link>

        <h1>Pessoas na Fila</h1>
      </heather>

      <div className="pessoas">
        {users.map((user) => (
          <Accordion defaultActiveKey="0" className="acord" key={user.id}>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                {user.name}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <section className="linha">
                    <p>{user.name}</p>
                    <h5>ID: {user.id}</h5>
                  </section>
                  <section className="alinha">
                    <button className="button">Chamar</button>
                    <button
                      className="button"
                      onClick={() => handleEntrance(user.id)}
                    >
                      Confirmar entrada
                    </button>
                    <button
                      className="button"
                      onClick={() => handleDelete(user.id)}
                    >
                      Remover
                    </button>
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
