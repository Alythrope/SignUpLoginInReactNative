import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';

import Signup from './components/Signup';
import Login from './components/Login';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';



const Stack = createStackNavigator();


const App: () => React$Node = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>

        
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome!' }}  
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Create an account' }}  
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Log In' }}  
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}  
        />
        

        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
