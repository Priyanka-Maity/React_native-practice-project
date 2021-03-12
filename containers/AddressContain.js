import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function AddressContain() {
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ flex: 2 }}>
                <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                    <TextInput placeholder="Full Name (Requaired)*" style={{ paddingLeft: 5, }} />
                </View>
                <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, justifyContent: 'center', marginBottom: 10, }}>
                    <TextInput placeholder="Full Name (Requaired)*" style={{ paddingLeft: 5 }} />
                </View>
                <Text style={{ color: lightThemes.primaryColor }}> + Add Phone Number</Text>
            </View>
            <View style={{ flex: 6, marginTop: 20 }}>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                    <View style={{ height: 50, width: '48%', borderWidth: 1, borderColor: fontColor.darkFont, justifyContent: 'center', marginRight: 5 }}>
                        <TextInput placeholder="Pincode (Requaired)*" style={{ paddingLeft: 5 }} />
                    </View>
                    <View style={{ height: 50, width: '48%', marginLeft: 5, flexDirection: 'row', alignItems: 'center', paddingLeft: 5, backgroundColor: lightThemes.primaryColor }}>
                        <Ionicons name="md-locate" size={24} color="#fff" />
                        <Text style={{ color: fontColor.lightFont, paddingLeft: 5, fontWeight: 'bold' }}>Use my location</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                    <View style={{ height: 50, width: '48%', borderWidth: 1, borderColor: fontColor.darkFont, justifyContent: 'center', marginRight: 5 }}>
                        <TextInput placeholder="Pincode (Requaired)*" style={{ paddingLeft: 5 }} />
                    </View>
                    <View style={{ height: 50, width: '48%', marginLeft: 5, flexDirection: 'row', alignItems: 'center', paddingLeft: 5, borderWidth: 1, borderColor: fontColor.darkFont, justifyContent: 'space-between' }}>
                        <TextInput placeholder="City (Requaired)*" style={{ paddingLeft: 5 }} />
                        <Ionicons name="ios-search" size={15} color="grey" style={{ paddingRight: 5 }} />
                    </View>
                </View>
                <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                    <TextInput placeholder="Full Name (Requaired)*" style={{ paddingLeft: 5 }} />
                </View>
                <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, justifyContent: 'center', marginBottom: 10, }}>
                    <TextInput placeholder="Full Name (Requaired)*" style={{ paddingLeft: 5 }} />
                </View>
                <View style={{ flex: 3, paddingTop: 10 }}>
                    <Text style={{ color: lightThemes.primaryColor, marginBottom: 20 }}>+ Add Nearby Famous Shop/Mall/Landmark</Text>
                    <Text style={{ color: fontColor.darkFont, }}>Type of Address</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: fontColor.darkFont, height: 50, width: '38%', marginRight: 5, marginTop: 30, borderRadius: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo name="home" size={20} color="black" style={{ paddingRight: 5, color: fontColor.darkFont }} />
                            <Text style={{ color: fontColor.darkFont }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: fontColor.darkFont, height: 50, width: '38%', marginLeft: 5, marginRight: 30, marginTop: 30, borderRadius: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Entypo name="newsletter" size={20} color="black" style={{ paddingRight: 5, color: fontColor.darkFont }} />
                            <Text style={{ color: fontColor.darkFont }}>Work</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </View>
    )
}
