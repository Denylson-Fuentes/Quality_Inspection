import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthNavigator from './Navigators/AuthNavigator';
import MainNavigator from './Navigators/MainNavigator';

import LoginProvider, { useLogin } from './Context/LoginProvider';

const Navigator = () =>{
    const {isLoggedIn} = useLogin()

    return isLoggedIn ? <MainNavigator/> : <AuthNavigator/>
}


export default Navigator;


const styles = StyleSheet.create({
    main :{
        display: 'flex',
        flex: 1,
        height: "50%",
        backgroundColor: 'turquoise',
        width: 375,
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    headline: {
        textAlign: 'center',
        backgroundColor: 'white'
    }
})