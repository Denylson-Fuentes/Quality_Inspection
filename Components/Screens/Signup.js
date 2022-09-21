import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useLogin } from '../Context/LoginProvider';

const SignupScreen  = () => {
    const {setIsLoggedIn} = useLogin()
    const [userInfo, setUserInfo] = useState({
        email:  '',
        password: '',
        confirmPassword: '',
    })

    const {email, password, confirmPassword}  = userInfo;

    const handleOnChangeText = (value, fieldName) =>{
        setUserInfo({...userInfo, [fieldName]:value})
    }

    onPress = () =>{
        setIsLoggedIn(true)
    }

    return (
        <View>
            <Text> This is the Sign up Screen</Text>

            <TextInput
                style = {styles.input}
                placeholder='Email'
                placeholderTextColor = "#9a73ef"
                value = {email}
                onChangeText = {value => handleOnChangeText(value, 'email')}

            /> 

            <TextInput
                style = {styles.input}
                placeholder='Password'
                placeholderTextColor = "#9a73ef"
                value = {password}
                onChangeText = {value => handleOnChangeText(value, 'password')}
            /> 

            <TextInput
                style = {styles.input}
                placeholder='Confirm Password'
                placeholderTextColor = "#9a73ef"
                value = {confirmPassword}
                onChangeText = {value => handleOnChangeText(value, 'confirmPassword')}
            /> 
            
            <TouchableOpacity
                style = {styles.submitButton}
                onPress = {onPress}
            >
                <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main :{
        flex: 1,
        backgroundColor: '#fff',
    },

    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },

    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },

    submitButtonText:{
        color: 'white'
    },
})

export default SignupScreen;