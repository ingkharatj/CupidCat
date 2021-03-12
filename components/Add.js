import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';



export default function Add() {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');

            const galleryStatus = await ImagePicker.requestCameraRollPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');


        })();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null);
            setImage(data.uri);
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    if (hasCameraPermission === null || hasGalleryPermission === false) {
        return <View />;
    }
    if (hasCameraPermission === false || hasGalleryPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (

        <View style={styles.backgroundStyle}>

            <View style={styles.cameraContainer}>

                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'} />
            </View>
            <View style={{ marginBottom: 30 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                    <AntDesign
                        style={{ margin: 20 }}
                        name="picture"
                        size="40"
                        color="white"

                        onPress={() => pickImage()}
                    >
                    </AntDesign>
                    <Ionicons
                        style={{ margin: 20 }}
                        name="md-scan-circle"
                        size="80"
                        color="white"
                        onPress={() => takePicture()}

                    >
                    </Ionicons>
                    <MaterialIcons
                        style={{ margin: 20 }}
                        name="flip-camera-ios"
                        size="35"
                        color="white"
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}
                    >
                    </MaterialIcons>
                    
                </View>

                <View>
                {image && <Image source={{ uri: image }} style={{ flex:0.5 }} />}
                </View>
                <Button title="Save" onPress={() => navigation.navigate('Save', { image })} />
            
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        // flexDirection: 'row',
        // borderRadius:160

    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
        margin: 20,
        marginTop: 50
    },
    backgroundStyle: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',

    },

})