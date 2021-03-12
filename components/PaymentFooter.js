import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
export default function PaymentFooter() {
    return (
        <View style={{ height: 50, margin: 10 }}>
            <TouchableOpacity style={{ height: 50, backgroundColor: lightThemes.primaryColor, flexDirection: 'row', borderRadius: 4, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 19, color: '#fff' }}>Payment Now</Text>
            </TouchableOpacity>
        </View>
    )
}
