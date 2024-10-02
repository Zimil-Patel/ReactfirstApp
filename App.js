import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import UserDetails from './components/UserDetails';
import ButtonExample from './components/ButtonExample';
import ButtonExample2 from './components/ButtonExample2';
import StateSample from './components/StateSample';
import PropsSample from './components/PropsSample';
import CSSExample from './components/cssExample';
import InputExample from './components/InputExample';
import FormExample from './components/FormExample';
import FlatListExample from './components/FlatListExample';
import LoginPage from './components/LoginPageTask/LoginPage';
import HomePage from './components/LoginPageTask/HomePage';
import Car from './components/state_web';

// Example of navigation
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Login">
//                 <Stack.Screen name="Login" component={LoginPage}  options={{ headerShown: false }}/>
//                 <Stack.Screen name="Home" component={HomePage}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }




export default function App () {
    return <Car brand="Tesla" color="Grey" model="Model S" />
}
