import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {AntDesign, Feather} from '@expo/vector-icons';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import imag from '../../assets/batata.jpg';

import img from '../../assets/quintal.png';

export default function Cardapio(){
    const navigation = useNavigation();

    function navigateToMenu(){
        navigation.navigate('Menu');
    }

    function navigateToItem(){
        navigation.navigate('Item');
    }
    function navigateToCarrinho(){
        navigation.navigate('Carrinho');
    }

    function twoOptionAlertHandler(){
        Alert.alert(
          'Sair da Fila',
          'Você deseja realmente sair da fila? Sua posição será perdida',
          [
            {text: 'Sim', onPress: navigateToMenu},
            {text: 'Não', onPress: () => {}},
          ],
          { cancelable: false }
        );
      }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.linha}>
                    <TouchableOpacity
                        onPress={twoOptionAlertHandler}
                    >
                        <Feather name="log-out" size={26} style={styles.voltar}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={navigateToCarrinho}
                    >
                        <AntDesign name="shoppingcart" size={26} style={styles.voltar}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.centro}>
                    <Image source={img} style={styles.imagem}/>
                    <Text style={styles.contador}>Pessoas na sua frente: 9</Text>
                </View>
            </View>
            <View style={styles.codigo}>
                <Text style={styles.cod}>Seu código é: H7DG8</Text>
            </View>
            <FlatList 
                data={[1, 2, 3]}
                keyExtractor={restaurante => String(restaurante)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <TouchableOpacity
                    onPress={navigateToItem}
                    >
                        <View style={styles.itens}>
                            <Image source={imag} style={styles.imagem}/>
                            <View style={styles.textBody}>
                                <Text style={[styles.titulo, {marginTop: 0}]}>Batata Rústica</Text>
                                <Text style={styles.preço}>R$ 6,90</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}