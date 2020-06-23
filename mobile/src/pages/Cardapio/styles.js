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

    imagem: {
        height: 100,
        width: 100,
    },

    voltar: {
        paddingTop: Constants.statusBarHeight + 5,
        paddingHorizontal: 10,
        color: '#643853'
    },

    centro: {
        alignItems: 'center',
    },

    contador: {
        color: '#643853',
        marginTop: 40,
        fontSize: 17,
        fontWeight: 'bold'

    },

    codigo: {
        backgroundColor: '#643853',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },

    cod: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
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
    }
});