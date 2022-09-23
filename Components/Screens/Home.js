import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useLogin } from '../Context/LoginProvider';

var table_1 = [
    {Number : 156487, Description : "part for airplane landing gear", Status : "In-progress"},
    {Number : 246876, Description : "disk for conveyor belt rotator", Status : "Damaged" },
    {Number : 867865, Description : "bolt for table set", Status: "Complete"},
    {Number : 135468, Description : "metal plate for helicopter propeller", Status : "Starting"},
    {Number : 345442, Description : "knob for oven", Status : "In-Progress"},
]

var table_2 = [
    {Machine : "Conveyor_1", Status : "Functional"},
    {Machine : "Arm_5", Status : "Non-Functional"},
    {Machine : "Solder_3", Status: "Functional"},
    {Machine : "Sorter_1", Status : "Non-Functional"}
]

var table_3 = [
    {Number : 541885, Status : "In-Progress"},
    {Number : 412542, Status : "Complete"},
    {Number : 123265, Status : "Starting"},
    {Number : 212368, Status : "In-Progress"}
]

const Workorder = (item) =>{
    return (
        <DataTable.Row  key = {item.list.Number}>
            <DataTable.Cell style={styles.cell} textStyle={styles.cell_text} numeric>
                <Text style={{ color: "#9a73ef" }}>
                    {item.list.Number}
                </Text>
            </DataTable.Cell>

            <DataTable.Cell style={styles.cell} textStyle={styles.cell_text} >
                <Text style={{ color: "#9a73ef" }}>
                    {item.list.Description}
                </Text>
            </DataTable.Cell>
            
            <DataTable.Cell  style={styles.cell} textStyle={styles.cell_text}>
                <Text style={{ color: "#9a73ef" }}>
                    {item.list.Status}
                </Text>
            </DataTable.Cell>
        </DataTable.Row>
    )
}

const  HomeScreen  = () =>{
    const {user ,logout} = useLogin()

    return (
        <View >
            
            <Text>This is the Home Screen</Text>
            <Text>{user.name}</Text>

            <DataTable>

                <DataTable.Header>
                    <DataTable.Title>Number</DataTable.Title>
                    <DataTable.Title>Description</DataTable.Title>
                    <DataTable.Title>Status</DataTable.Title>
                </DataTable.Header>

                {table_1.map((item, i) =>{
                    return <Workorder list = {item} key = {i} />
                    })
                }

            </DataTable>



            <Button 
                onPress={ () => logout()} 
                title = "Log out"
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

    header: {
        flex: 2,
        backgroundColor: 'orange',
        justifyContent: 'center',
        width: "auto",

        
    },

    body:{
        flex: 3,
        backgroundColor: 'yellow'

    },

    cell:  {
        flex: 0.5, 
        justifyContent: 'space-between', 
        borderWidth: 1, borderColor: "#9a73ef"
    },

    cell_text : {
        fontFamily:"Avenir", 
        fontSize:20,
    }
})

export default HomeScreen;