import React from 'react';
import {Link} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

export default function Itens(){
    return(
        <div className="itens-container">
            <heather>
                <Link className="back-link" to="/menu">
                    <FiArrowLeft size={35} color="#FFF"/>
                </Link>

                <h1>Itens Cadastrados</h1>

                <Link className="button" to="/cadastro_itens">Adicionar Item</Link>
            </heather>

            <div className="itens">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Batata Rústica
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <section className="linha">
                                <h5>Batata Rústica</h5>
                            </section>
                            <section className="descricao">
                                <p>Categoria: entrada</p>
                            </section>
                            <section className="alinha">
                                <button className="button">Editar Item</button>
                                <button className="button">Excluir Item</button>
                            </section>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
}