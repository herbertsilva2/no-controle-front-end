import { StyleSheet } from 'react-native';
import Constants from '../../../node_modules/expo-constants';

export default StyleSheet.create({
    mainView: {
      backgroundColor: 'white',
      height: 200,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20
    },
    mainText: {
        marginTop: Constants.statusBarHeight + 10,
        fontSize: 25,
        color: "#2E9AFE",
        alignSelf: 'center'
    },
    textoValor: {
      padding: 30,
      color: "#2E9AFE",
      fontWeight: 'bold',
      fontSize: 30,
      alignSelf: 'center'
    },
    espacoBotoes: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    viewBotaoReceita: {
      backgroundColor: 'green',
      borderRadius: 20,
      width: 120,
      height: 30
    },
    viewBotaoDespesa: {
      backgroundColor: 'red',
      borderRadius: 20,
      width: 120,
      height: 30
    },
    botaoReceita: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    botaoDespesa: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center'
    }
});