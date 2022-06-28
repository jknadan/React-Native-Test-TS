import React from 'react';
import {SafeAreaView, Text, ScrollView} from "react-native";
import * as D from './data';
import ArrowComponent from "./components/ArrowComponent";
import Person from "./components/Person";

const people = D.makeArray(10).map(D.createRandomPerson);

const App = () => {

    const children = people.map((person) => (
        <Person key={person.id} person={person}/>
    ))

    return (
        <SafeAreaView>
            <ScrollView>{children}</ScrollView>
        </SafeAreaView>
    )
};

export default App;
