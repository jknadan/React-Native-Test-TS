import React from 'react';
import {StyleSheet,SafeAreaView,ScrollView,Dimensions} from "react-native";
import Cache from './screens/Cache';
import Memo from './screens/Memo';
import Fibo from './screens/Fibo';

const {width} = Dimensions.get('window');
const numberOfComponents = 3;

const App = () => {
    return (
        <SafeAreaView>
            <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]}>
                <Cache/>
                <Memo/>
                <Fibo/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView : {
        flex:1
    },
    contentContainerStyle : {width: width*numberOfComponents},
})

export default App;
