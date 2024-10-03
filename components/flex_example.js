import React from "react";
import { View, StyleSheet, Text } from 'react-native';

const Box = (props) => {
    return (
        <View style={[myStyles.box, { backgroundColor: props.color }]}>
            <Text>{props.name}</Text>
        </View>
    );
}


export default FlexExample = () => {
    return (
        <View style={myStyles.mainContainer}>

            <View style={myStyles.rowContainer}>

                <Box name="Box-1" color="grey" />
                <Box name="Box-2" color="purple" />
                <Box name="Box-2" color="green" />

            </View>

            <View style={myStyles.columnContainer}>

                <Box name="Box-1" color="grey" />
                <Box name="Box-2" color="purple" />
                <Box name="Box-2" color="green" />

            </View>


        </View>
    )
}


const myStyles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            backgroundColor: 'black',
        },

        rowContainer: {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "space-around",
            alignItems: 'center'
        },

        columnContainer: {
            flex: 2,
            flexDirection: "column",
            backgroundColor: "skyblue",
            justifyContent: "space-between",
            alignItems: 'center',
        },

        box: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            width: 100,
        }
    }
);