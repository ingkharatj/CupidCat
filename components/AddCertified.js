import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AddCertified = ({ navigation }) => {
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

            <Ionicons name="arrow-back-circle" size="40"
                style={{ right: 150, marginTop: 40 }}

                color="#7BD4E8"

                onPress={() => navigation.navigate('Profile')} />

            <View
                style={{
                    right: 0,
                    top: 0,
                    marginBottom: 10,
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",


                }} >
                {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
            </View>
            <View style={styles.cameraContainer}>

                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'} />
            </View>
            <View style={{ marginBottom: 30 }}>
                {/* <View>
                    {image && <Image source={{ uri: image }} style={{ flex: 0.001, top: 100, alignItems: "center" }} />}
                </View> */}
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
                        style={{ margin: 20, }}
                        name="md-scan-circle"
                        size="80"
                        color="white"
                        onPress={() => takePicture()}
                    // onPress={() => navigation.navigate('Save', {image})} 

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

                <View style={{ backgroundColor: "white", borderRadius: 20, width: 120, alignSelf: "center" }}>
                    <Button
                        title="Next"
                        onPress={() => navigation.navigate('SaveCertified', { image })} />
                </View>

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
        marginTop: 10
    },
    backgroundStyle: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',

    },

})

export default AddCertified;