import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../pages/Details';
import Profile from '../pages/Profile/inde';
import List from '../pages/List';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator (){
    return (
        <Tab.Navigator
            initialRouteName='Profile'
            screenOptions={{
                headerShown: false 
            }}
            tabBar={()=> <View />}
        >
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='List' component={List} />
        </Tab.Navigator>
    )
}

function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='MainTabs' component={TabNavigator}/>
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
    )
};

export default Routes;