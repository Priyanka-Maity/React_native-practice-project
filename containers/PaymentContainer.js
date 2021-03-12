import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { lightThemes, fontColor } from '../constants/Color';
import { GlobalContext } from '../context/Context';
export default function PaymentContainer() {
    const { show, tol, setShow, setTol, tog, setTog } = useContext(GlobalContext)
    return (

        <View style={{ flex: 1, margin: 10 }}>
            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', paddingBottom: 20, marginTop: 10 }}>Payment Option</Text>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => { setShow(!show) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 70, backgroundColor: '#E6E6E6', }}>
                        <Image source={{ uri: 'https://i.dlpng.com/static/png/6794578_preview.png' }}
                            style={{ height: 30, width: 40 }}
                        />
                        <Text style={{ fontSize: 17, color: 'gray' }}>Mastercard</Text>
                        {show ? <AntDesign name="check" size={24} color="#136ff0" /> : null}
                    </View>
                    {show ? <View style={{ height: 300, backgroundColor: fontColor.lightFont }}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ paddingBottom: 10 }}>Card Number*</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                                <TextInput placeholder="Enter the Card Number " style={{ paddingLeft: 5, }} />
                            </View>
                            <Text style={{ paddingBottom: 10 }}>Card Holder*</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                                <TextInput placeholder="Card Holde " style={{ paddingLeft: 5, }} />
                            </View>
                            <Text style={{ paddingBottom: 10 }}>CVC Code</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                                <TextInput style={{ paddingLeft: 5, }} secureTextEntry={true} />
                            </View>

                        </View>
                    </View> : null}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setTol(!tol) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 70, backgroundColor: '#E6E6E6', marginTop: 10 }}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png' }}
                            style={{ height: 13, width: 40 }}
                        />
                        <Text style={{ fontSize: 17, color: 'gray' }}>Mastercard</Text>
                        {tol ? <AntDesign name="check" size={24} color="#136ff0" /> : null}
                    </View>
                    {tol ? <View style={{ height: 300, backgroundColor: fontColor.lightFont }}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ paddingBottom: 10 }}>Card Number*</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                                <TextInput placeholder="Enter the Card Number " style={{ paddingLeft: 5, }} />
                            </View>
                            <Text style={{ paddingBottom: 10 }}>Card Holder*</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                                <TextInput placeholder="Card Holde " style={{ paddingLeft: 5, }} />
                            </View>
                            <Text style={{ paddingBottom: 10 }}>CVC Code</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                                <TextInput style={{ paddingLeft: 5, }} secureTextEntry={true} />
                            </View>

                        </View>
                    </View> : null}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setTog(!tog) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 70, backgroundColor: '#E6E6E6', marginTop: 10 }}>
                        <Image source={{ uri: 'https://cdn.iconscout.com/icon/free/png-512/paytm-226448.png' }}
                            style={{ height: 13, width: 40 }}
                        />
                        <Text style={{ fontSize: 17, color: 'gray' }}>Mastercard</Text>
                        {tog ? <AntDesign name="check" size={24} color="#136ff0" /> : null}
                    </View>
                    {tog ? <View style={{ height: 300, backgroundColor: fontColor.lightFont }}>
                        <View style={{ margin: 10 }}>
                            <Text style={{ paddingBottom: 10 }}>Card Number*</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                                <TextInput placeholder="Enter the Card Number " style={{ paddingLeft: 5, }} />
                            </View>
                            <Text style={{ paddingBottom: 10 }}>Card Holder*</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                                <TextInput placeholder="Card Holde " style={{ paddingLeft: 5, }} />
                            </View>
                            <Text style={{ paddingBottom: 10 }}>CVC Code</Text>
                            <View style={{ height: 50, borderWidth: 1, borderColor: fontColor.darkFont, marginBottom: 10, justifyContent: 'center' }}>
                                <TextInput style={{ paddingLeft: 5, }} secureTextEntry={true} />
                            </View>

                        </View>
                    </View> : null}
                </TouchableOpacity>
            </View>
            <View style={{ height: 20 }}></View>

        </View>
    )
}