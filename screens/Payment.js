import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PaymentHeader from '../components/PaymentHeader'
import PaymentContainer from '../containers/PaymentContainer'
import PaymentDetails from '../containers/PaymentDetails'
import PaymentFooter from '../components/PaymentFooter'
export default function Payment() {
    return (
        <View style={{ flex: 1 }}>
            <PaymentHeader />
            <ScrollView>
                <PaymentContainer />
                <PaymentDetails />
                <PaymentFooter />
            </ScrollView>
        </View>
    )
}
