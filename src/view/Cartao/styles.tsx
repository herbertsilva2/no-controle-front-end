import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: 10,  
        backgroundColor: 'white',
        borderRadius: 20,
        height: 200
    },
    mainText: {
        fontSize: 25,
        color: "#2E9AFE",
        alignSelf: 'center'
    },
    viewExtrato: {
        flex: 1,      
        marginTop: 10        
    },
    touchableExtrato: {        
        flexDirection: 'row',
        justifyContent: "space-between",  
    },
    textExtratoLeft: {
        color: "#3ADF00",
        padding: 15
    },
    textExtratoRight: {
        color: "#3ADF00",
        padding: 15        
    }
});