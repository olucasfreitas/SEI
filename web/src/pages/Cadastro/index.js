import React from 'react';

import './styles.css';

export default function Cadastro(){
    return(
        <div>
            <div className="cadastro-container">
                <h1>Cadastro Restaurante</h1>
                <form className="content">
                    <section className="alinhar">   
                        <section className="centraliza">
                            <p>Nome</p>
                            <input type="text" placeholder="Nome"/>
                        </section>
                        <section className="centraliza">
                            <p>Senha</p>
                            <input type="password" placeholder="Senha"/>
                        </section>
                        <section className="centraliza">
                            <p>Endereço</p>
                            <input type="text" placeholder="Endereço"/>
                        </section>
                        <section className="centraliza">
                            <p>E-mail</p>
                            <input type="e-mail" placeholder="E-mail"/>
                        </section>
                    </section>
                    <section className="espaco">
                        
                            <section className="centraliza">
                                <p>Descrição</p>
                                <textarea placeholder="Descrição"/>
                            </section>

                            <div className="linha">
                                <section className="centraliza">
                                    <p>Logo</p> 
                                    <textarea placeholder="Inserir Logo"/>
                                </section>
                                <section className="centraliza">
                                    <p>Tempo de Espera</p>
                                    <textarea placeholder = "80 a 90 minutos"/>
                                </section>
                            </div>
                        
                    </section>
                </form>
                <button className="button">Cadastrar</button>
            </div>    
        </div>
    );
}