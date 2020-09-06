import { StyleSheet } from 'react-native';
// import Constants from './node_modules/expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#343434'
  },
  cardText: {
    // flex: 1
  },
  cardSaldo: {
      backgroundColor: '#606161',      
      borderRadius: 8,
      marginBottom: 20,
      height: 200
  },
  textSaldo: {
      marginTop: 30,
      fontSize: 25,
      paddingHorizontal: 10,
      paddingVertical: 5, 
      alignSelf: 'center',
      color: 'white'
  },
  textValor: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 25, 
    alignSelf: 'center',
    color: '#00FF00'
  },
});