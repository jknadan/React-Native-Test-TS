import React from 'react';
import {StyleSheet,View,Text} from "react-native";
import {Colors} from "react-native-paper";
import * as D from '../data';

const title = 'Content';

function CopyMe() {
    return (
        <View style={styles.view}>
            <Text style={[styles.text]}>{title}</Text>
            <View style={{flex:0,backgroundColor: Colors.amber900}}>
                <Text> Flex : 0</Text>
            </View>

            <View style={{flex:1,backgroundColor: Colors.amber800}}>
                <Text> Flex : 1</Text>
            </View>

            <View style={{flex:2,backgroundColor: Colors.amber700}}>
                <Text> Flex : 2</Text>
            </View>

            <View style={{flex:4,backgroundColor: Colors.amber900}}>
                <Text> Flex : 4</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        // height: '100%',
        padding : 5,
        backgroundColor: Colors.green50
    },
    text : {
        fontSize: 20,
        color: 'white'
    }
})

export default CopyMe;
