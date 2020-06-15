import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Menu from './pages/Menu';
import Restaurante from './pages/Restaurante';
import Fila from './pages/Fila';
import Cardapio from './pages/Cardapio';
import Item from './pages/Item'

export default function Routes(){
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Menu" component={Menu}/>
                <AppStack.Screen name="Restaurante" component={Restaurante}/>
                <AppStack.Screen name="Fila" component={Fila}/>
                <AppStack.Screen name="Cardapio" component={Cardapio}/>
                <AppStack.Screen name="Item" component={Item}/>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}
