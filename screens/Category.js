import React from 'react'
import { View, } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import AppHeader from '../components/AppHeader';
import CategoryContain from '../components/CategoryContain'
import CategoryList from '../containers/CategoryList'
export default function Category(props) {
    return (
        <View style={{ flex: 1, }}>
            <AppHeader />
            <CategoryContain navigation={props.navigation} />
            <ScrollView>
                <CategoryList navigation={props.navigation} />
            </ScrollView>
        </View>
    )
}
