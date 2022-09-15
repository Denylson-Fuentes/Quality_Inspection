import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

var table_1 = [
    {"#" : 156487, "Description" : "part for airplane landing gear", "Status" : "In-progress"},
    {"#" : 246876, "Description" : "disk for conveyor belt rotator", "Status" : "Damaged" },
    {"#" : 867865, "Description" : "bolt for table set", "Status": "Complete"},
    {"#" : 135468, "Description" : "metal plate for helicopter propeller", "Status" : "Starting"},
    {"#" : 345442, "Description" : "knob for oven", "Status" : "In-Progress"},
]

var table_2 = [
    {"Machine" : "Conveyor_1", "Status" : "Functional"},
    {"Machine" : "Arm_5", "Status" : "Non-Functional"},
    {"Machine" : "Solder_3", "Status": "Functional"},
    {"Machine" : "Sorter_1", "Status" : "Non-Functional"}
]

var table_3 = [
    {"#" : 541885, "Status" : "In-Progress"},
    {"#" : 412542, "Status" : "Complete"},
    {"#" : 123265, "Status" : "Starting"},
    {"#" : 212368, "Status" : "In-Progress"}
]

class HomeScreen extends Component{

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

    header: {
        flex: 2,
        backgroundColor: 'orange',
        justifyContent: 'center',
        width: "auto",

        
    },

    body:{
        flex: 3,
        backgroundColor: 'yellow'

    }
})

export default HomeScreen;