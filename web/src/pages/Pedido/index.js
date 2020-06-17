import React from 'react';
import {Link} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

export default function Pedido(){
    return(
        <div className="pedido-container">
            <heather>
                <Link className="back-link" to="/menu">
                    <FiArrowLeft size={35} color="#FFF"/>
                </Link>

                <h1>Pedidos para Preparo</h1>

            </heather>

            <div className="pedidos">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Cliente D59A63E1
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <section className="linha">
                                <p>Isabela Sobral</p>
                                <h5>Cliente: D59A63E1</h5>
                            </section>
                            <section className="itens">
                                <p>Bife à Milanesa</p>
                                <p>Batata Rústica</p>
                            </section>
                            <section className="alinha">
                                <button className="button">Confirmar Saída</button>
                            </section>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    );
}