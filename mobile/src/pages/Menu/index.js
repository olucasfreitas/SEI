import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import img from '../../assets/quintal.png';

export default function Menu(){
    const navigation = useNavigation();

    function navigateToRestaurante(){
        navigation.navigate('Restaurante');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Estabelecimentos</Text>

            <FlatList 
                data={[1, 2, 3]}
                keyExtractor={restaurante => String(restaurante)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <TouchableOpacity
                    onPress={navigateToRestaurante}
                    >
                        <View style={styles.menu}>
                            <Image source={img}/>
                            <View style={styles.textBody}>
                                <Text style={[styles.restaurante, {marginTop: 0}]}>Quintal da Martini</Text>
                                <Text style={styles.categoria}>Pizzaria</Text>

                                <View style={styles.time}>
                                    <AntDesign name="clockcircle" size = {16}/>
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