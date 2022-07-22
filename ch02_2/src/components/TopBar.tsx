import React from 'react';
import {StyleSheet,View,Text} from "react-native";
import {Colors} from "react-native-paper";
import * as D from '../data';

const title = 'TopBar';

function CopyMe() {
    return (
        <View style={styles.view}>
            <Text style={[styles.text]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        padding : 5,
        backgroundColor: Colors.green500
    },
    text : {
        fontSize: 20,
        color: 'white'
    }
})

export default CopyMe;

