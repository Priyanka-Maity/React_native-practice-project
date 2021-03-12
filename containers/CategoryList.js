import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
export default function CategoryList(props) {
    const Cateagoryitems = [
        { Productimage: 'https://cdn.shopify.com/s/files/1/0184/6414/products/HarmonySSkirt_indigo_155_1024x.jpg?v=1613524693', productname: 'Clothing', productitems: '52,161 iteam' },
        { Productimage: 'https://cdn.shopify.com/s/files/1/0184/6414/products/HarmonySSkirt_indigo_155_1024x.jpg?v=1613524693', productname: 'Shows', productitems: '52,161 iteam' },
        { Productimage: 'https://cdn.shopify.com/s/files/1/0184/6414/products/HarmonySSkirt_indigo_155_1024x.jpg?v=1613524693', productname: 'Clothing', productitems: '52,161 iteam' },
        { Productimage: 'https://cdn.shopify.com/s/files/1/0184/6414/products/HarmonySSkirt_indigo_155_1024x.jpg?v=1613524693', productname: 'Clothing', productitems: '52,161 iteam' },
        { Productimage: 'https://cdn.shopify.com/s/files/1/0184/6414/products/HarmonySSkirt_indigo_155_1024x.jpg?v=1613524693', productname: 'Clothing', productitems: '52,161 iteam' },
        { Productimage: 'https://cdn.shopify.com/s/files/1/0184/6414/products/HarmonySSkirt_indigo_155_1024x.jpg?v=1613524693', productname: 'Clothing', productitems: '52,161 iteam' },
        { Productimage: 'https://cdn.shopify.com/s/files/1/0184/6414/products/HarmonySSkirt_indigo_155_1024x.jpg?v=1613524693', productname: 'Clothing', productitems: '52,161 iteam' },

    ];
    return (
        <View>

            {
                Cateagoryitems.map((item, index) => (

                    <View key={index} style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, flexDirection: 'row', padding: 10 }}>
                        <View>
                            <Image source={{ uri: item.Productimage }} style={{ height: 90, width: 70, borderRadius: 6 }} />

                        </View>
                        <View style={{ flex: 3, justifyContent: 'center', paddingHorizontal: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingVertical: 5 }}>{item.productname}</Text>
                            <Text style={{ color: lightThemes.primaryColor, fontSize: 15 }} >{item.productitems}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Wishlist') }}>
                                <AntDesign name="right" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                ))
            }

        </View>
    )
}
