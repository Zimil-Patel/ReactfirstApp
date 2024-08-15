import React from 'react';
import { StyleSheet, TextInput} from 'react-native';


const InputField = (props, {setData}) => {
    return(
            <TextInput
                style={style.inputStyle}
                placeholder={props.name}
                secureTextEntry={props.isVisible}
                value={props.value}
                onChangeText={(value)=>setData(value)}
            >   
            </TextInput>
    );
}


const style = StyleSheet.create(
    {

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

export default InputField;