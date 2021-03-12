import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
export default function CartFooter(props) {
    return (
        <View style={{ marginHorizontal: 10, height: 50, marginBottom: 10 }}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Checkout') }}>
                <View style={{ height: 50, backgroundColor: lightThemes.primaryColor, borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: fontColor.lightFont, fontSize: 15, fontWeight: 'bold' }}>Checkout</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
