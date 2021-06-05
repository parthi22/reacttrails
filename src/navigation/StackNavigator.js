import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/home';
import {Detail} from '../screens/detail';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
