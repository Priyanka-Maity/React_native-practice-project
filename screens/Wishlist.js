import React from 'react'
import { View, ScrollView } from 'react-native'
import AppHeader from '../components/AppHeader'
import WishlistHeader from '../components/WishlistHeader'
import WishlistContain from '../containers/WishlistContain'
export default function Wishlist(props) {
    return (
        <View style={{ flex: 1 }}>
            <AppHeader />
            <WishlistHeader navigation={props.navigation} />
            <ScrollView>
                <WishlistContain navigation={props.navigation} />
            </ScrollView>
        </View>
    )
}
