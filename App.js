// import React from 'react';
// import { View, Text, SafeAreaView, Button } from 'react-native';
// import UserDetails from './components/UserDetails';
// import ButtonExample from './components/ButtonExample';
// import ButtonExample2 from './components/ButtonExample2';
// import StateSample from './components/StateSample';
// import PropsSample from './components/PropsSample';
// import CSSExample from './components/cssExample';
// import InputExample from './components/InputExample';
// import FormExample from './components/FormExample';
// import FlatListExample from './components/FlatListExample';
// import LoginPage from './components/LoginPageTask/LoginPage';
// import HomePage from './components/LoginPageTask/HomePage';
// import Car from './components/state_web';
// import flex_example from './components/flex_example';

// // Example of navigation
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();

// // export default function App() {
// //     return (
// //         <NavigationContainer>
// //             <Stack.Navigator initialRouteName="Login">
// //                 <Stack.Screen name="Login" component={LoginPage}  options={{ headerShown: false }}/>
// //                 <Stack.Screen name="Home" component={HomePage}/>
// //             </Stack.Navigator>
// //         </NavigationContainer>
// //     );
// // }




// // export default function App () {
// //     return <Car brand="Tesla" color="Grey" model="Model S" />
// // }


// export default flex_example;

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View, Button} from 'react-native'

const HomeScreen = ({navigation}) => {
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems:'center'}}>

            <Text>HomeSceen</Text>
            <Button title='go to detail page'
                onPress={()=>navigation.navigate('Detail')}
            />

        </View>
    )
}

const DetailScreen = ({navigation}) => {
    return(
        <View style = {{flex: 1, justifyContent: 'center', alignItems:'center'}}>

            <Text>DetailScreen</Text>
            <Button title='go to home page'
                onPress={()=>navigation.goBack()}
            />

        </View>
    )
}


const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name = "Home" component={HomeScreen}/>
                <Stack.Screen name = "Detail" component={DetailScreen}/>

            </Stack.Navigator>


        </NavigationContainer>
    );
}