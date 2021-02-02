import 'react-native-gesture-handler';
import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hooks from './Hooks';
import StateHook from './StateHook';
import EffectHook from './EffectHook';
import DataLoaderInClass from './DataLoaderInClass';
import DataLoaderInFunction from './DataLoaderInFunction';
import CustomReactHook from './CustomReactHook';
import ToDoHome from './ToDoListWithHook/ToDoHome';

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
        <Stack.Screen
          name={'stateHook'}
          component={StateHook}
        />
        <Stack.Screen
          name={'effectHook'}
          component={EffectHook}
        />
        <Stack.Screen
          name={'dataLoaderInClass'}
          component={DataLoaderInClass}
        />
        <Stack.Screen
          name={'dataLoaderInFunction'}
          component={DataLoaderInFunction}
        />
        <Stack.Screen
          name={'customReactHook'}
          component={CustomReactHook}
        />
        <Stack.Screen
          name={'toDoHome'}
          component={ToDoHome}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
