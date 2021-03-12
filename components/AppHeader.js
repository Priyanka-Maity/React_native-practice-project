import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { lightThemes, fontColor } from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
export default function AppHeader(props) {
    return (
        <View style={{ height: 50, backgroundColor: lightThemes.primaryColor, flexDirection: 'row', }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 14 }}>
                <Image source={{ uri: 'https://purepng.com/public/uploads/large/amazon-logo-s3f.png' }}
                    style={{ height: 50, width: 100, marginHorizontal: 20, }} />
            </View>
            <View style={{ flex: 3, justifyContent: 'center', marginLeft: 10, paddingTop: 5 }}>
                <Text style={{ fontSize: 15, color: fontColor.lightFont, fontWeight: 'bold' }}>Zikode Commarce</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingTop: 6 }}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("Search") }}>
                    <AntDesign name="search1" size={20} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons name="cart" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
