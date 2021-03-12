import React from 'react'
import { View, Text } from 'react-native'
import AccountHeader from '../components/AccountHeader'
import AccountContainer from '../containers/AccountContainer'
export default function Account(props) {
    return (
        <View style={{ flex: 1 }}>
            <AccountHeader />
            <AccountContainer navigation={props.navigation} />
        </View>
    )
}
