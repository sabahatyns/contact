import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactList from './contact';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="ContactList" component={ContactList} options={{ title: 'Contact List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;