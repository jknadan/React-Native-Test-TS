import React,{useState,useEffect} from 'react';
import {StyleSheet,SafeAreaView,Text} from "react-native";
import {useClock} from './hooks'

const App = () => {

    const time = useClock();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={[styles.digitFont, styles.time]}>
                {time.toLocaleDateString()}
            </Text>

            <Text>
                {time.toLocaleTimeString()}
            </Text>

        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    safeAreaView : {
        flex : 1,
        alignItems: 'center',
        justifyContent :'center'
    },
    digitFont : {
        fontWeight : '400'
    },
    time : {
        fontSize : 50
    }
})
