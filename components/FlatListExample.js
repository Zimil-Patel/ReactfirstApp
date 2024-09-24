import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import styles from './styles';

const FlatListExample = () => {

    const userList = [
        {
            'id': 1,
            'name': 'Star Boy'
        },
        {
            'id': 2,
            'name': 'Zimil Patel'
        },
        {
            'id': 3,
            'name': 'Jash Katariya'
        },
        {
            'id': 4,
            'name': 'Aqua Jod'
        },
        {
            'id': 5,
            'name': 'Yuvi Bot'
        },
        {
            'id': 6,
            'name': 'Star Boy'
        },
        {
            'id': 7,
            'name': 'Zimil Patel'
        },
        {
            'id': 8,
            'name': 'Jash Katariya'
        },
        {
            'id': 9,
            'name': 'Aqua Jod'
        },
        {
            'id': 10,
            'name': 'Yuvi Bot'
        },
        {
            'id': 11,
            'name': 'Star Boy'
        },
        {
            'id': 12,
            'name': 'Zimil Patel'
        },
        {
            'id': 13,
            'name': 'Jash Katariya'
        },
        {
            'id': 14,
            'name': 'Aqua Jod'
        },
        {
            'id': 15,
            'name': 'Yuvi Bot'
        },
        {
            'id': 16,
            'name': 'Star Boy'
        },
        {
            'id': 17,
            'name': 'Zimil Patel'
        },
        {
            'id': 18,
            'name': 'Jash Katariya'
        },
        {
            'id': 19,
            'name': 'Aqua Jod'
        },
        {
            'id': 20,
            'name': 'Yuvi Bot'
        },
    ];

    return (
        <View>
            <Text style={styles.titleText}>Flat Lsit Example</Text>

            <FlatList
                data={userList}
                renderItem={({ item }) => <Text style={style.listItemStyle}>{item.id} : {item.name}</Text>}
                
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const style = StyleSheet.create(
    {
        listItemStyle: {
            fontSize: 16,
            color: 'white',
            fontWeight: '500',
            backgroundColor: 'orange',
            padding: 6,
            marginVertical: 4,
            borderRadius: 8,
            height: 40,
            paddingLeft: 14
        },
    }
);

export default FlatListExample;