import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import {Colors} from 'react-native-paper';
import color from 'color';
import Person from './copy/Person';
import * as D from './data';

const people : D.IPerson[] = D.makeArray(1).map(D.createRandomPerson);
console.log(people);

const App = () => {
    return (
        <SafeAreaView style={styles.flex}>
            <FlatList data={people}
                      renderItem={
                          ({item}) => <Person person={item}/>
                      }
                      keyExtractor={
                          (item,index) => item.id
                      }
                      ItemSeparatorComponent={
                          () => <View style={styles.itemSeparator}/>
                      }
            />
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    flex :{
        flex:1
    },
    itemSeparator: {
        borderWidth :1,
        borderColor : color(Colors.grey500).lighten(0.3).string()
    }

})
