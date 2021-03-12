import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import OrderHeader from '../components/OrderHeader'
import OrderContainer from '../containers/OrderContainer'
export default function Orders() {
    return (
        <View>
            <OrderHeader />
            <ScrollView>
                <OrderContainer />
            </ScrollView>
        </View>
    )
}
