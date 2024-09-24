import React from 'react';
import { TextInput, View, StatusBar, Button, ScrollView, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const LoginPage = ({navigation}) => {

    return (
        <View style={{ height: "100%", paddingHorizontal: 30, paddingVertical: 30 }}>
            <Image source={require('../../assets/bmu.jpg')} style={styles.image} />
            <Text style={styles.headingStyle}>Login Page</Text>
            <Text style={styles.instructionText}>Sign in to access your academic dashboard, course materials, attendance, and more.</Text>

            <Text style={[styles.instructionText, { marginTop: 40 }]}>Enter your email</Text>
            <TextInput style={styles.input} selectionColor="purple" />

            <Text style={[styles.instructionText, { marginTop: 20 }]}>Enter your password</Text>
            <TextInput style={styles.input} selectionColor="purple" secureTextEntry={true} />


            <TouchableHighlight
                style={[styles.button, { alignSelf: 'center' }]}
                underlayColor="#021f44"
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>


            <View style={styles.rowConatiner}>
                <Text style = {styles.instructionText}>Not registered yet?</Text>
                <Text style = {[styles.instructionText, {color:'blue'}]}> Click here</Text>
            </View>

        </View>
    );
}

export default LoginPage;

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
        image: {
            height: 160,
            width: 360,
        },
        input: {
            height: 40,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            fontSize: 16,
            backgroundColor: '#f9f9f9',
            marginTop: 8,

        },
        rowConatiner: {
            alignSelf: 'center',
            flexDirection: 'row',
            margin: 0,
            alignContent: 'center'
        },
        columnContainer: {
            flexDirection: 'column',
            margin: 0,
            alignContent: 'space-around'
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