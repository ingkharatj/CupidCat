import { TabActions } from "@react-navigation/native";
import React from "react";
import firebase from 'firebase';

import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
// import styles from '../assets/styles';

// import firebase from 'firebase';
import { Button } from 'react-native-elements';



// const LoginScreen = ({ navigation }) => {
class LoginScreen extends React.Component {


    state = {
        email: '',
        password: '',
    }

    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged(user => {
            this.setState({
                loading: false,
                user
            });
        });
    }
    componentWillUnmount() {
        this.authSubscription();
    }

    onSignUpPress = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                alert('Sign up Success')
            })
            .catch(msgError => {
                alert('Sign up error')
            })
    }
    onLoginButtonPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.navigation.navigate('Main')
            })
            .catch(msgError => {
                alert('Login error please check your email or password.')
            })
    }
    render() {




        return (

            <View style={styles.backgroundStyle}>
                <Text style={styles.text}>CupidCat</Text>
                <Text style={{ right: 120, top: 100, color: '#7BD4E8', fontSize: 20, fontWeight: '700' }}>Email :</Text>
                <Text style={{ right: 100, top: 140, color: '#7BD4E8', fontSize: 20, fontWeight: '700' }}>Password :</Text>

                <TextInput

                    style={styles.email}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="  Enter your email"
                    onChangeText={str => this.setState({ email: str })}


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
                <View style={styles.signin}>
                    <Button title='SignIn'
                        buttonStyle={{
                            backgroundColor: "#7DC9DA",

                        }}
                        // onPress={() => navigation.navigate('Main')}

                        onPress={this.onLoginButtonPress}
                    />
                </View>
                <View style={styles.signup}>
                    <Button title='SignUp'
                        buttonStyle={{
                            backgroundColor: "#7DC9DA"
                        }}
                        success
                        onPress={this.onSignUpPress}
                        // onPress={() => navigation.navigate('Register')}


                    />
                </View>

            </View>

        )
    }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 48,
        fontWeight: "bold",
        color: '#7BD4E8',
        marginTop: 100,


    },
    email: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 258,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    password: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 320,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    backgroundStyle: {
        backgroundColor: '#F0FCFF',
        flex: 1,
        alignItems: 'center',

    },
    signin: {
        right: 50,
        top: 204,
        fontWeight: 'bold',
        fontSize: 20
    },
    signup: {
        left: 50,
        top: 163,
        fontWeight: 'bold',
        fontSize: 20,


    },

});

export default LoginScreen;
