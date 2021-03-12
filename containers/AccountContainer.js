import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { fontColor } from '../constants/Color'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function AccountContainer(props) {
    return (
        <View style={{ flex: 2 }}>

            <TouchableOpacity style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                <>
                    <MaterialIcons name="payment" size={24} color="black" />
                </>
                <Text style={{ paddingHorizontal: 5, }}>Payment</Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Notification') }} style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                <MaterialIcons name="notifications-active" size={24} color="black" />
                <Text style={{ paddingHorizontal: 5, }}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }} style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                <Feather name="log-out" size={24} color="black" />
                <Text style={{ paddingHorizontal: 5, }}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Profile') }} style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                <AntDesign name="profile" size={24} color="black" />
                <Text style={{ paddingHorizontal: 5, }}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Orders') }} style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                <AntDesign name="select1" size={24} color="black" />
                <Text style={{ paddingHorizontal: 5, }}>Order</Text>
            </TouchableOpacity>
            <View style={{ flex: 2, alignItems: 'center', }}>

            </View>
        </View>
    )
}
