import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Temporizador(){
    const navigation = useNavigation();

    function navigateToMenu(){
        navigation.navigate('Menu');
    }


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Chegou sua vez</Text>
            <Text style={styles.subtitulo}>Tempo Restante</Text>

            <CountDown
                until={60 * 3 + 0}
                size={45}
                onFinish={navigateToMenu}
                digitStyle={{backgroundColor: '#FFF'}}
                digitTxtStyle={{color: '#643853'}}
                timeToShow={['M', 'S']}
                timeLabels={{m: '', s: ''}}
                style={styles.timer}
            />
            
            <View style={styles.centro}>
                <Text style={styles.aviso}>Por favor vá à recepção</Text>
                <Text style={styles.aviso}>e apresente o código abaixo</Text>
                <View style={styles.fila}>
                    <Text style={styles.contador}>H7DG8</Text>
                </View>
                <Text style={styles.aviso2}>Se você não chegar lá em 3 minutos</Text>
                <Text style={styles.aviso2}>será retirado automaticamente da fila</Text>
            </View>
        </View>
    );
}