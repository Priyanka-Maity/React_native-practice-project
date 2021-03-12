import React from 'react'
import { View, Text } from 'react-native'
import AppHeader from '../components/AppHeader';
import ProductHeader from '../components/ProductHeader'
import ProductContain from '../components/ProductContain'
import ProductDetails from '../containers/ProductDetails'
export default function Product(props) {
    return (
        <View style={{ flex: 1, }}>
            <AppHeader />
            <ProductHeader navigation={props.navigation} />
            <ProductContain />
            <ProductDetails navigation={props.navigation} />
        </View>
    )
}
