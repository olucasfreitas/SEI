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
        marginVertical:18,
        marginHorizontal: 18,
        padding: 24,
        maxWidth: 300,
        borderRadius: 8,
        backgroundColor: '#FFF',
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
        borderRadius: 8,
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