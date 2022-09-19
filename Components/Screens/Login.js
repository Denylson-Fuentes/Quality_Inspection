import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    onPress = () =>{
        this.props.updateState()
    }

    render(){
        return (
            <View >
                <Text> This is the Login Screen</Text>
                    {/* <Button
                    onPress={this.onPress}
                    title="Increase Count"
                    color="#841584"
                    /> */}
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

export default LoginScreen;