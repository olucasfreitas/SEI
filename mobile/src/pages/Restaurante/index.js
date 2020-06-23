import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import { View, Text, FlatList, Image, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

import img from '../../assets/quintal.png';
import imag from '../../assets/batata.jpg';

export default function Restaurante(){
    const navigation = useNavigation();

    function navigateToMenu(){
        navigation.navigate('Menu');
    }

    function navigateToFila(){
        navigation.navigate('Fila');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={navigateToMenu}
                >
                    <AntDesign name="arrowleft" size={26} style={styles.voltar}/>
                </TouchableOpacity>
                <View style={styles.centro}>
                    <Image source={img} style={styles.imagem}/>
                    <View style={styles.time}>
                        <AntDesign name="clockcircle" size = {16}/>
                        <Text>  Tempo de Espera: 45 a 60 min</Text>
                    </View>
                    <View style={styles.time}>
                        <MaterialIcons name="location-on" size={16}/>
                        <Text style={styles.end}> Av. Senador Lemos 794</Text>
                    </View>
                </View>
                <Button onPress={navigateToFila} color='#643853' style={styles.botao} title="Entrar na Fila" /> 
            </View>
            
            <FlatList 
                data={[1, 2, 3]}
                keyExtractor={restaurante => String(restaurante)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.itens}>
                        <Image source={imag} style={styles.imagem}/>
                        <View style={styles.textBody}>
                            <Text style={[styles.titulo, {marginTop: 0}]}>Batata Rústica</Text>
                            <Text style={styles.preço}>R$ 6,90</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}