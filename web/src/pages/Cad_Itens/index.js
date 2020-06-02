import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

export default function Cad_Itens(){
    return(
        <div className="citens-container">
            <div className="janela">
                <Link className="back-link" to="/itens">
                    <FiArrowLeft size={35} color="#FFF"/>
                </Link>
                <form>
                    <h1>Cadastro de Itens</h1>
                    <div>
                        <section>
                            <div>
                                <p>Nome Do Item</p>
                                <input type="text" placeholder="Ex: Batata Frita"/>
                            </div>
                            <div>
                                <p>Categoria</p>
                                <select name="categoria">
                                    <option></option>
                                    <option value="entrada">Entrada</option>
                                    <option value="prato-principal">Prato Principal</option>
                                    <option value="sobremesa">Sobremesa</option>
                                    <option value="bebida">Bebida</option>
                                </select>
                            </div>
                        </section>         

                        <section>
                            <div>
                            <p>Descrição</p>
                                <textarea placeholder="Aqui você pode colocar uma breve descrição do seu item"/>
                            </div>
                            <div>
                                <p>Imagem</p>
                                <input type="text" placeholder="Descobrir como fazer input de imagem"/>
                            </div>
                        </section>
                    </div>
                    <button>Cadastrar Item</button>
                </form>
            </div>
            
        </div>
    );
}