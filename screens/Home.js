import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AppHeader from '../components/AppHeader'
import AppView from '../containers/AppView'
import HomeCategory from '../containers/HomeCategory'
import HomeProduct from '../containers/HomeProduct'
import Carosal from '../containers/Carosal'

export default function Home(props) {

    return (
        <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
            <AppHeader navigation={props.navigation} />
            <AppView />
            <HomeCategory navigation={props.navigation} />
            <HomeProduct navigation={props.navigation} />
            <Carosal />
        </ScrollView>
    )
}
