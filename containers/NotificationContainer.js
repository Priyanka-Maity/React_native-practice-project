import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
export default function NotificationContainer() {
    const Data = [
        { text1: 'My Orders', text2: 'Latest updates on your orders ' },
        { text1: 'My Orders', text2: 'Latest updates on your orders ' },
        { text1: 'My Orders', text2: 'Latest updates on your orders ' },
        { text1: 'My Orders', text2: 'Latest updates on your orders ' },
        { text1: 'My Orders', text2: 'Latest updates on your orders ' }
    ]
    return (

        <View style={{ flex: 1 }}>
            {
                Data.map((item, index) => (
                    <View key={index} style={{ height: 90, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <AntDesign name="checksquare" size={24} color="#136ff0" />
                        </View>
                        <View style={{ flex: 4, justifyContent: 'center', paddingHorizontal: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingVertical: 2 }}>{item.text1}</Text>
                            <Text style={{ color: fontColor.darkFont, fontSize: 15 }}>{item.text2}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity >
                                <AntDesign name="down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )

                )
            }

        </View>
    )
}
