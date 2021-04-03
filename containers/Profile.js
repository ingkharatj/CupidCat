import React, { useState, useEffect } from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
// import Icon from '../components/Icon';
import Icon from 'react-native-vector-icons/FontAwesome';
import Demo from '../assets/data/demo.js';

import firebase from 'firebase'
import { set } from 'react-native-reanimated';
require("firebase/firestore")
require("firebase/firebase-storage")

import Save from '../components/Save'



const Profile = () => {
  // const {user, logout} = useContext();
  // const [image, setImage] = useState(undefined);
  const childPath = `picture/${firebase.auth().currentUser.uid}`;

  const {
    image,
    age,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = Demo[7];


  // useEffect(() => {


  //   firebase
  //     .storage()
  //     .ref()
  //     .child(childPath)
  //     .getDownloadURL().then((url) => {
  //       console.log("URL TO SET:",url)
  //       // setImage(url)
  //     })
  // })

  return (


    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft}>
                {/* <Icon name="chevronLeft" /> */}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="cog" size="25" style={styles.topIconRight} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.textButton}> Certified Pedigree
              {/* <Icon name="optionsH" /> */}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButton}>
              {/* <Icon name="chat" /> */}
            </Text>
            <Text style={styles.textButton}>Add Picture</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
