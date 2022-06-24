import React from 'react';
import {SafeAreaView, Text} from "react-native";

const App = () => {

    const isLoading = false;
    const children = isLoading ? (<Text>Loading...!</Text>)
        : (undefined) // return 하는 객체 자체가 undefinded 만 아니면 상관없다.
    const array = [1,2,3].map((i)=>
        <Text> Hello! {i} </Text>
    );

    const arrayTest = new Array(100)
        .fill(null) // fill : 설정한 배열 길이 전부에 null 값 채우기
        .map((notUsed,index) => <Text> Hello world! {index} </Text>)

    return (
        <SafeAreaView style={{
            flex : 1,
            alignItems: 'center'
        }}>
            {arrayTest}
        </SafeAreaView>
    );
};

export default App;
