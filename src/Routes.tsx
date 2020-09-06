import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './view/Dashboard';
import Home from './view/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import IncluirLancamento from './view/IncluirLancamento';
import styles from './view/Dashboard/styles';
import { View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const AppStack = createStackNavigator();

const Routes = () => {
  return (

    <NavigationContainer>

      <Tab.Navigator 
        initialRouteName="Saldo"
        shifting={true}        
        screenOptions={{
          tabBarColor: "#1C1C1C"
        }}>        
        <Tab.Screen name="Home" component={stackNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={20}/>
            )
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="book" color={color} size={20}/>
            )
          }}  
        />               
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const stackNavigator = () => {
  return (

      <AppStack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            "height": 25,
          },        
          headerTitleStyle: {
            "color" : 'white'
          }
        }}>
        <AppStack.Screen name="Home" component={Home}
        options={{
          headerBackTitleVisible: false,
          headerShown: false
        }}></AppStack.Screen>
        <AppStack.Screen name="IncluirLancamento" component={IncluirLancamento}></AppStack.Screen>
      </AppStack.Navigator>

  )
}

export default Routes; 