import React from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Card} from 'react-bootstrap'
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

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </div>
    );
}