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
                                <Text style={{ color: '#7BD4E8', fontSize: 22, fontWeight: '700', margin: 15, marginTop: 30 }}>Edit Your Pet Profile</Text>

                                <Text style={{ color: '#7BD4E8', fontSize: 16, fontWeight: '700', margin: 15 }}>Age of your pet :</Text>
                                <TextInput
                                    style={{
                                        backgroundColor: "#EAF5F8",
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
                                <Text style={{ color: '#7BD4E8', fontSize: 16, fontWeight: '700', margin: 15 }}>Your Location :</Text>
                                <TextInput
                                    style={{
                                        backgroundColor: "#EAF5F8",
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
                                <Text style={{ color: '#7BD4E8', fontSize: 16, fontWeight: '700', margin: 15 }}>Gender :</Text>
                                <TextInput
                                    style={{
                                        backgroundColor: "#EAF5F8",
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
                                <Text style={{ color: '#7BD4E8', fontSize: 16, fontWeight: '700', margin: 15 }}>Breed :</Text>
                                <TextInput
                                    style={{
                                        backgroundColor: "#EAF5F8",
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
                                <Text style={{ color: '#7BD4E8', fontSize: 16, fontWeight: '700', margin: 15 }}>Your Pet Information :</Text>
                                <TextInput
                                    multiline
                                    style={{
                                        backgroundColor: "#EAF5F8",
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
                                <Text style={{ color: '#7BD4E8', fontSize: 16, fontWeight: '700', margin: 15 }}>Change your pet picture :</Text>

                            </View>

                            <Pressable

                                style={{
                                    backgroundColor: "red",
                                    padding: 10,
                                    alignSelf: "flex-end",
                                    margin: 20,
                                    borderRadius: 20,
                                    top: -25

                                }}

                                onPress={() => this.setModalVisible(!modalVisible)}


                            >
                                <Text >Save</Text>
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

// const EditProfile = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     return (
//         <View style={styles.centeredView}>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     Alert.alert("Modal has been closed.");
//                     setModalVisible(!modalVisible);
//                 }}
//             >
//                 <View style={styles.centeredView}>
//                     <View style={styles.modalView}>
//                         <Text style={styles.infoContent}>Petname: </Text>
//                         <TextInput
//                         style={styles.petName}
//                         value={this.props.user.petname}
//                         onChangeText={petname => this.props.updatePetname(petname)}
//                         autoCapitalize="none"
//                         autoCorrect={false}
//                         placeholder="  Enter your pet name"
//                     />
//                         <Text style={styles.infoContent}>Age: </Text>
//                         <Text style={styles.infoContent}>Gender: </Text>
//                         <Text style={styles.infoContent}>Breed: </Text>
//                         <Text style={styles.infoContent}>Location: </Text>
//                         <Text style={styles.infoContent}>Infor: </Text>




//                         <Text style={styles.modalText}>Hello World!</Text>
//                         <Pressable
//                             style={[styles.button, styles.buttonClose]}
//                             onPress={() => setModalVisible(!modalVisible)}
//                         >
//                             <Text style={styles.textStyle}>Hide Modal</Text>
//                         </Pressable>
//                     </View>
//                 </View>
//             </Modal>
//             <TouchableOpacity
//                 style={{ left: 150, top: -20 }}
//                 onPress={() => setModalVisible(true)}
//             >
//                 <Icon name="cog" size="25" style={styles.topIconRight} />
//             </TouchableOpacity>
//         </View>
//     );
// };



// export default EditProfile;

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