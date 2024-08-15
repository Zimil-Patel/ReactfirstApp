import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import ExCss from './styles';

export default InputExample = () => {

    // name state
    [name, setName] = useState("");


    function clearText (){
        setName("");
    }

    return(

        <View>

            <Text style={ExCss.titleText}>Input Handling</Text>

            <Text style={styles.bodyStyle}>Your name is: {name}</Text>

            <TextInput style={styles.inputField} placeholder='Enter your name' value={name} onChangeText={(value)=>setName(value)}></TextInput>

            <Button title="Clear" onPress={clearText}/>
        </View>

    );
}


const styles = StyleSheet.create(
    {
        bodyStyle: {
            fontSize:20,
            paddingLeft:20,
        },

        inputField: {
            backgroundColor: 'grey',
            borderColor: 'black',
            borderWidth:2,
            borderRadius:10,
            margin: 20,
            height:60,
            textAlign:'left',
            textAlignVertical:'center',
            paddingLeft:10,
            fontSize:18,
        },
    }
)