import React from 'react'
import { Linking } from 'react-native';
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageContain from '../components/ImageContain'
import { lightThemes, fontColor } from '../constants/Color';
export default function ProfileContainer() {
    return (
        <View style={{ flex: 1, backgroundColor: fontColor.mediumFont, }}>
            <View style={{ flex: 4, backgroundColor: lightThemes.primaryColor, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 30 }}>
                    <Text style={{ fontSize: 20, color: fontColor.lightFont, }}>Profile</Text>
                    <TouchableOpacity>
                        <FontAwesome name="edit" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <ImageContain />
            <View style={{ flex: 2, marginTop: 4, backgroundColor: fontColor.lightFont, }}>
                <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', padding: 7 }}>
                    <View style={{ backgroundColor: fontColor.lightFont, elevation: 5, borderRadius: 20, padding: 9 }}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(`tel:${7384217699}`)

                        }}><MaterialIcons name="call" size={24} color="#a0c4ff" /></TouchableOpacity>
                    </View>

                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>My Contact</Text>
                    <Text>7384217699</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', padding: 7, }}>
                    <View style={{ backgroundColor: fontColor.lightFont, elevation: 5, borderRadius: 20, padding: 9, marginLeft: -14, alignItems: 'center' }}>
                        <MaterialIcons name="contacts" size={24} color="#a0c4ff" />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Address</Text>
                    <Text>Haldia</Text>
                </View>
            </View>
            <View style={{ flex: 4 }}></View>
        </View>
    )
}
