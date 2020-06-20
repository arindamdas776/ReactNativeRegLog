import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native';;



import Signup from './screen/signup';
import Login from './screen/Login';

import Loading from './screen/loading';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { AsyncStorage } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
      >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}