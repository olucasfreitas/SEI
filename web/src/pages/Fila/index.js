import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

export default function Fila(){
    return(
        <div className="fila-container">
            <heather>
                <Link className="back-link" to="/menu">
                    <FiArrowLeft size={35} color="#FFF"/>
                </Link>

                <h1>Pessoas na Fila</h1>

            </heather>
        </div>
    );
}