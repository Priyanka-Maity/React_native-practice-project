import React from 'react'
import { View, ScrollView } from 'react-native'
import AppHeader from '../components/AppHeader'
import NotificationHeader from '../components/NotificationHeader'
import NotificationContainer from '../containers/NotificationContainer'
export default function Notification(props) {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <AppHeader />
                <NotificationHeader navigation={props.navigation} />
                <NotificationContainer />
            </ScrollView>
        </View>
    )
}
