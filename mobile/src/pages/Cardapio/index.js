import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

import api from '../../services/api';

import styles from './styles';
import imag from '../../assets/batata.jpg';

import img from '../../assets/quintal.png';

export default function Cardapio() {
    const [item, setItem] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    const id = route.params.id;
    const restaurante = route.params.restaurante;

    function navigateToMenu() {
        navigation.navigate('Menu');
    }

    function navigateToItem(pedido, id) {
        navigation.navigate('Item', { pedido, id });
    }
    function navigateToCarrinho() {
        navigation.navigate('Carrinho');
    }

    function twoOptionAlertHandler() {
        Alert.alert(
            'Sair da Fila',
            'Você deseja realmente sair da fila? Sua posição será perdida',
            [
                { text: 'Sim', onPress: navigateToMenu },
                { text: 'Não', onPress: () => { } },
            ],
            { cancelable: false }
        );
    }

    async function loadItem() {
        if (loading) {
            return;
        }

        setLoading(true);

        const response = await api.get('itens/list', {
            params: { page },
            headers: {
                Authorization: restaurante.id,
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
                <View style={styles.linha}>
                    <TouchableOpacity
                        onPress={twoOptionAlertHandler}
                    >
                        <Feather name="log-out" size={26} style={styles.voltar} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={navigateToCarrinho}
                    >
                        <AntDesign name="shoppingcart" size={26} style={styles.voltar} />
                    </TouchableOpacity>
                </View>
                <View style={styles.centro}>
                    <Image source={img} style={styles.imagem} />
                    <Text style={styles.contador}>Pessoas na sua frente: 1</Text>
                </View>
            </View>
            <View style={styles.codigo}>
                <Text style={styles.cod}>Seu código é: {id}</Text>
            </View>
            <FlatList
                data={item}
                keyExtractor={restaurante => String(restaurante.item_id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: item }) => (
                    <TouchableOpacity
                        onPress={() => navigateToItem(item, id)}
                    >
                        <View style={styles.itens}>
                            <Image source={imag} style={styles.imagem} />
                            <View style={styles.textBody}>
                                <Text style={[styles.titulo, { marginTop: 0 }]}>{item.title}</Text>
                                <Text style={styles.preço}>
                                    {Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(item.value)}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}