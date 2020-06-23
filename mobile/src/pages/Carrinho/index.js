import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, FlatList, Image, Button, TouchableOpacity } from 'react-native';

import styles from './styles';
import imag from '../../assets/batata.jpg';

export default function Carrinho() {
    const navigation = useNavigation();

    function navigateToCardapio() {
        navigation.navigate('Cardapio');
    }

    function navigateToTemporizador() {
        navigation.navigate('Temporizador');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={navigateToCardapio}
            >
                <AntDesign name="arrowleft" size={26} style={styles.voltar} />
            </TouchableOpacity>
            <Text style={styles.title}>Meu Carrinho</Text>

            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={restaurante => String(restaurante)}
                showsVerticalScrollIndicator={false}
                style={styles.lista}
                renderItem={() => (

                    <View style={styles.itens}>
                        <Image source={imag} style={styles.imagem} />

                        <View style={styles.textBody}>
                            <Text style={[styles.titulo, { marginTop: 0 }]}>Batata Rústica</Text>
                            <Text style={styles.quant}>Quantidade: 2</Text>
                        </View>
                        <View style={styles.textBody}>
                            <Text style={styles.preco}>R$ 6,90</Text>
                            <TouchableOpacity
                                onPress={navigateToTemporizador}
                            >
                                <MaterialCommunityIcons name="trash-can-outline" size={20} style={styles.delet} />
                            </TouchableOpacity>
                        </View>

                    </View>

                )}
            />

            <View style={styles.linha}>
                <Text style={styles.cinza}>Total: </Text>
                <Text style={styles.roxo}>R$ 40,00</Text>
            </View>
            <View style={styles.centro}>
                <Text style={styles.aviso}>Seu pedido começará a ser preparado</Text>
                <Text style={styles.aviso}>assim que você entrar no restaurante</Text>
            </View>
        </View>
    );
}