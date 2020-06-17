import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    title: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 16,
        color: '#643853',
        fontWeight: 'bold',
    },

    item: {
        flexDirection: 'row',
        alignContent: 'center',
    },

    menu: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },

    textBody: {
        alignItems: 'center',
        paddingHorizontal: 40,
    },

    time: {
        flexDirection: 'row',
    },

    restaurante: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    categoria: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
});