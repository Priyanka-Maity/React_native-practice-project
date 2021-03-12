import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Line } from 'react-native-svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { lightThemes, fontColor } from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
export default function CheckoutHeader() {
    return (
        <View style={{ height: 60, borderBottomColor: fontColor.mediumFont, borderBottomWidth: 2 }}>
            <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'center', marginTop: 20 }}>
                <AntDesign name="checkcircle" size={20} color="#136ff0" style={{ marginTop: -8 }} />
                <Svg height="210" width="100">
                    <Line x1="0" y1="0" x2='200' y2="0" stroke="#136ff0" strokeWidth="5" />
                </Svg>
                <MaterialCommunityIcons name="numeric-2-circle-outline" size={24} color="black" style={{ marginTop: -10 }} />
                <Svg height="210" width="100">
                    <Line x1="0" y1="0" x2='200' y2="0" stroke="#ddd" strokeWidth="5" />
                </Svg>
                <MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color="black" style={{ marginTop: -10 }} />
            </View>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 4 }}>
                <Text style={{ color: lightThemes.primaryColor }}>Address</Text>
                <Text>Payment</Text>
                <Text>Order</Text>
            </View>
        </View>
    )
}
