import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { lightThemes, fontColor } from '../constants/Color';
export default function NotificationHeader(props) {
    return (
        <View style={{ height: 50, borderBottomWidth: 3, borderBottomColor: fontColor.mediumFont, paddingHorizontal: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Home') }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Notification</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}
