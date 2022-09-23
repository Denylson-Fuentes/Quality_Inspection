import React, { Component } from "react";


class TableLayout extends Component{
    constructor(props){
        super(props);
        console.log(this)
    }

    render(){
        return (
            {
                this.props.data.map( item => {
                    return(
                        <DataTable.Row  key = {item.Number}>
                            <DataTable.Cell style={styles.cell} textStyle={styles.cell_text} numeric>
                                <Text style={{ color: "#9a73ef" }}>
                                    {item.Number}
                                </Text>
                            </DataTable.Cell>

                            <DataTable.Cell style={styles.cell} textStyle={styles.cell_text} >
                                <Text style={{ color: "#9a73ef" }}>
                                    {item.Description}
                                </Text>
                            </DataTable.Cell>
                            
                            <DataTable.Cell  style={styles.cell} textStyle={styles.cell_text}>
                                <Text style={{ color: "#9a73ef" }}>
                                    {item.Status}
                                </Text>
                            </DataTable.Cell>
                        </DataTable.Row>
                    )
                })
            }
        )
    }
}


export default TableLayout;
