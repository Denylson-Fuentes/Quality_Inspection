import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    render(){
        return (
            <View >
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main :{
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default Login;