import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ExCss from './styles'

export default CSSExample = () => {
    return(
        <View style={{margin:30}}>
            <Text style={{color: 'orange', backgroundColor:'grey', fontSize:20, padding:10}}>Hello World (Inline CSS)</Text>

            <Text style={InCss.textBox}>Hello World! (Internal CSS)</Text>

            <Text style={[ExCss.textStyle, InCss.textBox]}>Hello World! (External CSS)</Text>
        </View>
    );
}


// Internal CSS
const InCss = StyleSheet.create({
    textBox:{
        color:'blue',
        backgroundColor:'black',
        padding:20,
        margin:20,
        height:100,
        fontSize:20,
        textAlignVertical:'center',
        textAlign:'center',
        borderRadius:20,
        borderColor:'red',
        borderWidth:2,
        
    }
});