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

    time: {
        flexDirection: 'row',
        marginTop: 10,
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