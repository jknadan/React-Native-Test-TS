import React from 'react';
import {SafeAreaView, Text, StyleSheet, Platform, Dimensions, View} from "react-native";
import {Colors} from 'react-native-paper';
import Color from 'color';


const App = () => {

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.Text}>Hi Hello</Text>
            <Text style={styles.Text}>os: {Platform.OS}</Text>
            <Text style={styles.Text}>width: {Dimensions.get('window').width}</Text>
            <Text style={styles.Text}>height: {Dimensions.get('window').height}</Text>

            <View style={[styles.box, styles.border]}/>
            <View style={[styles.box, styles.border, {borderRadius:20}]}/>
        </SafeAreaView>
    );
}

export default App;


const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: Colors.indigo50,
        padding : 10

    },
    Text : {
        fontSize: 20,
        color : Color(Colors.black).alpha(0.5).lighten(0.5).toString(),
        marginTop: 5
    },
    box : {
        height : 100,
        backgroundColor : Colors.amber900,
        marginBottom : 10
    },
    border : {
        borderWidth: 10,
        borderColor : Color(Colors.black).alpha(0.5).toString()
    }
});
