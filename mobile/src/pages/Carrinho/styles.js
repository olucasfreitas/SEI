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
        fontSize: 30,
        marginBottom: 16,
        color: '#643853',
        fontWeight: 'bold',
    },

    imagem: {
        height: 80,
        width: 80,
    },

    itens: {
        margin: 20,
        backgroundColor: '#FFF',
        marginBottom: 8,
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
        paddingHorizontal: 10,
    },

    titulo: {
        color: '#643853',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 0,
        marginBottom: 10,
    },

    quant: {
        color: '#643853',
        fontSize: 15,
    },

    preco: {
        color: '#643853',
        marginLeft: 20,
    },

    delet: {
        color: '#643853',
        marginLeft: 50,
        marginTop: 10,
    },

    lista: {
        maxHeight: 400,
    },
    
    linha: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center'
    },

    centro: {
        marginTop: 10,
        paddingHorizontal: 62
    },

    roxo: {
        color: '#643853',
        fontSize: 27
    },

    cinza: {
        color: '#B0B0B0',
        fontSize: 27
    },

    aviso: {
        color: '#B0B0B0',
        fontSize: 14
    }
});