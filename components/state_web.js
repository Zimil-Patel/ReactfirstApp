import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Car extends Component{
    constructor(props){
        super(props);
        this.state = {
            brand: props.brand,
            color: props.color,
            model: props.model
        };
    }

    changeColorState = (color) => {
        this.setState({color: color});
    }

    render() {
        return(
            <View>
                <Text>
                    My facourtie car details
                </Text>

                <Text>
                    Brand: {this.state.brand}
                </Text>

                <Text>
                    color: {this.state.color}
                </Text>

                <Text>
                    model: {this.state.model}
                </Text>

                <Button
                    title="Chnage Color"
                    onPress = {()=>this.changeColorState("White")}
                />

                
            </View>
        );
    }
}

export default Car;