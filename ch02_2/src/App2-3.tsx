import React from 'react';
import {SafeAreaView, Text} from "react-native";
import * as D from './data';
import ArrowComponent from "./components/ArrowComponent";

const App = () => {

    const person = D.createRandomPerson();

    return (
        <SafeAreaView>
            <ArrowComponent/>
        </SafeAreaView>
    )
};

export default App;
