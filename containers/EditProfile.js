import React, { useState } from "react";
import { Component } from "react";
import { Alert, Modal, StyleSheet, Text, TextInput, Pressable, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../assets/styles';
import Firebase, { db } from '../config/Firebase.js'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup, updatePetname, updateLocation, updateAge, updateInfor, updateGender, updateBreed, updateUser } from '../actions/user'


class EditProfile extends Component {

    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {

        this.setState({ modalVisible: visible });

        if (!visible) {

            Alert.alert("Your profile change")
        }
    }

    update = () => {

    }

    render() {
        const { modalVisible } = this.state;

        return (
            <View >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
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
                                    value={this.props.user.age}
                                    onChangeText={age => this.props.updateAge(age)}
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
                                    value={this.props.user.location}
                                    onChangeText={location => this.props.updateLocation(location)}
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
                                    value={this.props.user.gender}
                                    onChangeText={gender => this.props.updateGender(gender)}
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
                                    value={this.props.user.breed}
                                    onChangeText={breed => this.props.updateBreed(breed)}
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
                                    value={this.props.user.infor}
                                    onChangeText={infor => this.props.updateInfor(infor)}
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
                                onPress={() => this.update()}

                                onPress={() => this.setModalVisible(!modalVisible)}

                            >
                                <Text
                                    style={{ fontWeight: "bold" }}>Save</Text>

                            </Pressable>

                        </View>


                    </View>
                </Modal>
                <TouchableOpacity
                    // style={{ left: 150, top: -20 }}
                    

                    onPress={() => this.setModalVisible(true)}

                >
                    <Icon name="cog" size="25" style={styles.topIconRight} />
                </TouchableOpacity>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updatePetname, updateLocation, signup, updateAge, updateInfor, updateGender, updateBreed, updateUser }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfile)