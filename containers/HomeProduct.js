import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
import { lightThemes, fontColor } from '../constants/Color';
import { Rating } from 'react-native-ratings';
export default function HomeProduct(props) {
    return (
        <View style={{ flex: 1, borderTopWidth: 1, borderTopColor: '#e6e6e6', marginHorizontal: 5 }}>
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 5, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Products</Text>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Product') }}>
                    <View style={{ backgroundColor: lightThemes.primaryColor, padding: 10, borderRadius: 5 }}>
                        <Text style={{ color: fontColor.lightFont }}>View all</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ backgroundColor: fontColor.lightFont, marginHorizontal: 5, marginRight: 5, borderRadius: 5, flex: 1, alignItems: 'center', elevation: 3 }}>
                    <View>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMB-mzWCklKKAqHDKDR45GAN9qb1ZeqkbCKA&usqp=CAU' }}
                            style={{ height: 120, width: 150, borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
                    </View>
                    <View style={{ flex: 1, paddingVertical: 10 }}>
                        <Text style={{ paddingRight: 40, marginBottom: 5, fontWeight: 'bold', fontSize: 15 }}>Mobile Product</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: lightThemes.seconderyColor }}>$15,000</Text>
                            <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>4.5</Text>
                                <Rating
                                    type='custom'
                                    ratingColor='orange'
                                    ratingBackgroundColor="#e6e6e6"
                                    ratingCount={1}
                                    imageSize={15}
                                />
                            </View>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: fontColor.lightFont, marginHorizontal: 5, borderRadius: 5, flex: 1, alignItems: 'center', elevation: 3 }}>
                    <View>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMB-mzWCklKKAqHDKDR45GAN9qb1ZeqkbCKA&usqp=CAU' }}
                            style={{ height: 120, width: 150, borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
                    </View>
                    <View style={{ flex: 1, paddingVertical: 10 }}>
                        <Text style={{ paddingRight: 40, marginBottom: 5, fontWeight: 'bold', fontSize: 15 }}>Mobile Product</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: lightThemes.seconderyColor }}>$15,000</Text>
                            <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>4.5</Text>
                                <Rating
                                    type='custom'
                                    ratingColor='orange'
                                    ratingBackgroundColor="#e6e6e6"
                                    ratingCount={1}
                                    imageSize={15}
                                />
                            </View>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: fontColor.lightFont, marginHorizontal: 5, borderRadius: 5, flex: 1, alignItems: 'center', elevation: 3 }}>
                    <View>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMB-mzWCklKKAqHDKDR45GAN9qb1ZeqkbCKA&usqp=CAU' }}
                            style={{ height: 120, width: 150, borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
                    </View>
                    <View style={{ flex: 1, paddingVertical: 10 }}>
                        <Text style={{ paddingRight: 40, marginBottom: 5, fontWeight: 'bold', fontSize: 15 }}>Mobile Product</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: lightThemes.seconderyColor }}>$15,000</Text>
                            <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>4.5</Text>
                                <Rating
                                    type='custom'
                                    ratingColor='orange'
                                    ratingBackgroundColor="#e6e6e6"
                                    ratingCount={1}
                                    imageSize={15}
                                />
                            </View>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({
    textcontain: { paddingHorizontal: 5, },
    selectcontain: { height: 20, backgroundColor: '#90e0ef', marginRight: 50, marginTop: -5, borderTopStartRadius: 4, borderBottomEndRadius: 4 }
})