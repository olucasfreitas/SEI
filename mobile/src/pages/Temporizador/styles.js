import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1
    },

    voltar: {
        paddingTop: Constants.statusBarHeight + 5,
        paddingLeft: 10,
        color: '#643853'
    },

    title: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: 80,
        color: '#643853',
        fontWeight: 'bold',
    },

    subtitulo: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 2,
        color: '#C0C0C0',
        fontWeight: 'bold',
    },

    timer: {
        marginTop: 30,
        marginBottom: 30,
        
    },

    aviso: {
        color: '#643853',
        fontSize: 20, 
    },

    aviso2: {
        color: '#B0B0B0',
        fontSize: 17, 
    },

    centro: {
        alignItems: 'center'
    },

    titulo: {
        color: '#643853',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10,
        marginBottom: 20,
    },

    fila: {
        marginTop: 30,
        width: 250,
        padding: 18,
        borderRadius: 8,


        backgroundColor: '#FFF',
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    contador: {
        color: '#643853',
        fontWeight: 'bold',
        fontSize: 55,
    },
});