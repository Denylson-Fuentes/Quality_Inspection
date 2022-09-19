import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/Home';
import SignupScreen from './Screens/Signup';
import LoginScreen from './Screens/Login'

const Stack  = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class Navigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            logged : false,
            count : 0,
        }
        this.updateStatus = this.updateStatus.bind(this);
    }

    updateStatus = () => {
        this.setState({
            logged: !this.state.logged,
            count: this.state.count +1
        })
    }

    render(){
        
        const isLoggedIn = this.state.logged;

        if (isLoggedIn) {
            return(
                <NavigationContainer>
                    <Tab.Navigator 
                        initialRouteName='Home'
                    >
                        <Tab.Screen name = 'Home' component={HomeScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
            )
        }else{
            return (
                <NavigationContainer>
                    <Tab.Navigator 
                        initialRouteName='Login'
                    >
                        <Tab.Screen name = 'Login' >
                            {(props) => <LoginScreen 
                                            Count = {this.state.count} 
                                            isLogged = {isLoggedIn}  
                                            updateStatus = {this.updateStatus}
                                        />
                            }
                        </Tab.Screen>
                        <Tab.Screen 
                            name = 'Signup' 
                            component={SignupScreen}
                        />
                        
                    </Tab.Navigator>
                </NavigationContainer>
            )
        }
    }
}

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

export default Navigator;