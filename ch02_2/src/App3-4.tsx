import React from "react";
import {StyleSheet, SafeAreaView, View, Image, Text} from "react-native";
import {Colors} from 'react-native-paper';
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Content from "./components/Content";
import * as D from './data';
import {amber300} from "react-native-paper/lib/typescript/styles/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const App = () => {

    const name = D.randomName();
    const avatarUrl = D.randomAvatarUrl(name);

    return (
        <View style={{flex:1}}>
            <View style={[styles.view]}>
                <Image style={styles.avatar} source={{uri:avatarUrl}}/>
                <View style={styles.centerView}>
                    <Text style={[styles.text]}>{name}</Text>
                </View>
                <Icon name="menu" size={24} color="white"/>
            </View>
            <Content/>
            <BottomBar/>
        </View>

        )
}

export default App;

const styles = StyleSheet.create({
    view : {
        flex:0,
        flexDirection : 'row',
        alignItems : 'center',
        padding : 5,
        backgroundColor: Colors.amber300
    },
    text : {
        fontSize: 20,
        textAlign: 'center'
    },
    avatar : {
        width : 40,
        height : 40,
        borderRadius: 20
    },
    centerView : {
        flex: 1
    }
})
