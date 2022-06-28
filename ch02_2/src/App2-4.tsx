import React from 'react';
import {SafeAreaView,Text,Button} from "react-native";
import {Alert} from 'react-native';
import {TouchableOpacity,TouchableHighlight} from "react-native";
import {TextInput} from "react-native";

const App = () => {

    const onPressed = () => Alert.alert('Button','Button clicked!');

    return (
        <SafeAreaView>
            <Text>Hello! </Text>
            <Button onPress = {() => {
                Alert.alert('Home Pressed', 'Hi Hello')
            }} title='title'/>
            {/*JS와 TS의 차이점 : JS는 아래처럼 써도 오류 안남 vs TS는 명확한 타입 명시 등으로 오류 발생시 디버깅 용이*/}
            {/*<Button title='title2' onPress={()=>alert('click!')}></Button>*/}

            <TouchableOpacity onPress={onPressed}>
                <Text>Touchable Opacity</Text>
            </TouchableOpacity>

            <TouchableHighlight onPress={onPressed}>
                <Text>TouchableHighLight</Text>
            </TouchableHighlight>

            <TextInput
                placeholder='enter your name'
                onChangeText={(text:string) => console.log(text)}
                onFocus={()=>console.log('onFocus')}
                onBlur={()=>console.log('onBlur')}
                onEndEditing={()=>console.log('onEndEditing')}>
            </TextInput>

        </SafeAreaView>
    )
}

export default App;
