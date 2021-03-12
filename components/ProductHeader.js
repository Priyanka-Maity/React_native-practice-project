import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { lightThemes, fontColor } from '../constants/Color';
import { GlobalContext } from '../context/Context';
export default function ProductHeader(props) {
    const { show, setShow } = useContext(GlobalContext)
    return (
        <View style={{ height: 50, borderBottomWidth: 3, borderBottomColor: fontColor.mediumFont, paddingHorizontal: 10, flexDirection: 'row', }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Products</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { setShow(!show) }}>
                    {show ? <MaterialCommunityIcons name="heart-circle" size={30} color="grey" /> :
                        <MaterialCommunityIcons name="heart-circle" size={30} color="red" />}
                </TouchableOpacity>
            </View>
        </View>
    )
}
