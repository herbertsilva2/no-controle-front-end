import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    paddingTop: Constants.statusBarHeight + 20
  },
  scrollView: {
    flex: 1
  }
});