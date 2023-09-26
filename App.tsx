import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import EnterCountry from './EnterCountry';
import CountryClouds from './CountryClouds';

const Stack = createNativeStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CountryClouds'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EnterCountry" component={EnterCountry} />
        <Stack.Screen name="CountryClouds" component={CountryClouds} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;