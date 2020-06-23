import api from "../../services/api";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

export default function Itens() {
  const [itens, setItens] = useState([]);
  const estabelecimento_id = localStorage.getItem("estabelecimento_id");
  

  useEffect(() => {
    api
      .get("itens/list", {
        headers: {
          Authorization: estabelecimento_id,
        },
      })
      .then((response) => {
        setItens(response.data);
      });
  }, [estabelecimento_id]);


  async function handleDelete(item_id){
    try{
      await api.delete(`itens/delete/${item_id}`, {
        headers:{
          Authorization: estabelecimento_id,
        }
      }).then(console.log("item deletado"));

      setItens(itens.filter(itens => itens.item_id !== item_id));
    } catch(err){
      alert("Erro ao deletar item, tente novamente");
      console.log(err);
    }
  }

  return (
    <div className="itens-container">
      <heather>
        <Link className="back-link" to="/menu">
          <FiArrowLeft size={35} color="#FFF" />
        </Link>

        <h1>Itens Cadastrados</h1>

        <Link className="button" to="/cadastro_itens">
          Adicionar Item
        </Link>
      </heather>

      <div className="itens">
        {itens.map((itens) => (
          <Accordion defaultActiveKey="0" className="acord" key={itens.item_id}>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                {itens.title}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <section className="linha">
                    <h5>{itens.title}</h5>
                  </section>
                  <section className="descricao">
                    <p>Valor: R$ {itens.value}</p>
                  </section>
                  <p>ID: {itens.item_id}</p>
                  <section className="alinha">
                    <button className="button" type="button" onClick={() => handleDelete(itens.item_id)}>Excluir Item</button>
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
