import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        paddingTop: Constants.statusBarHeight + 5,
        backgroundColor: '#FFF',
        height: 230,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    imagem: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    voltar: {
        marginBottom: 110,
        paddingLeft: 10,
        color: '#FFF'
    },

    centro: {
        alignItems: 'center',
    },

    titulo: {
        color: '#FFF',
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold'
    },

    descricao: {
        color: '#643853',
        fontSize: 20,
    },

    obs: {
        color: 'gray',
        fontSize: 18,
        marginBottom: 10,
    },

    button: {
        width: 300,
        marginTop: 20,
    },

    input: {
        backgroundColor: '#FFF',
        height: 100,
        width: 300,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        borderRadius: 12,
    },

    caixa: {
        width: 300,
        borderRadius: 12,
        marginTop: 40,
        padding: 10,
        backgroundColor: '#FFF',
        marginBottom: 70,
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
});