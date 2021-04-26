import React, { Component, useState, useEffect } from 'react';
import styles from '../assets/styles';

import { Text, View } from 'react-native';
// import Icon from './Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from '../containers/Profile';

import { connect } from 'react-redux'
import Firebase, { db } from '../config/Firebase'
import { bindActionCreators } from 'redux'
import { updateEmail, updatePassword, signup, updatePetname, updateLocation, updateAge, updateInfor, updateGender, updateBreed, updateImage } from '../actions/user'
import { set } from 'lodash';



const ProfileItem = () => {

  const [age, setAge] = useState('');
  const [infor, setInfor] = useState('');
  const [location, setLocation] = useState('');
  const [petname, setPetname] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const userAuth = Firebase.auth().currentUser.uid

    db.collection("users")
      .doc(userAuth)
      .get()
      .then(doc => {
        console.log(doc.data())
        // setImage(doc.data().image)
        setPetname(doc.data().petname)
        setBreed(doc.data().breed)
        setLocation(doc.data().location)
        setGender(doc.data().gender)
        setAge(doc.data().age)
        setInfor(doc.data().age)

      })
    // console.log("Props", props.image)

    // setImage(props.image)
  })

  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.ProfileItem}>
        <Text style={styles.TextProfileItem}>
          {breed}
          {/* <Icon name="heart" /> {matches}% Match! */}
        </Text>
      </View>

      {/* <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>

          </Text>
        </View> */}

      <Text style={styles.name}>{petname}</Text>

      <Text style={styles.descriptionProfileItem}>
        Live in {location}
      </Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="pets" />
        </Text>
        <Text style={styles.infoContent}>Age: {age}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="pets" />
        </Text>
        <Text style={styles.infoContent}>Gender: {gender}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="pets" />
        </Text>
        <Text style={styles.infoContent}>Breed: {breed}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="pets" />
        </Text>
        <Text style={styles.infoContent}>Activity: {infor}</Text>
      </View>

    </View>
  )

}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, updatePetname, updateLocation, signup, updateAge, updateInfor, updateGender, updateBreed, updateImage }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileItem)
