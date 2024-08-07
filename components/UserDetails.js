import React from 'react';
import { View, Text} from 'react-native';


// componets of user details
// resuable, independant, start with capital

const UserDetails = () => {

    const name = 'Star BoY';
    const age = 20;
    const email = "star10@gmail.com";
  
    return (
      <View style={{paddingTop: 20}}>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
        <Text>Email: {email}</Text>
      </View>
    );
  };

export default UserDetails;