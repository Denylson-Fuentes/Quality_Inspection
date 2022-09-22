import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useLogin } from '../Context/LoginProvider';



const LoginScreen  = () =>{
    const {login} = useLogin()


    const [userInfo, setUserInfo] = useState({
        email:  '',
        password: '',
    })

    const {email, password}  = userInfo;

    const handleOnChangeText = (value, fieldName) =>{
        setUserInfo({...userInfo, [fieldName]:value})
    }

    return (
        <View >
            <Text> This is the Login Screen</Text>

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

                
                <Button 
                    onPress={ () => login(email)} 
                    title = "Login"
                    color = '#9a73ef'
                    
                />
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

export default LoginScreen;