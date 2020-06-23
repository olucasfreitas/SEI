import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi'
import './styles.css';

export default function Menu(){
    const estabelecimento_name = localStorage.getItem('name');
    const history = useHistory();

    function handleLogout(e){
      try{
        e.preventDefault();
        localStorage.clear();
        history.push('/');
        console.log("Logout feito com sucesso")
      } catch(err){
        alert("Erro ao sair, tente novamente.")
        console.log(err)
      }
    }
    return(
        <div className="menu-container">
            <span>Bem vindo {estabelecimento_name}</span>
            <div className="centro">
                <h1>Menu</h1>
                <div>
                    <section className="botoes">
                        <Link className="button" to="/fila">Fila</Link>
                        <Link className="button" id="meio" to="/pedido">Pedidos</Link>
                        <Link className="button" to="/itens">Itens</Link>
                    </section>
                </div>
               <section className="direita">
                    <button  id="sair" type="submit" onClick={handleLogout}>
                        <FiPower size={18} color="#FFF"/>
                    </button>
               </section>
            </div>
        </div>
);
}