import React from "react";
import { Button, View } from "react-native";

export default ButtonExample2 = () => {

    
    function onFetch(val){
        console.warn(val);
    };

    return (
        <View style={{marginRight: 20, marginTop: 20}}>
            <Button title="Fetch" color={'orange'} onPress={()=>onFetch("Fetching")} />
        </View>
    );
};