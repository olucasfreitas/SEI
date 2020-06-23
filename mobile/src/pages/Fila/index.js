import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { View, Text, Image, Button, TouchableOpacity, TextInput, Alert } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import img from '../../assets/quintal.png';

export default function Restaurante() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const navigation = useNavigation();
    const route = useRoute();

    const restaurante = route.params.restaurante;

    function navigateToRestaurante() {
        navigation.navigate('Restaurante');
    }

    function navigateToCardapio(id, restaurante) {
        navigation.navigate('Cardapio', { id, restaurante });
    }

    function validaConexao() {
        Alert.alert(
            'Conexão',
            'A conexão com a rede do restaurante foi bem sucedida, prossiga para o cardápio',
            [
                { text: 'Prosseguir', onPress: () => navigateToCardapio(id, restaurante) },
            ],
            { cancelable: false }
        );
    }

    async function createUser(e) {
        e.preventDefault();

        const data = {
            name,
        };

        const response = await api.post('user/create',
            data,
            {
                headers: {
                    Authorization: restaurante.id
                },
            });
        //alert(response.data.id);
        setId(response.data.id);

        validaConexao();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={navigateToRestaurante}
                >
                    <AntDesign name="arrowleft" size={26} style={styles.voltar} />
                </TouchableOpacity>
                <View style={styles.centro}>
                    <Image source={img} style={styles.imagem} />
                    <View style={styles.time}>
                        <AntDesign name="clockcircle" size={16} />
                        <Text style={styles.restaurante}>  Tempo de Espera: 45 a 60 min</Text>
                    </View>
                    <View style={styles.time}>
                        <MaterialIcons name="location-on" size={16} />
                        <Text style={styles.restaurante}>{restaurante.adress}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.centro}>
                <Text style={styles.titulo}>Total de Pessoas na fila</Text>
                <View style={styles.fila}>
                    <Text style={styles.contador}>1</Text>
                </View>
                <Text style={styles.titulo}>Preencha para entrar na fila</Text>
                <TextInput value={name} onChangeText={value => setName(value)} style={styles.input} placeholder=" Digite seu nome" />
                <View style={styles.button}>
                    <Button onPress={createUser} color='#643853' title="Entrar" />
                </View>
            </View>
        </View>
    );
}