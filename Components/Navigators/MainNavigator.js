import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackView } from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../Screens/Home';



const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return(
        <Tab.Navigator>

            <Tab.Screen component={HomeScreen} name = "Home" />

        </Tab.Navigator>
    )
}

export default MainNavigator