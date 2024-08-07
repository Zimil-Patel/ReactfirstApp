import React from "react";
import { Button, View } from "react-native";

export default ButtonExample = () => {

    
    function onSubmit(){
        console.warn("Submitted");
    };

    return (
        <View style={{marginRight: 20, marginTop: 20}}>
            <Button title="Submit" color={'grey'} onPress={onSubmit} />
        </View>
    );
};