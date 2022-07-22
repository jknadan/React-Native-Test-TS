import React from 'react';
import {Alert, SafeAreaView, StyleSheet, Text} from 'react-native';
import {ImageBackground} from "react-native";
import {Image} from 'react-native';
import * as D from './data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Colors} from 'react-native-paper';
import Color from 'color';

const App = () => {

    const avatarUri = D.randomAvatarUrl();
    const onIconPressed = () => Alert.alert('Icon Pressed');

    return (
        <SafeAreaView style={styles.display}>
            <ImageBackground style={styles.display} source={require('./assets/image/test.jpg')}>
            <Text style={styles.default}>Hello!</Text>
            <Image source={{uri: avatarUri}} style={[styles.image]}/>
            <Icon name="home" size={50} color={Colors.lightBlue200} onPress={onIconPressed}/>
            </ImageBackground>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    display : {
        // flex : 1,
    },
    default : {
        fontSize: 50,
        fontFamily: 'DancingScript-Bold',
        fontWeight : '300'
    },
    image :{
        width : 50,
        height : 50,
        borderRadius: 1
    }
});

export default App;
