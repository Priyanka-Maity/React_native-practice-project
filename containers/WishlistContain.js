import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function WishlistContain(props) {
    const Wishlistitems = [
        { Productimage: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', productname: 'Watch', productprise: '$52,161' },
        { Productimage: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', productname: 'Watch', productprise: '$52,161' },
        { Productimage: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', productname: 'Watch', productprise: '$52,161' },
        { Productimage: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', productname: 'Watch', productprise: '$52,161' },
        { Productimage: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', productname: 'Watch', productprise: '$52,161' },
        { Productimage: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', productname: 'Watch', productprise: '$52,161' },
        { Productimage: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K', productname: 'Watch', productprise: '$52,161' },

    ];
    return (
        <View>
            {
                Wishlistitems.map((item, index) => (

                    <View key={index} style={{ flex: 1, borderBottomWidth: 2, borderBottomColor: fontColor.mediumFont, flexDirection: 'row', padding: 10 }}>
                        <View>
                            <Image source={{ uri: item.Productimage }} style={{ height: 150, width: 90, borderRadius: 6 }} />

                        </View>
                        <View style={{ flex: 3, justifyContent: 'center', paddingHorizontal: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingTop: 5 }}>{item.productname}</Text>
                            <Text style={{ paddingBottom: 2 }}>(Mordain Style & Exchange 100% Money Back)</Text>
                            <View style={{ alignItems: 'center', backgroundColor: lightThemes.tertiaryColor, marginRight: 135, borderRadius: 4, flexDirection: 'row', paddingLeft: 4 }}>
                                <Text style={{ color: fontColor.lightFont }}>4.5</Text>
                                <Entypo name="star" size={10} color="#fff" />
                            </View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000' }} >{item.productprise}</Text>
                            <Text style={{ color: lightThemes.tertiaryColor, paddingVertical: 3 }}>20%off</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Product') }}>
                                <AntDesign name="right" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                ))
            }

        </View>
    )
}
