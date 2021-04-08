
import React, { useState } from 'react'
import { View, TextInput, Image, Button, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

import firebase from 'firebase'
require("firebase/firestore")
require("firebase/firebase-storage")

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup, updatePetname, updateLocation, updateAge, updateInfor, updateGender, updateBreed, updateImage } from '../actions/user'




function Save(props) {


    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = `picture/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
        console.log(childPath)

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = await firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob);

        try {
            const downloadUrl = await task.ref.getDownloadURL()
            console.log("Download", downloadUrl)
            await saveProfile(downloadUrl)
        } catch (error) {
            console.error(error)
            props.navigation.navigate('Profile')
        }
        // const taskProgress = snapshot => {
        //     console.log(`transferred: ${snapshot.bytesTransferred}`)
        // }

        // const taskCompleted = () => {
        //     task.snapshot.ref.getDownloadURL().then((snapshot) => {
        //         console.log("Snapshot", snapshot)
        //         saveProfile(snapshot);
        //     })
        // }

        // const taskError = snapshot => {
        //     console.log(snapshot)
        // }

        // task.on("state_changed", taskProgress, taskError, taskCompleted);
    }

    const saveProfile = async (downloadURL) => {
        try {
            await firebase.firestore()
                .collection('users')
                .doc(firebase.auth().currentUser.uid)
                .update({ image: downloadURL })
            props.updateImage(downloadURL)
            props.navigation.navigate('Profile')
        } catch (error) {
            console.log(error)
            props.navigation.navigate('Profile')
        }
    }

    // const saveProfile =()=>{

    //     firebase.firestore()
    //         .collection('users')
    //         .doc(firebase.auth().currentUser.uid)
    //         .collection("profile_picture")


    // }


    return (
        <View style={{ flex: 1, backgroundColor: "#D0FCFD" }}>
            <MaterialIcons

                style={{ marginTop: 30, marginLeft: 15 }}
                name="chevron-left"
                size="45"
                color="#7BD4E8"
                onPress={() =>
                    props.navigation.navigate("Add")
                }


            ></MaterialIcons>

            <Image style={{ width: 300, height: 300, marginTop: 100, left: 38, marginBottom: 40, borderRadius: 20 }}
                source={{ uri: props.route.params.image }}

            />

            <View style={{ backgroundColor: "#7BD4E8", borderRadius: 20, width: 120, left: 130 }}>
                {/* <Text style={{
                    
                }}>
                    sfda
                </Text> */}
                <Button
                    title="Save"
                    onPress={uploadImage} />
            </View>
        </View>
    )
}

// export default Save

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updatePetname, updateLocation, signup, updateAge, updateInfor, updateGender, updateBreed, updateImage }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Save)