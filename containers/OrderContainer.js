import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
export default function OrderContainer() {
    const friend = [
        { img: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', text: 'Watch', text2: 'Delivered on Aug 31 ,2020' },
        { img: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', text: 'Watch', text2: 'Delivered on Aug 31 ,2020' },
        { img: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', text: 'Watch', text2: 'Delivered on Aug 31 ,2020' },
        { img: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', text: 'Watch', text2: 'Delivered on Aug 31 ,2020' },


    ];
    return (
        <View>
            {
                friend.map((item, index) => (

                    <View style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, flexDirection: 'row', padding: 10 }}>
                        <View>
                            <Image source={{ uri: item.img }} style={{ height: 100, width: 70, borderRadius: 6 }} />

                        </View>
                        <View style={{ flex: 3, justifyContent: 'center', paddingHorizontal: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingTop: 5 }} key={index}>{item.text2}</Text>
                            <Text style={{ paddingBottom: 2 }}>{item.text}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity >
                                <AntDesign name="right" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                ))
            }
        </View>
    )

}
