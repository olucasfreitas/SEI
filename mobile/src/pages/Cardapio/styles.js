import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        backgroundColor: '#FFF',
        height: 230,
    },

    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    img: {
        height: 100,
        width: 100,
    },

    imagem: {
        height: 80,
        width: 80,
    },

    voltar: {
        paddingTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 10,
        color: '#643853'
    },

    centro: {
        alignItems: 'center',
    },

    contador: {
        color: '#643853',
        marginTop: 35,
        fontSize: 17,
        fontWeight: 'bold'

    },

    codigo: {
        padding: 4,
        backgroundColor: '#643853',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
        marginBottom: 20,
    },

    cod: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
    },

    itens: {
        margin: 20,
        backgroundColor: '#FFF',
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        borderRadius: 8,
        elevation: 8,
    },

    textBody: {
        alignItems: 'center',
        paddingHorizontal: 40,
    },

    titulo: {
        color: '#643853',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 0,
        marginBottom: 10,
    },

    aviso: {
        color: '#B0B0B0',
        fontSize: 14, 
        textAlign: 'center',
    },

    nome: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 25,
        color: '#B0B0B0',
    },  
    
    preco: {
        color: '#B22222'
    },
});