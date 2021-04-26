import React, { useState, useEffect } from "react";
import { Component } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, Pressable, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/styles';
import Firebase, { db } from '../config/Firebase.js'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup, updatePetname, updateLocation, updateAge, updateInfor, updateGender, updateBreed, updateUser } from '../actions/user'


const EditProfile = (props) => {

    const userAuth = Firebase.auth().currentUser.uid

    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);


    const [age, setAge] = useState('');
    const [infor, setInfor] = useState('');
    const [location, setLocation] = useState('');
    const [petname, setPetname] = useState('');
    const [gender, setGender] = useState('');
    const [breed, setBreed] = useState('');

    // setModalVisible = (visible) => {

    //     this.setState({ modalVisible: visible });

    //     if (!visible) {

    //         Alert.alert("Your profile change")
    //     }
    // }
    useEffect(() => {
        db.collection("users")
            .doc(userAuth)
            .get()
            .then(doc => {
                // console.log(doc.data().age)
                setAge(doc.data().age)
                setInfor(doc.data().infor)
                setLocation(doc.data().location)
                setPetname(doc.data().petname)
                setGender(doc.data().gender)
                setBreed(doc.data().breed)
            })

    }, [])



    const update = () => {

        db.collection('users').doc(userAuth).update({
            age: age,
            infor: infor,
            location: location,
            gender: gender,
            breed: breed
        })
        // updateUser(props)
        Alert.alert(
            "Update your Pet profile",
            "Please logout to change your Pet profile. ",
            [
                {
                    text: "Ok",
                    onPress: () => {
                        setModalVisible(!modalVisible)


                    },
                },
            ],
            { cancelable: false }
        );


    }


    return (
        <View >

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}

            >

                <View style={styles.centeredView} >
                    <View style={styles.modalView}>
                        <View style={{ justifyContent: "flex-start" }}>
                            <Text style={{ color: '#4E7E8A', fontSize: 24, fontWeight: '700', margin: 15, marginTop: 30 }}>Edit Your Pet Profile</Text>

                            <Text style={{ color: '#4E7E8A', fontSize: 16, fontWeight: '700', margin: 15 }}>Age of your pet :</Text>
                            <TextInput
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 5,
                                    width: 50,
                                    height: 27,
                                    left: 160,
                                    top: -40
                                }}
                                value={age}
                                onChangeText={age => setAge(age)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="  Age"
                            />
                            <Text style={{ color: '#4E7E8A', fontSize: 16, fontWeight: '700', margin: 15 }}>Your Location :</Text>
                            <TextInput
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 5,
                                    width: 170,
                                    height: 27,
                                    left: 150,
                                    top: -40

                                }}
                                placeholder="Your location"
                                value={location}
                                // onChangeText={location => this.props.updateLocation(location)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="  Province"
                            />
                            <Text style={{ color: '#4E7E8A', fontSize: 16, fontWeight: '700', margin: 15 }}>Gender :</Text>
                            <TextInput
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 5,
                                    width: 170,
                                    height: 27,
                                    left: 100,
                                    top: -40
                                }}
                                placeholder=" Gender"
                                value={gender}
                                // onChangeText={gender => this.props.updateGender(gender)}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Text style={{ color: '#4E7E8A', fontSize: 16, fontWeight: '700', margin: 15 }}>Breed :</Text>
                            <TextInput
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 5,
                                    width: 100,
                                    height: 27,
                                    left: 90,
                                    top: -40
                                }}
                                placeholder=" Breed"
                                value={breed}
                                // onChangeText={breed => this.props.updateBreed(breed)}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <Text style={{ color: '#4E7E8A', fontSize: 16, fontWeight: '700', margin: 15 }}>Your Pet Information :</Text>
                            <TextInput
                                multiline
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 5,
                                    width: 280,
                                    height: 100,
                                    left: 15
                                }}
                                value={infor}
                                // onChangeText={infor => this.props.updateInfor(infor)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="  Type your pet information"
                            />
                            {/* <Text style={{ color: '#7BD4E8', fontSize: 16, fontWeight: '700', margin: 15 }}>Change your pet picture :</Text> */}

                        </View>

                        <Pressable
                            style={{
                                backgroundColor: "#F55482",
                                padding: 10,
                                alignSelf: "flex-end",
                                margin: 20,
                                borderRadius: 20,
                                top: -25,
                                marginTop: 40
                            }}
                            onPress={() => update()}


                        >
                            <Text
                                style={{ fontWeight: "bold" }}>Save</Text>

                        </Pressable>

                    </View>


                </View>
            </Modal>
            <TouchableOpacity
                // style={{ left: 150, top: -20 }}


                // onPress={() => this.setModalVisible(true)}
                onPress={() => setModalVisible(true)}

            >
                <Icon name="cog" size="25" style={styles.topIconRight} />
            </TouchableOpacity>
        </View>
    )

}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updatePetname, updateLocation, signup, updateAge, updateInfor, updateGender, updateBreed, updateUser }, dispatch)
}


// export default EditProfile;



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfile)