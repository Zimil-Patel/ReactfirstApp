import { StatusBar } from 'expo-status-bar';
import React from 'react-native'
import {View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native'

const HomePage = ({navigation}) => {

    return (
        <View style = {{height: "100%", margin: 30}}>
            <View>
            <Text style={styles.headingStyle}>Welcome</Text>
            <Text style={styles.instructionText}>Hey There! StaR BoY</Text>

            <TouchableHighlight
                style={[styles.button, { alignSelf: 'center' }]}
                underlayColor="#021f44"
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableHighlight>


            </View>
        </View>
    );
}

export default HomePage;

const styles = StyleSheet.create(
    {

        headingStyle: {
            fontSize: 30,
            fontWeight: '800',
            marginTop: 16,
        },
        instructionText: {
            fontSize: 16,
            color: '#555',
            marginTop: 6,
        },
  
        rowConatiner: {
            alignSelf: 'center',
            flexDirection: 'row',
            margin: 0,
            alignContent: 'center'
        },
   
        button: {
            marginVertical: 30,
            backgroundColor: '#043963',
            paddingVertical: 15,
            paddingHorizontal: 40,
            borderRadius: 8,
            width: '60%',
            alignItems: 'center',
        },
        buttonText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
        },
    }
);