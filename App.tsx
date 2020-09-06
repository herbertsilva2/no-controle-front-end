import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store';

import Routes from './src/Routes';

const App = () => <Provider store={store}><Routes/></Provider>

export default App;