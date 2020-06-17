import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import { View, Text, TextInput, Image, Button, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles';

import img from '../../assets/batata.jpg';

export default function Item(){
    const navigation = useNavigation();

    function navigateToCardapio(){
        navigation.navigate('Cardapio');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={img} style={styles.imagem}>
                    <TouchableOpacity
                        onPress={navigateToCardapio}
                    >
                        <AntDesign name="arrowleft" size={26} style={styles.voltar}/>
                    </TouchableOpacity>
                    <View style={styles.centro}>
                        <Text style={styles.titulo}>Batata</Text>
                    </View>
                </ImageBackground>
                
            </View>
            <View style={styles.centro}>
                <View style={styles.caixa}>
                    <Text style={styles.descricao}>Batata corte fino para acompanhar seu pedido principal</Text>
                </View>
                <Text style={styles.obs}>Deseja adicionar alguma observação?</Text>
                <View style={styles.input}>
                    <TextInput placeholder="Ex: sem cebola"/>
                </View>
                <View style={styles.button}>
                    <Button onPress={() => {}} color='#643853' title="Adicionar"/>
                </View>
            </View>
        </View>
    );
}