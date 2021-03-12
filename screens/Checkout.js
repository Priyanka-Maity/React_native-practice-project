import React from 'react'
import { View, ScrollView } from 'react-native'
import AppHeader from '../components/AppHeader'
import CheckoutHeader from '../components/CheckoutHeader'
import AddressContain from '../containers/AddressContain'
import CheckoutFooter from '../components/CheckoutFooter'
export default function Checkout(props) {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <AppHeader />
                <CheckoutHeader />
                <AddressContain />
            </ScrollView>
            <CheckoutFooter navigation={props.navigation} />
        </View>
    )
}
