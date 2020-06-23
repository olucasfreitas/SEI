import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import img from '../../assets/quintal.png';

export default function Menu() {
    const [restaurantes, setRestaurantes] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function navigateToRestaurante(restaurante) {
        navigation.navigate('Restaurante', { restaurante });
    }

    async function loadRestaurantes() {
        if (loading) {
            return;
        }

        setLoading(true);

        const response = await api.get('estabelecimentos/list', {
            params: { page }
        });

        setRestaurantes([...restaurantes, ...response.data]);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadRestaurantes();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estabelecimentos</Text>

            <FlatList
                data={restaurantes}
                keyExtractor={restaurante => String(restaurante.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadRestaurantes}
                onEndReachedThreshold={0.2}
                renderItem={({ item: restaurante }) => (
                    <TouchableOpacity
                        onPress={() => navigateToRestaurante(restaurante)}
                    >
                        <View style={styles.menu}>
                            <Image source={img} />
                            <View style={styles.textBody}>
                                <Text style={[styles.restaurante, { marginTop: 0 }]}>{restaurante.name}</Text>
                                <Text style={styles.categoria}>{restaurante.description}</Text>

                                <View style={styles.time}>
                                    <AntDesign name="clockcircle" size={16} />
                                    <Text style={styles.restaurante}>   45 a 60 min</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
}