import { StyleSheet } from 'react-native';
import Constants from '../../../node_modules/expo-constants';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,    // paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#1C1C1C'
    // backgroundColor: '#2E9AFE'
  },
  scrollView: {
    flex: 1
  }
});