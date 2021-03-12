import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { lightThemes, fontColor } from '../constants/Color';
export default function AccountHeader() {
    return (
        <View style={{ flex: 1, backgroundColor: lightThemes.primaryColor }}>
            <View style={{ height: 50, paddingHorizontal: 10, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('Home') }}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Account Information</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 1, }}>

                </View>
                <View style={{ flex: 1, backgroundColor: fontColor.lightFont, borderRadius: 60, }}>

                </View>
                <View style={{ flex: 1, }}>

                </View>
            </View>
            <View style={{ height: 50, alignItems: 'center', paddingVertical: 7 }}>
                <Text style={{ fontSize: 15, color: fontColor.lightFont }}>Priyanka</Text>
                <Text style={{ fontSize: 15, color: fontColor.lightFont }}>7384217699</Text>
            </View>
        </View>
    )
}
