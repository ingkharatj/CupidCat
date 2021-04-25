import React, { useState, useEffect } from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Modal,
  Pressable
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Add from '../components/Add';
// import Icon from '../components/Icon';
import Icon from 'react-native-vector-icons/FontAwesome';
import Demo from '../assets/data/demo.js';
import { set } from 'react-native-reanimated';

import EditProfile from '../containers/EditProfile'

import Save from '../components/Save'
import Firebase from '../config/Firebase'

import * as ImagePicker from 'expo-image-picker'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup, updatePetname, updateLocation, updateAge, updateInfor, updateGender, updateBreed, updateImage } from '../actions/user'
import { Button } from 'native-base';

const Profile = (props) => {
  // const [modalVisible, setModalVisible] = useState(false);

  // const {user, logout} = useContext();
  // const [image, setImage] = useState(undefined);
  // const childPath = `picture/${firebase.auth().currentUser.uid}`;
  const { navigation } = props
  // const {
  //   age,
  //   infor,
  //   location,
  //   match,
  //   name
  // } = Demo[7];

  const [age, setAge] = useState('');
  const [infor, setInfor] = useState('');
  const [location, setLocation] = useState('');
  const [match, setMatch] = useState('');
  const [petname, setPetname] = useState('');
  // const [image, setImage] = useState(props.image);





  const addPhoto = () => {
    navigation.navigate('Add')
  }

  const addCer = () => {
    navigation.navigate('AddCertified')
  }

  useEffect(() => {
    console.log("Props", props.image)
  })

  return (


    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >


      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={{ uri: props.image }} style={styles.photo}>


          <View style={styles.top}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft}>
                {/* <Icon name="chevronLeft" /> */}
              </Text>
            </TouchableOpacity>
            <EditProfile />


          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={petname}
          age={age}
          location={location}
          infor={infor}

        />

        <View style={styles.actionsProfile, { flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity style={styles.roundedButton}
            onPress={addCer}>
            <Text style={styles.textButton}> Add Certified Pedigree
              {/* <Icon name="optionsH" /> */}
            </Text>
          </TouchableOpacity>

          <Button style={styles.roundedButton} onPress={addPhoto}>
            <Text style={styles.iconButton}>

              {/* <Icon name="chat" /> */}
            </Text>
            <Text style={styles.textButton}>Add Picture</Text>
          </Button>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

// export default Profile;

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateImage }, dispatch)
}

const mapStateToProps = state => {
  return {
    image: state.user.image
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)