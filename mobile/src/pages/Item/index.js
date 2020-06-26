import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TextInput, Image, Button, TouchableOpacity, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import img from '../../assets/batata4.jpg';

export default function Item() {
    const [quantity, setQuantity] = useState(1);
    const route = useRoute();
    const navigation = useNavigation();

    const user = route.params.id;
    const pedido = route.params.pedido;

    function navigateToCardapio() {
        navigation.navigate('Cardapio');
    }

    function navigateToCarrinho(user) {
        navigation.navigate('Carrinho', { user });
    }

    async function createPedido(e) {
        e.preventDefault();

        setQuantity(1);
        const data = {
            quantity,
        };

        const response = await api.post('pedidos/create',
            data,
            {
                headers: {
                    Authorization: user,
                    Authorization2: pedido.title,
                    Authorization3: pedido.value
                },
            });

        navigateToCarrinho(user);
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <ImageBackground source={img} style={styles.imagem}>
                            <TouchableOpacity
                                onPress={navigateToCardapio}
                            >
                                <AntDesign name="arrowleft" size={26} style={styles.voltar} />
                            </TouchableOpacity>
                            <View style={styles.centro}>
                                <Text style={styles.titulo}>{pedido.title}</Text>
                                <Text style={styles.valor}>R$ 20,00</Text>
                            </View>
                        </ImageBackground>
                    
                    </View>
                    
                    <View style={styles.centro}>
                        <Text style={styles.descricao}>Batata corte fino para acompanhar seu pedido principal</Text>
                        <Text style={styles.obs}>Deseja adicionar alguma observação?</Text>
                        <View style={styles.input}>
                            <TextInput placeholder=" Ex: sem cebola" />
                        </View>
                        <View style={styles.button}>
                            <Button onPress={createPedido} color='#643853' title="Adicionar" />
                        </View>
                    </View>
                
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}