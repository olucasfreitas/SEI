import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';

export default function Cadastro(){
    return(
        <div className="cadastro-container">
            <div className="janela">
                <Link className="back-link" to="/">
                    <FiArrowLeft size={25} color="#FFF"/>
                </Link>
                <form className="content">
                    <h1>Cadastro Restaurante</h1>
                    <div className="grupo">
                        <section className="lados">   

                            <section>
                                <p>Nome</p>
                                <input type="text" placeholder="Nome"/>
                            </section>

                            <section>
                                <div className="linha">
                                    <section>
                                        <p>Senha</p>
                                        <input type="password" placeholder="Senha"/>    
                                    </section>
                                    <section>
                                        <p>Confirmar Senha</p>
                                        <input type="password" placeholder="Senha"/>
                                    </section>
                                </div>
                            </section>

                            <section>
                                <p>Endereço</p>
                                <input type="text" placeholder="Endereço"/>
                            </section>

                            <section>
                                <p>E-mail</p>
                                <input type="e-mail" placeholder="E-mail"/>
                            </section>

                        </section>
                    
                        <section className="lados">
                    
                            <section>
                                <p>Descrição</p>
                                <textarea placeholder="Descrição"/>
                            </section>

                            <div className="bloco">
                                <section>
                                    <p>Logo</p> 
                                    <textarea placeholder="Inserir Logo"/>
                                </section>
                                <section className="lugar">
                                    <section>
                                        <p>Tempo de Espera</p>
                                        <input placeholder = "80 a 90 minutos"/>
                                    </section>
                                    <section>
                                        <p>Número de Telefone</p>
                                        <input placeholder = "(XX) XXXXX-XXXX"/>
                                    </section>
                                </section>
                            </div>

                        </section>
                    </div>
                    <button className="button">Cadastrar</button>
                </form>
            </div>    
        </div>
    );
}