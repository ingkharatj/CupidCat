import { TabActions } from "@react-navigation/native";
import React from "react";
import Firebase from '../config/Firebase'
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
// import styles from '../assets/styles';
// import firebase from 'firebase';
import { Button, Image } from 'react-native-elements';
// import "firebase/auth";
import { LoginManager, AccessToken } from 'react-native-fbsdk';
// import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as Facebook from 'expo-facebook';
import { max } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login } from '../actions/user'




class LoginScreen extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleLogin = () => {
        this.props.login()
        this.props.navigation.navigate('Main')
    }

    componentDidMount = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // this.props.getUser(user.uid)
                if (this.props.user != null) {
                    this.props.navigation.navigate('Main')
                }
            }
        })
    }



    async loginWithFacebook() {
        try {
            await Facebook.initializeAsync({
                appId: '760729524865231',
            });
            const {
                type,
                token,
                expirationDate,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            // if (type == 'success') {

            //     const credential = firebase.auth.FacebookAuthProvider.credential(token)

            //     firebase.auth().signInWithCredential(credential).catch((error) => {
            //         console.log(error)
            //     })
            // }
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            }

            else {
                type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }

    }

    render() {

        return (

            <View style={styles.backgroundStyle}>
                <Text style={styles.text}>CupidCat</Text>
                {/* <Image 
                      source={require('../assets/images/catpics/logotest.png')}
                      ></Image> */}
                <Image
                    source={require('../assets/images/catpics/catlogo.png')}
                    style={{ width: 200, height: 200 }}
                />



                {/* <View>
                <Text style={{ right: 120, top: 100, color: '#7BD4E8', fontSize: 20, fontWeight: '700' }}>Email :</Text>
                <Text style={{ right: 100, top: 140, color: '#7BD4E8', fontSize: 20, fontWeight: '700' }}>Password :</Text>
                </View> */}


                <View style={styles.loginbox}>
                    <TextInput
                        style={styles.loginregister}
                        value={this.props.user.email}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Enter your email"
                        onChangeText={email => this.props.updateEmail(email)}

                    />
                    <TextInput
                        style={styles.loginregister}
                        value={this.props.user.password}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="  Enter your password"
                        secureTextEntry={true}
                        onChangeText={password => this.props.updatePassword(password)}
                    // style={styles.password}
                    />
                </View>


                {/* test */}
                {/* <TextInput style={styles.input}                     placeholder="  Enter yasdour email"
/> */}


                <View style={styles.signin}>
                    <Button title='Login'
                        buttonStyle={{
                            backgroundColor: "#7DC9DA", width: 250,
                            height: 40, fontSize: 18, borderRadius: 15,

                        }}
                        // onPress={() => navigation.navigate('Main')}
                        onPress={this.handleLogin}
                    />
                </View>
                <View style={styles.signup}>
                    <Button title='SignUp'
                        buttonStyle={{
                            backgroundColor: "#7DC9DA", width: 250,
                            height: 40, fontSize: 18, borderRadius: 15,

                        }}
                        success

                        onPress={() => this.props.navigation.navigate('Register')}

                    />
                </View>

                {/* <View style={styles.signup}>
                    <Button
                        title='Login With Facebook'
                        buttonStyle={{
                            backgroundColor: "#7DC9DA", width: 250,
                            height: 40, fontSize: 18, borderRadius: 15,
                        }}
                        success
                        onPress={() => this.loginWithFacebook()}
                    />
                </View> */}
                <View style={styles.signup}>

                    <Icon.Button
                        style={{ width: 250, height: 40, fontSize: 18 }}
                        name="facebook"
                        backgroundColor="#3b5998"
                        onPress={this.loginWithFacebook}>
                            |       Login with Facebook        

                    </Icon.Button>

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
        top: 295,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    password: {
        position: 'absolute',
        width: 170,
        height: 27,
        left: 170,
        top: 362,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    backgroundStyle: {
        backgroundColor: '#F0FCFF',
        flex: 1,
        alignItems: 'center',

    },
    signin: {
        marginTop: 50,
        width: 250,
        height: 35,
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: "center",


    },
    signup: {

        marginTop: 20,
        width: 250,
        height: 35,
        alignItems: "center",
        fontWeight: 'bold',
        fontSize: 18,


    },
    facebook_signup: {
        alignItems: "center",
        top: 200,
        fontWeight: 'bold',
        fontSize: 20,


    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
    loginregister: {
        borderRadius: 25,
        borderColor: "#7BD4E8",
        width: 250,
        height: 35,
        fontSize: 16,
        alignItems: "center",
        fontWeight: "bold",
        color: '#7BD4E8',
        marginTop: 20,
        backgroundColor: "white",

    },
    loginbox: {
        marginTop: 20
    }

});

// export default LoginScreen;
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen)


