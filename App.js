import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Components/LoginScreen';
import SignUpScreen from './Components/SignUpScreen';
import MainMenuScreen from './Components/MainMenuScreen';
import NewAnimalScreen from './Components/NewAnimalScreen';
import AnimalDetailScreen from './Components/AnimalDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="NewAnimal" component={NewAnimalScreen} />
        <Stack.Screen name="AnimalDetail" component={AnimalDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
