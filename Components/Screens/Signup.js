import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password: "",
            confirmPass: "",
            email: "",

        }
    }

    render(){
        return (
            <View >
                
                <Text> This is the Sign up Screen</Text>
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

export default Signup;