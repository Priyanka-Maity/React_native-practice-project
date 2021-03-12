import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
export default function ImageContain() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        console.log('click')
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <View style={{ flex: 3, backgroundColor: '#fff', }}>
            <View style={{ flex: 2, marginHorizontal: 20, alignItems: 'center', elevation: 5, backgroundColor: '#fff', borderRadius: 6, marginTop: -40, marginBottom: 29 }}>
                <View style={{ elevation: 6, flex: 1, marginTop: -35 }}>
                    {image && <Image source={{ uri: image }}
                        style={{ height: 130, width: 130, borderRadius: 65, borderWidth: 6, borderColor: '#fff', }} />}

                </View>
                <View style={{ position: 'relative' }}>
                    <TouchableOpacity onPress={pickImage}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 3, color: '#a0c4ff' }}>Edit Photo</Text>
                    </TouchableOpacity>
                </View>

                <Text>Priyanka Maity</Text>
                <Text style={{ padding: 6 }}>Priyankamaity@gmail.com</Text>
            </View>
        </View>
    )
}