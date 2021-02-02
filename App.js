import 'react-native-gesture-handler';
import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hooks from './Hooks';

const Stack = createStackNavigator();

const App = ({
  params,
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'hooks'}
          component={Hooks}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
