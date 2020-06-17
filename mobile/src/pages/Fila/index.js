import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import { View, Text, Image, Button, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

import img from '../../assets/quintal.png';

export default function Restaurante(){
    const navigation = useNavigation();

    function navigateToRestaurante(){
        navigation.navigate('Restaurante');
    }

    function navigateToCardapio(){
        navigation.navigate('Cardapio');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={navigateToRestaurante}
                >
                    <AntDesign name="arrowleft" size={26} style={styles.voltar}/>
                </TouchableOpacity>
                <View style={styles.centro}>
                    <Image source={img} style={styles.imagem}/>
                    <View style={styles.time}>
                        <AntDesign name="clockcircle" size = {16}/>
                        <Text style={styles.restaurante}>  Tempo de Espera: 45 a 60 min</Text>
                    </View>
                    <View style={styles.time}>
                        <MaterialIcons name="location-on" size={16}/>
                        <Text style={styles.restaurante}> Av. Senador Lemos 794</Text>
                    </View>
                </View>
            </View>
            <View style={styles.centro}>
                <Text style={styles.titulo}>Total de Pessoas na fila</Text>
                <View style={styles.fila}>
                    <Text style={styles.contador}>9</Text>
                </View>
                <Text style={styles.titulo}>Preencha para entrar na fila</Text>
                <TextInput style={styles.input} placeholder="Digite seu nome"/>
                <View style={styles.button}>
                    <Button onPress={navigateToCardapio} color='#643853' title="Entrar"/>
                </View>
            </View>
        </View>
    );
}