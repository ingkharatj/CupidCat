import { TabActions } from "@react-navigation/native";
import React, { Component } from "react";
// import firebase from 'firebase';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
// import styles from '../assets/styles';
// import firebase from 'firebase';
import { Button } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import "firebase/auth";
import { LoginManager, AccessToken } from 'react-native-fbsdk';
// import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as Facebook from 'expo-facebook';
import { Alert } from "react-native";
import 'firebase/firestore';
import firebase from 'firebase/app';
import Icon from 'react-native-vector-icons/FontAwesome';
import Save from '../components/Save';
import Add from '../components/Add';



class RegisterScreen extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            pet_name: '',
            location: '',
            age: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }
    // test(){
    //     const dbh = firebase.firestore();
    //     dbh.collection("users").doc("mario").set({
    //         employment: "plumber",
    //         outfitColor: "red",
    //         specialAttack: "fireball"
    //       })
    // }

    onSignUp() {
        const { email, password, pet_name, location, age } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        pet_name,
                        email,
                        location,
                        age,
                    })
                console.log(result)
                this.props.navigation.navigate('Login')

            })
            .catch((error) => {
                Alert.alert("", err.message)

                console.log(error)
            })
    }
    addPhoto() {
        this.props.navigation.navigate('Add')

    }

    render() {

        return (

            <View style={styles.backgroundStyle}>
                <View style={styles.container}>


                    <Text style={styles.text}>Enter Your in formation</Text>
                    <Text style={{ top: 100, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Email :</Text>
                    <Text style={{ top: 120, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Password :</Text>
                    <Text style={{ top: 140, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Pet Name :</Text>
                    <Text style={{ top: 160, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Age of your pet :</Text>
                    <Text style={{ top: 180, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Your Location :</Text>
                    <Text style={{ top: 220, color: '#7BD4E8', fontSize: 16, fontWeight: '700' }}>Add your pet picture :</Text>

                    <View style={styles.select}>

                        <MaterialCommunityIcons
                            name="plus-circle"
                            color="grey"
                            size="40"
                            onPress={this.addPhoto}

                        // onPress={this.onSignUp}
                        >

                        </MaterialCommunityIcons>
                    </View>

                    <TextInput
                        style={styles.email}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Enter your email"
                        onChangeText={(email) => this.setState({ email })}

                    />
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Enter your password"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}

                        style={styles.password}
                    />
                    <TextInput
                        style={styles.petName}
                        placeholder="name"
                        onChangeText={(pet_name) => this.setState({ pet_name })}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Enter your pet name"
                    />
                    <TextInput
                        style={styles.age}
                        placeholder="age"
                        onChangeText={(age) => this.setState({ age })}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Age"
                    />
                    <TextInput
                        style={styles.location}
                        placeholder="Your location"
                        onChangeText={(location) => this.setState({ location })}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Province"
                    />


                    <View style={styles.signup}>
                        <Button title='Enter'
                            buttonStyle={{
                                backgroundColor: "#7DC9DA"
                            }}
                            success
                            onPress={this.onSignUp}
                            onPress={() => uploadImage()}

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
        top: 240,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    password: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 280,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    petName: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 320,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    age: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 360,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    location: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 400,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    backgroundStyle: {
        backgroundColor: '#F0FCFF',
        flex: 1,
        alignItems: 'center',

    },

    signup: {
        top: 250,
        left: 240,
        fontWeight: 'bold',
        fontSize: 20,
    },
    select: {
        top: 190,
        left: 180,
        // fontWeight: 'bold',
        // fontSize: 20,

    },

    container: {
        flex: 1,
        padding: 10,
        alignItems: 'flex-start',


    },

});

export default RegisterScreen;





