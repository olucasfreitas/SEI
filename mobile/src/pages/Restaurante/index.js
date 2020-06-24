import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { View, Text, FlatList, Image, Button, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import img from '../../assets/quintal.png';
import imag from '../../assets/batata.jpg';

export default function Restaurante() {
    const [item, setItem] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();

    const o_restaurante = route.params.restaurante;

    function navigateToMenu() {
        navigation.navigate('Menu');
    }

    function navigateToFila(restaurante) {
        navigation.navigate('Fila', { restaurante });
    }

    async function loadItem() {
        if (loading) {
            return;
        }

        setLoading(true);

        const response = await api.get('itens/list', {
            params: { page },
            headers: {
                Authorization: o_restaurante.id,
            },
        });

        setItem([...item, ...response.data]);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadItem();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={navigateToMenu}
                >
                    <AntDesign name="arrowleft" size={26} style={styles.voltar} />
                </TouchableOpacity>
                <View style={styles.centro}>
                    <Image source={img} style={styles.img} />
                    <View style={styles.time}>
                        <AntDesign name="clockcircle" size={16} />
                        <Text>  Tempo de Espera: 45 a 60 min</Text>
                    </View>
                    <View style={styles.time}>
                        <MaterialIcons name="location-on" size={16} />
                        <Text style={styles.end}>{o_restaurante.adress}</Text>
                    </View>
                </View>
                <Button onPress={() => navigateToFila(o_restaurante)} color='#643853' style={styles.botao} title="Entrar na Fila" />
            </View>

            <Text style={styles.nome}>Cardápio</Text>

            <FlatList
                data={item}
                keyExtractor={restaurante => String(restaurante.item_id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: item }) => (
                    <View style={styles.itens}>
                        <Image source={imag} style={styles.imagem} />
                        <View style={styles.textBody}>
                            <Text style={[styles.titulo, { marginTop: 0 }]}>{item.title}</Text>
                            <Text style={styles.preco}>
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.value)}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}