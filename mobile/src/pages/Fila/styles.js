import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        backgroundColor: '#FFF',
        height: 230,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
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

    centro: {
        alignItems: 'center'
    },

    titulo: {
        color: '#643853',
        fontWeight: 'bold',
        fontSize: 27,
        marginTop: 10,
        marginBottom: 20,
    },

    fila: {
        width: 270,
        padding: 10,
        borderRadius: 12,


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
        fontSize: 85,
    },

    input: {
        backgroundColor: '#FFF',
        height: 50,
        width: 270,
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

    button: {
        width: 320,
        marginTop: 50,
    },
});