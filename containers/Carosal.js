import React from 'react'
import { View, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
export default function Carosal() {
    const Data = [
        { image: "https://www.bijlibachao.com/wp-content/uploads/2012/08/SplitAC.jpg" },
        { image: "https://www.bijlibachao.com/wp-content/uploads/2012/08/SplitAC.jpg" },
        { image: "https://image.shutterstock.com/image-photo/split-ac-black-background-260nw-1366002128.jpg" },

    ]
    return (
        <View style={{ flex: 1, margin: 10, }} >
            <Carousel
                autoplay={true}
                data={Data}
                layout={"stack"}
                layoutCardOffset={20}
                sliderWidth={370}
                itemWidth={300}
                renderItem={({ item }) => {
                    return (
                        <Image source={{ uri: item.image }}
                            style={{ height: 130, width: 305, borderRadius: 5 }} />)
                }}
            />
        </View>
    );
}
