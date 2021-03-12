import React from 'react'
import { View, Text, } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
export default function PaymentDetails() {
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ height: 300, marginBottom: 20, justifyContent: 'center' }}>
                <View style={{ height: 60, backgroundColor: fontColor.mediumFont, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text>Save my details for future purchages</Text>
                </View>
                <View style={{ height: 100, backgroundColor: fontColor.mediumFont, marginVertical: 5, justifyContent: 'center', paddingHorizontal: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                        <Text style={{ color: fontColor.darkFont }}>Temporery Amount</Text>
                        <Text style={{ color: fontColor.darkFont }}>$93.98</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 }}>
                        <Text style={{ color: fontColor.darkFont }}>Delivery Charges</Text>
                        <Text style={{ color: fontColor.darkFont }}>FREE</Text>
                    </View>
                </View>
                <View style={{ height: 60, backgroundColor: fontColor.mediumFont, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Total Amount</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>$24,000</Text>
                    </View>
                </View>
            </View>


        </View>
    )
}
