import React from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
export default function SearchContain() {
    const [tall, setTall] = React.useState('')
    const [tal, setTal] = React.useState(true)
    return (
        <View>
            <View style={{ height: 50, flexDirection: 'row', paddingLeft: 5, borderWidth: 1, borderColor: fontColor.darkFont, marginVertical: 10, borderRadius: 4, alignItems: 'center' }}>
                <View style={{ flex: 1, }}>
                    <AntDesign name="left" size={24} color="black" />
                </View>
                <View style={{ flex: 5, }}>
                    <TextInput placeholder="Search*" onChangeText={(e) => { setTall(e) }} />
                </View>
                <View style={{ flex: 1, }}>
                    <AntDesign name="search1" size={24} color="black" />
                </View>
            </View>
            <Text>Recent Search</Text>
            {tal ? <View style={{ height: 300, backgroundColor: fontColor.mediumFont, padding: 10, borderRadius: 6 }}>
                <View style={{ flex: 1 }}>
                    <Text>{tall}</Text>
                </View>
                <TouchableOpacity onPress={() => { setTall(false) }}>
                    <Text style={{ textAlign: 'center', padding: 10, color: lightThemes.primaryColor }}>Clear all</Text>
                </TouchableOpacity>

            </View> :
                <Text style={{ textAlign: 'center', }}>Not Search found</Text>}
        </View>
    )
}
