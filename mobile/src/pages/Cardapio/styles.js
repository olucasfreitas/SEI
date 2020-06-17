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

    imagem: {
        height: 100,
        width: 100,
    },

    voltar: {
        paddingTop: Constants.statusBarHeight + 5,
        paddingLeft: 10,
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