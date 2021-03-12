import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Svg, { Line } from 'react-native-svg';
export default function LoginContainer() {
    return (
        <View>
            <View style={{ flex: 2 }}>
                <View style={{ flexDirection: 'row', height: 30, justifyContent: 'center', marginTop: 20 }}>
                    <Svg height="210" width="50">
                        <Line x1="0" y1="0" x2='100' y2="0" stroke="grey" strokeWidth="5" />
                    </Svg>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: -10, paddingHorizontal: 4 }}>OR</Text>
                    <Svg height="210" width="50">
                        <Line x1="0" y1="0" x2='100' y2="0" stroke="grey" strokeWidth="5" />
                    </Svg>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <View>
                        <Text>Dont have an account?</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingHorizontal: 5 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
