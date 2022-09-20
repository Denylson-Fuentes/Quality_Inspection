import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../Screens/Login';
import SignupScreen from '../Screens/Signup';


const Tab = createBottomTabNavigator();


const AuthNavigator = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen component={LoginScreen} name  = 'Login'/>
            <Tab.Screen component={SignupScreen} name = 'Signup'/>

        </Tab.Navigator>
    )
}

export default AuthNavigator;