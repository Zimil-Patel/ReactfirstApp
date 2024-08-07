import { useState, React } from "react";
import { Text, View, Button } from "react-native";

export default StateSample = () => {

    const cars = ['Ertiga', 'baleno', 'i10', 'ford', 'swift'];
    let [index, setIndex] = useState(0);
    let [currentCar, setCar] = useState(cars[index]);
    let length = cars.length;

    function previous() {
        if (index > 0) {
            setIndex(index--);
            setCar(cars[index]);
        }
        else
            console.warn("Index is 0")
    };

    function next() {
        if (index < length) {
            setIndex(index++);
            setCar(cars[index]);
        }
        else
            console.warn("Reached Limit")
    };

    return (
        <View style={{ paddingTop: 40, paddingLeft: 16, paddingRight: 20 }}>
            <Text style={{ fontSize: 20 }} >Current car : {currentCar}</Text>

            <View style={{ paddingTop: 20 }}></View>
            <Button title="Next" color={'grey'} onPress={next} />

            <View style={{ paddingTop: 20 }}></View>
            <Button title="Previous" color={'orange'} onPress={previous} />

        </View>
    );
}