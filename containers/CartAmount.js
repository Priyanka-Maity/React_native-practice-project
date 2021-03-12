import React from 'react'
import { View, Text } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
export default function CartAmount() {
    return (
        <View style={{ flex: 2, marginHorizontal: 10 }}>
            <View style={{ flex: 1, paddingVertical: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>The Total Amount of</Text>
            </View>
            <View style={{ flex: 2, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, paddingVertical: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <Text style={{ color: fontColor.darkFont }}>Temporery Amount</Text>
                    <Text style={{ color: fontColor.darkFont }}>$93.98</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <Text style={{ color: fontColor.darkFont }}>Delivery Charges</Text>
                    <Text style={{ color: fontColor.darkFont }}>FREE</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                    <Text style={{ color: fontColor.darkFont }}>GIST Charge</Text>
                    <Text style={{ color: fontColor.darkFont }}>$23.00</Text>
                </View>
            </View>
            <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Total Amount</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>$24,000</Text>
                </View>

            </View>
        </View>
    )
}
