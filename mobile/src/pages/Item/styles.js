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
        justifyContent: "center",
        
    },

    voltar: {
        marginBottom: 85,
        paddingLeft: 10,
        color: '#FFF'
    },

    centro: {
        alignItems: 'center',
    },

    titulo: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold'
    },

    valor: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 5,
    },

    descricao: {
        color: '#643853',
        fontSize: 20,
        paddingHorizontal: 30,
        marginTop: 40,
        marginBottom: 60,
        textAlign: 'center',
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
        height: 150,
        width: 300,
        padding: 7,
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

    
});