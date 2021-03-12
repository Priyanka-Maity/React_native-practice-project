import React from 'react'
import { View, Text } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
export default function ProductDetails(props) {
    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <View style={{ flex: 1, paddingTop: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Daniel Wellington</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: lightThemes.tertiaryColor }}>$ 90</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: fontColor.lightFont, height: 30, width: 30, borderRadius: 60, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: fontColor.darkFont, height: 20, width: 20, borderRadius: 60, elevation: 4 }}></View>
                    </View>
                    <View style={{ backgroundColor: fontColor.lightFont, height: 30, width: 30, borderRadius: 60, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: lightThemes.tertiaryColor, height: 20, width: 20, borderRadius: 60, elevation: 4 }}></View>
                    </View>
                    <View style={{ backgroundColor: fontColor.lightFont, height: 30, width: 30, borderRadius: 60, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: lightThemes.seconderyColor, height: 20, width: 20, borderRadius: 60, elevation: 4 }}></View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 2 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', paddingVertical: 5 }}>Product Description</Text>
                <Text style={{ paddingBottom: 5 }}>Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s
                Lorem Ipsum has been the industry's
                standard dummy </Text>
            </View>
            <View style={{ flex: 2 }}>
                <TouchableOpacity>
                    <View style={{ height: 50, backgroundColor: lightThemes.primaryColor, marginBottom: 10, borderRadius: 4, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="shopping-bag" size={20} color="#fff" />
                        <Text style={{ color: fontColor.lightFont, paddingHorizontal: 5 }}>  Buy Now</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Cart') }}>
                    <View style={{ height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 4, borderWidth: 3, borderColor: lightThemes.primaryColor, marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <EvilIcons name="cart" size={24} color="#136ff0" />
                        <Text style={{ color: lightThemes.primaryColor, paddingHorizontal: 4 }}>Add toCart</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
