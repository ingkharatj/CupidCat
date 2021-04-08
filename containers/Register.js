import { TabActions } from "@react-navigation/native";
import React, { Component } from "react";
import Firebase from '../config/Firebase'
// import firebase from 'firebase';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { CheckBox } from 'react-native-elements'
// import styles from '../assets/styles';
// import firebase from 'firebase';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
// import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as Facebook from 'expo-facebook';
import { Alert } from "react-native";
import firebase from 'firebase/app';
import Icon from 'react-native-vector-icons/FontAwesome';
import Save from '../components/Save';
import Add from '../components/Add';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup, updatePetname, updateLocation, updateAge, updateInfor, updateGender, updateBreed, updateImage } from '../actions/user'


class RegisterScreen extends Component {



    handleSignUp = () => {
        this.props.signup()
        this.props.navigation.navigate('Main')
    }


    addPhoto = () => {
        this.props.navigation.navigate('Add')

    }

    render() {

        return (

            <View style={styles.backgroundStyle}>
                <View style={styles.container}>


                    <Text style={styles.text}>Enter Your in formation</Text>
                    <Text style={{ top: 60, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Email :</Text>
                    <Text style={{ top: 80, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Password :</Text>
                    <Text style={{ top: 100, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Pet Name :</Text>
                    <Text style={{ top: 120, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Age of your pet :</Text>
                    <Text style={{ top: 140, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Your Location :</Text>
                    <Text style={{ top: 160, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Gender :</Text>
                    <Text style={{ top: 180, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Breed :</Text>
                    <Text style={{ top: 200, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Your Pet Information :</Text>

                    {/* <Text style={{ top: 340, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Add your pet picture :</Text> */}

                    <View style={styles.select}>

                        {/* <MaterialCommunityIcons
                            name="plus-circle"
                            color="grey"
                            size="40"
                            onPress={this.addPhoto}

                        // onPress={this.onSignUp}
                        > */}

                        {/* </MaterialCommunityIcons> */}
                    </View>

                    <TextInput
                        style={styles.email}
                        autoCapitalize="none"
                        value={this.props.user.email}
                        autoCorrect={false}
                        placeholder="  Enter your email"
                        onChangeText={email => this.props.updateEmail(email)}

                    />
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        value={this.props.user.password}
                        autoCorrect={false}
                        placeholder="  Enter your password"
                        secureTextEntry={true}
                        onChangeText={password => this.props.updatePassword(password)}

                        style={styles.password}
                    />
                    <TextInput
                        style={styles.petName}
                        value={this.props.user.petname}
                        onChangeText={petname => this.props.updatePetname(petname)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Enter your pet name"
                    />
                    <TextInput
                        style={styles.age}
                        value={this.props.user.age}
                        onChangeText={age => this.props.updateAge(age)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Age"
                    />
                    <TextInput
                        style={styles.location}
                        placeholder="Your location"
                        value={this.props.user.location}
                        onChangeText={location => this.props.updateLocation(location)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Province"
                    />
                    <TextInput
                        style={styles.gender}
                        placeholder=" Gender"
                        value={this.props.user.gender}
                        onChangeText={gender => this.props.updateGender(gender)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    {/* <CheckBox

                        title="Male"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle={styles.gender}
                         />
                    <CheckBox
                        style={styles.gender}

                        title="Female"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'

                    /> */}
                    <TextInput
                        style={styles.breed}
                        placeholder=" Breed"
                        value={this.props.user.breed}
                        onChangeText={breed => this.props.updateBreed(breed)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput
                        multiline
                        style={styles.infor}
                        value={this.props.user.infor}
                        onChangeText={infor => this.props.updateInfor(infor)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Type your pet information"
                    />


                    <View style={styles.signup}>
                        <Button title='Submit'
                            buttonStyle={{
                                backgroundColor: "#7DC9DA"
                            }}
                            success
                            onPress={this.handleSignUp}


                        />
                    </View>


                </View>

            </View>

        )
    }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#7BD4E8',
        marginTop: 100,


    },

    email: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    password: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 240,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    petName: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 280,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    age: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 320,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    location: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 360,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    gender: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 120,
        top: 400,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    breed: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 100,
        top: 440,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    infor: {
        position: 'absolute',
        width: 310,
        height: 100,
        left: 15,
        top: 520,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    backgroundStyle: {
        backgroundColor: '#F0FCFF',
        flex: 1,
        alignItems: 'center',

    },

    signup: {
        top: 340,
        left: 240,
        fontWeight: 'bold',
        fontSize: 20,
    },
    select: {
        top: 310,
        left: 190,
        fontWeight: 'bold',
        fontSize: 20,

    },

    container: {
        flex: 1,
        padding: 10,
        alignItems: 'flex-start',


    },

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updatePetname, updateLocation, signup, updateAge, updateInfor, updateGender, updateBreed, updateImage, }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen)





