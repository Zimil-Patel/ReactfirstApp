import { useState } from "react";
import { Button, View, Text } from "react-native";

export default PropsSample = () => {

    let [name, setName] = useState("Zimil Patel");

    return (
        <View style={{ margin: 40 }}>
            <Button title="Change User" onPress={() => {
                if (name == "Zimil Patel") {
                    setName("Star BoY");
                } else {
                    setName("Zimil Patel");
                }
            }} />
            <User name={name} />
        </View>
    )
}

const User = (props) => {
    return (
        <View style={{ margin: 20 }}>
            <Text>{props.name}</Text>
        </View>
    );
}