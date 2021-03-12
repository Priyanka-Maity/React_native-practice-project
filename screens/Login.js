import React from 'react'
import { View, ScrollView, } from 'react-native'
import LoginContain from '../containers/LoginContain'
import LoginContainer from '../containers/LoginContainer'
export default function Login(props) {
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <ScrollView>
                <LoginContain navigation={props.navigation} />
                <LoginContainer />
            </ScrollView>
        </View>
    )
}
