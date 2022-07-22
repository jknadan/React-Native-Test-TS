import React from 'react';
import {StyleSheet,View,Text} from "react-native";
import {Colors} from "react-native-paper";
import * as D from '../data';
import Person from "./Person";
import {createOrUse} from "./createOrUse";

const people = D.makeArray(2).map(D.createRandomPerson);

const title = 'Cache';

function CopyMe() {
    return (
        <View style={styles.view}>
            <Text style={[styles.text]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        padding : 5,
        backgroundColor: Colors.lightBlue200,
        borderWidth : 1
    },
    text : {
        fontSize: 20,
        color: 'white'
    }
})

export default CopyMe;
