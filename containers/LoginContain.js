import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { lightThemes, fontColor } from '../constants/Color';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Line } from 'react-native-svg';
import { GlobalContext } from '../context/Context';
export default function LoginContain(props) {
    const { show, setShow, visible, setVisible, errortext, setErrortext, userEmail, setUserEmail, userPassword, setUserPassword } = useContext(GlobalContext)
    const handleSubmitPress = () => {
        setErrortext('');
        if (!userEmail) {
            alert('Please fill Email');
            return ("priyanka918@gmail.com");
        }
        if (!userPassword) {
            alert('Please fill Password');
            return;

        }
        props.navigation.navigate('Home')
    }
    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', paddingVertical: 20 }}>Zikode</Text>
            <View style={{ flexDirection: 'row', height: 30, justifyContent: 'center', marginTop: 20 }}>
                <Svg height="210" width="100">
                    <Line x1="0" y1="0" x2='200' y2="0" stroke="grey" strokeWidth="5" />
                </Svg>
                <MaterialIcons name="account-circle" size={54} color="grey" style={{ marginTop: -25 }} />
                <Svg height="210" width="100">
                    <Line x1="0" y1="0" x2='200' y2="0" stroke="grey" strokeWidth="5" />
                </Svg>
            </View>
            <Text style={{ textAlign: 'center', paddingVertical: 30, fontSize: 15, fontWeight: 'bold' }}>S i g n I n</Text>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <View style={{ height: 50, borderBottomWidth: 1, borderBottomColor: fontColor.darkFont, marginVertical: 10, justifyContent: 'center' }}>

                    <TextInput placeholder="Enter the Email " style={{ paddingLeft: 5, paddingVertical: 10 }} onChangeText={(e) => { setUserEmail(e) }} />
                </View>
                <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', paddingLeft: 5, borderBottomWidth: 1, borderBottomColor: fontColor.darkFont, justifyContent: 'space-between', marginVertical: 10, }}>

                    <TextInput placeholder="Password*" style={{ paddingLeft: 5, width: 280, }} secureTextEntry={visible} onChangeText={(e) => { setUserPassword(e) }} />
                    <TouchableOpacity onPress={() => { setVisible(!visible), setShow(!show) }}>
                        <MaterialCommunityIcons name={show ? "eye-outline" : "eye-off-outline"} size={24} color="black" style={{ paddingRight: 5 }} />
                    </TouchableOpacity>
                </View>
                {errortext != '' ? (
                    <Text style={styles.errorTextStyle}>
                        {  errortext}
                    </Text>
                ) : null}
                <TouchableOpacity onPress={handleSubmitPress} style={{ elevation: 3, height: 90, marginTop: 10 }}>
                    <View style={{ height: 50, backgroundColor: lightThemes.primaryColor, borderRadius: 4, alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ color: fontColor.lightFont, fontSize: 15, fontWeight: 'bold' }}>Log in To Account</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
