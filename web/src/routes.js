import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Menu from './pages/Menu';
import Cad_Itens from './pages/Cad_Itens';
import Itens from './pages/Itens';
import Fila from './pages/Fila';
import Pedido from './pages/Pedido';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/itens" component={Itens}/>
                <Route path="/cadastro_itens" component={Cad_Itens}/>
                <Route path="/fila" component={Fila}/>
                <Route path="/pedido" component={Pedido}/>
            </Switch>
        </BrowserRouter>
    );
}