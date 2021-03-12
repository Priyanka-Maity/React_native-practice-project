import React from 'react'
import { View, ScrollView } from 'react-native'
import AppHeader from '../components/AppHeader'
import CartContain from '../containers/CartContain'
import CartAmount from '../containers/CartAmount'
import CartFooter from '../components/CartFooter'
export default function Cart(props) {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <AppHeader />
                <CartContain />
                <CartAmount />
            </ScrollView>
            <CartFooter navigation={props.navigation} />

        </View>
    )
}
