import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import styles from './styles';
import InputField from './InputField';


const FormExample = () => {


    //states
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [pass, setPass] = useState("");
    const [isVisible, setVisibility] = useState(true);
    const [display, setDisplay] = useState(false);


    // show/hide password
    function showHidePass() {
        setVisibility(!isVisible);
        console.log("Clicked");
    }

    function clearForm() {
        setName("");
        setemail("");
        setPass("");
        setDisplay(false);
    }
    
    function printData() {
        setDisplay(true);
    }

    return (
        <View style={style.screenStyle}>

            <Text style={styles.titleText}>Form Example</Text>

            <TextInput
                style={style.inputStyle}
                placeholder="Enter Name"
                value={name}
                onChangeText={(value)=>setName(value)}
        
            />   
            <TextInput
                style={style.inputStyle}
                placeholder="Enter Email"
                value={name}
                onChangeText={(value)=>setemail(value)}
            />   
            <TextInput
                style={style.inputStyle}
                placeholder="Enter Password"
                secureTextEntry={props.isVisible}
                value={name}
                onChangeText={(value)=>setPass(value)}
            />   

            <View style={style.buttonStyle}>

                <Button title="PRINT" onPress={printData} color='green'/>

            </View>

            <View style={style.buttonStyle}>

                <Button title="CLEAR" onPress={clearForm} color='red'/>

            </View>

            <View style={style.buttonStyle}>

                <Button title="SHOW / HIDE" onPress={showHidePass} />

            </View>

            {
                display?
                <View>
                    <Text style={style.displayDataStyle}>Your name is : {name}</Text>
                    <Text style={style.displayDataStyle}>Your email is : {email}</Text>
                    <Text style={style.displayDataStyle}>Your pass is : {pass}</Text>
                </View> : null
            }

        </View>
    );
}


const style = StyleSheet.create(
    {
        screenStyle: {
            paddingVertical: 30
        },

        buttonStyle: {
            width: 160,
            borderRadius: 20,
            marginLeft: 12,
            marginBottom: 10
        },

        displayDataStyle:{
            fontSize:18,
            fontWeight:'500',
            marginLeft:20,
            marginBottom:10
        },

        inputStyle:{
            height:50,
            borderColor:'black',
            borderWidth:2,
            borderRadius:8,
            paddingHorizontal:12,
            fontSize:16,
            margin:8
        }
    }
);

export default FormExample;