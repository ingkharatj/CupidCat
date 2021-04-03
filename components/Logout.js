import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import "firebase/auth";
import firebase from 'firebase';
// import Login from '../containers/Login'

// const logout = () => {
//     firebase.auth().signOut().then(response => {
//         navigation.navigate('Login')

//         this.setState({
//             currentUser: null
//         })
//     })
// }


const Logout = () => {

    // handleSignout = () => {
    //     Firebase.auth().signOut()
    //     this.props.navigation.navigate('Login')
    // }

    return (
        <TouchableOpacity style={styles.logout}
        >
            <Text style={styles.cityText}>
                <MaterialCommunityIcons name="map-marker" />Bangkok

        </Text>
        </TouchableOpacity>
    );
};






export default Logout;
