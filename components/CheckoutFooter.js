import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
export default function CheckoutFooter(props) {
    return (
        <View style={{ marginHorizontal: 10, marginBottom: 10 }}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Payment') }}>
                <View style={{ height: 50, backgroundColor: lightThemes.primaryColor, borderRadius: 4, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                    <Text style={{ color: fontColor.lightFont, fontWeight: 'bold', fontSize: 15 }}>Save Address</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
