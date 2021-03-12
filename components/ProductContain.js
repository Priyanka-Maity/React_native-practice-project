import React from 'react'
import { View, Image } from 'react-native'
import Swiper from 'react-native-swiper';
export default function ProductContain() {
    const index = [
        { image: 'https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/watch-of-the-week_breitling-transocean-day-date-u.s.-limited-edition_2000x1333.jpg?itok=NgVnWt_K' },
        { image: "https://novotime.pl/eng_pl_DAVOSA-NEWTON-PILOT-DAY-DATE-161-585-45-16244_6.jpg" },
        { image: "https://www.juweliervanwillegen.nl/media/catalog/product/cache/1/image/619x/9df78eab33525d08d6e5fb8d27136e95/A/4/A4531012-G751-437X-A20BA.1.jpg" },

    ]
    return (
        <View style={{ flex: 1 }}>
            <Swiper showsButtons={false} autoplay={true} autoplayTimeout={5} style={{ height: 400 }}>
                {index.map(user => (
                    <View key={'Index'} style={{ alignItems: 'center', }}>
                        <Image style={{ width: 340, height: 290, margin: 10, borderRadius: 6 }}
                            source={{ uri: user.image }}
                        />
                    </View>
                ))}
            </Swiper>
        </View>
    )
}

