import React from 'react'
import { View, Text, Image } from 'react-native'
import Swiper from 'react-native-swiper';
export default function AppView() {
    const Data = [
        { image: "https://review.chinabrands.com/chinabrands/seo/image/20190311/12%20Best%20Online%20Boutique%20Shopping%20Sites%20&%20Stores%20in%20India%20for%20Clothes.jpg" },
        { image: "https://i.pinimg.com/originals/cd/02/54/cd025424746fba6f13d159b9a0f5c86d.png" },
        { image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2017%2F08%2Fshoppingapp.jpg&q=85" },

    ]
    return (
        <View style={{ flex: 2 }}>
            <Swiper showsButtons={false} autoplay={true} autoplayTimeout={5} style={{ height: 200 }}>
                {Data.map(user => (
                    <View key={'Index'} style={{ alignItems: 'center' }}>
                        <Image style={{ width: 340, height: 150, margin: 10, borderRadius: 6 }}
                            source={{ uri: user.image }}
                        />
                    </View>
                ))}
            </Swiper>
        </View>
    )
}
