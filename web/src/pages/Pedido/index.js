import React from 'react';
import {Link} from 'react-router-dom';
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
        </div>
    );
}