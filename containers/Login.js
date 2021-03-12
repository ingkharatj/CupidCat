import { TabActions } from "@react-navigation/native";
import React from "react";
import firebase from 'firebase';
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
// import styles from '../assets/styles';
// import firebase from 'firebase';
import { Button } from 'react-native-elements';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
// import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as Facebook from 'expo-facebook';
import Icon from 'react-native-vector-icons/FontAwesome';


class LoginScreen extends React.Component {

    // state = {
    //     email: '',
    //     password: '',
    // }
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            // name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    // componentDidMount() {
    //     this.authSubscription = firebase.auth().onAuthStateChanged(user => {
    //         this.setState({
    //             loading: false,
    //             user
    //         });
    //     });
    // }
    // componentWillUnmount() {
    //     this.authSubscription();
    // }

    onSignUp() {
        this.props.navigation.navigate('Register')
    }

    Login = () => {
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
                <Text style={{ right: 120, top: 140, color: '#7BD4E8', fontSize: 20, fontWeight: '700' }}>Email :</Text>
                <Text style={{ right: 100, top: 180, color: '#7BD4E8', fontSize: 20, fontWeight: '700' }}>Password :</Text>

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
                <View style={styles.signin}>
                    <Button title='Login'
                        buttonStyle={{
                            backgroundColor: "#7DC9DA",

                        }}
                        // onPress={() => navigation.navigate('Main')}
                        onPress={this.Login}
                    />
                </View>
                <View style={styles.signup}>
                    <Button title='SignUp'
                        buttonStyle={{
                            backgroundColor: "#7DC9DA"
                        }}
                        success

                        onPress={this.onSignUp}

                    />
                </View>
                <View style={styles.facebook_signup}>

                    <Icon.Button
                        name="facebook"
                        backgroundColor="#3b5998"
                        onPress={this.loginWithFacebook}>
                        Login with Facebook
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
        borderRadius: 5,
    },
    backgroundStyle: {
        backgroundColor: '#F0FCFF',
        flex: 1,
        alignItems: 'center',

    },
    signin: {
        alignItems: "center",
        top: 200,
        fontWeight: 'bold',
        fontSize: 20,

    },
    signup: {
        top: 200,
        alignItems: "center",
        fontWeight: 'bold',
        fontSize: 20,


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

});

export default LoginScreen;




// export default class LoginScreen extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = ({
//             email: '',
//             password: ''
//         })
//     }

//     componentDidMount() {

//         firebase.auth().onAuthStateChanged((user) => {
//             if (user != null) {
//                 console.log(user)
//             }
//         })
//     }

//     signUpUser = (email, password) => {

//         try {

//             if (this.state.password.length < 6) {
//                 alert("Please enter atleast 6 characters")
//                 return;
//             }

//             firebase.auth().createUserWithEmailAndPassword(email, password)
//         }
//         catch (error) {
//             console.log(error.toString())
//         }
//     }

//     loginUser = (email, password) => {

//         try {

//             firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
//                 console.log(user)

//             })
//         }
//         catch (error) {
//             console.log(error.toString())
//         }
//     }

//     async loginWithFacebook() {
//         try {
//             await Facebook.initializeAsync({
//                 appId: '760729524865231',
//             });
//             const {
//                 type,
//                 token,
//                 expirationDate,
//                 permissions,
//                 declinedPermissions,
//             } = await Facebook.logInWithReadPermissionsAsync({
//                 permissions: ['public_profile'],
//             });
//             // if (type == 'success') {

//             //     const credential = firebase.auth.FacebookAuthProvider.credential(token)

//             //     firebase.auth().signInWithCredential(credential).catch((error) => {
//             //         console.log(error)
//             //     })
//             // }
//             if (type === 'success') {
//                 // Get the user's name using Facebook's Graph API
//                 const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//                 Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
//             }

//             else {
//                 type === 'cancel'
//             }
//         } catch ({ message }) {
//             alert(`Facebook Login Error: ${message}`);
//         }


//     }

//     render() {
//         return (
//             <Container style={styles.container}>
//                 <Form>
//                     <Item floatingLabel>
//                         <Label>Email</Label>
//                         <Input
//                             autoCorrect={false}
//                             autoCapitalize="none"
//                             onChangeText={(email) => this.setState({ email })}
//                         />

//                     </Item>

//                     <Item floatingLabel>
//                         <Label>Password</Label>
//                         <Input
//                             secureTextEntry={true}
//                             autoCorrect={false}
//                             autoCapitalize="none"
//                             onChangeText={(password) => this.setState({ password })}
//                         />
//                     </Item>

//                     <Button style={{ marginTop: 10 }}
//                         full
//                         rounded
//                         success
//                         onPress={() => this.loginUser(this.state.email, this.state.password)}
//                         onPress={() => navigation.navigate('Main')}
//                     >
//                         <Text style={{ color: 'white' }}> Login</Text>
//                     </Button>

//                     <Button style={{ marginTop: 10 }}
//                         full
//                         rounded
//                         primary
//                         onPress={() => this.signUpUser(this.state.email, this.state.password)}
//                     >
//                         <Text style={{ color: 'white' }}> Sign Up</Text>
//                     </Button>

//                     <Button style={{ marginTop: 10 }}
//                         full
//                         rounded
//                         primary
//                         onPress={() => this.loginWithFacebook()}
//                     >
//                         <Text style={{ color: 'white' }}> Login With Facebook</Text>
//                     </Button>



//                 </Form>
//             </Container>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         justifyContent: 'center',
//         padding: 10
//     },
// });
