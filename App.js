
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Search from './src/Pages/Search';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      <Stack.Screen
            name="Procurar"
            component={Search}
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

