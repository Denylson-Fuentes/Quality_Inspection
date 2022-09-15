import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Navigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            logged : false,
        }
    }

    render(){
        return (
            <View style = {styles.main}>
                <View style = {styles.header}>
                    <Text style = {styles.headline}>This is the Navigator</Text>
                </View>
            </View>
        )
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