import React, { useState } from 'react'
import { View, TextInput, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import firebase from 'firebase'
require("firebase/firestore")
require("firebase/firebase-storage")


export default function Save(props) {

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = `picture/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
        console.log(childPath)

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob);

        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                saveProfile(snapshot);
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }

    const saveProfile = (downloadURL) => {

        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .collection("profile_picture")
            .add({
                downloadURL,
                creation: firebase.firestore.FieldValue.serverTimestamp()
            }).then((function () {
                props.navigation.popToTop()
            }))
    }

    // const saveProfile =()=>{

    //     firebase.firestore()
    //         .collection('users')
    //         .doc(firebase.auth().currentUser.uid)
    //         .collection("profile_picture")
            

    // }


    return (
        <View style={{ flex: 1 }}>
            <Image style={{width:200,height:200,alignItems:"center"}} 
            source={{ uri: props.route.params.image }} 
            />


            <Button title="Save" onPress={() => uploadImage()} />
        </View>
    )
}