import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './Home';
import ListPage from './List';
import DetailsPage from './Details';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="List" component={ListPage} />
      <Stack.Screen name="Details" component={DetailsPage} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
