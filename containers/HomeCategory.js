import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { lightThemes, fontColor } from '../constants/Color';
export default function HomeCategory(props) {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Categories</Text>
                <TouchableOpacity onPress={() => { props.navigation.navigate('Category') }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, paddingRight: 3 }}>See all</Text>
                        <AntDesign name="right" size={20} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 1, flexDirection: 'row', marginVertical: 10 }}>

                    <View style={{ margin: 10, alignItems: 'center' }}>
                        <View style={{ elevation: 3, borderRadius: 50 }}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTts_JQ1lqQg530ab6rQcGqTk-T0Evt8kjcZA&usqp=CAU' }}
                                style={{ height: 60, width: 60, borderRadius: 60 }} />
                        </View>
                        <TouchableOpacity onPress={() => { props.navigation.navigate("Category") }}>
                            <Text style={{ paddingVertical: 5, fontSize: 15, color: fontColor.darkFont }}>Electronic</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ margin: 10, alignItems: 'center' }}>
                        <View style={{ elevation: 3, borderRadius: 50 }}>
                            <Image source={{ uri: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-t-shirt-and-hanger-vector-illustration-isolated-on-white-background-clothes-png-image_5228516.jpg' }}
                                style={{ height: 60, width: 60, borderRadius: 60 }} />
                        </View>
                        <TouchableOpacity>
                            <Text style={{ paddingVertical: 5, fontSize: 15, color: fontColor.darkFont }}>Fashion</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ margin: 10, alignItems: 'center' }}>
                        <View style={{ elevation: 3, borderRadius: 50 }}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSM0DhddhWkvfWgLG2BCmVlF1j64xEH4hkg&usqp=CAU' }}
                                style={{ height: 60, width: 60, borderRadius: 60 }} />
                        </View>
                        <TouchableOpacity>
                            <Text style={{ paddingVertical: 5, fontSize: 15, color: fontColor.darkFont }}>Sports</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ margin: 10, alignItems: 'center' }}>
                        <View style={{ elevation: 3, borderRadius: 50 }}>
                            <Image source={{ uri: 'data:image/png;base64,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' }}
                                style={{ height: 60, width: 60, borderRadius: 60 }} />
                        </View>
                        <TouchableOpacity>
                            <Text style={{ paddingVertical: 5, fontSize: 15, color: fontColor.darkFont }}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ margin: 10, alignItems: 'center' }}>
                        <View style={{ elevation: 3, borderRadius: 50 }}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSM0DhddhWkvfWgLG2BCmVlF1j64xEH4hkg&usqp=CAU' }}
                                style={{ height: 60, width: 60, borderRadius: 60 }} />
                        </View>
                        <TouchableOpacity>
                            <Text style={{ paddingVertical: 5, fontSize: 15, color: fontColor.darkFont }}>Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
