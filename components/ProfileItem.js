import React, { Component } from 'react';
import styles from '../assets/styles';

import { Text, View } from 'react-native';
// import Icon from './Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Profile from '../containers/Profile';

import { connect } from 'react-redux'
import Firebase from '../config/Firebase'
import { bindActionCreators } from 'redux'
import { updateEmail, updatePassword, signup, updatePetname, updateLocation, updateAge, updateInfor, updateGender, updateBreed, updateImage } from '../actions/user'



class ProfileItem extends React.Component {



  // petname = this.props.user.petname
  // age = this.props.user.age
  // location = this.props.user.location
  // gender = this.props.user.gender
  // breed = this.props.user.breed
  // infor = this.props.user.infor


  render() {
    // console.log(this.props.user.petname)
    // console.log(this.props.user.age)
    // console.log(this.props.user.location)
    // console.log(this.props.user.gender)
    // console.log(this.props.user.breed)
    // console.log(this.props.user.infor)


    return (
      <View style={styles.containerProfileItem}>
        <View style={styles.matchesProfileItem}>
          <Text style={styles.matchesTextProfileItem}>
            {this.breed}
            {/* <Icon name="heart" /> {matches}% Match! */}
          </Text>
        </View>

        {/* <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>

          </Text>
        </View> */}

        <Text style={styles.name}>{this.props.user.petname}</Text>

        <Text style={styles.descriptionProfileItem}>
          Live in {this.props.user.location}
        </Text>

        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name="pets" />
          </Text>
          <Text style={styles.infoContent}>Age: {this.props.user.age}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name="pets" />
          </Text>
          <Text style={styles.infoContent}>Gender: {this.props.user.gender}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name="pets" />
          </Text>
          <Text style={styles.infoContent}>Breed: {this.props.user.breed}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name="pets" />
          </Text>
          <Text style={styles.infoContent}>: {this.props.user.infor}</Text>
        </View>

        {/* <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name="fiber-manual-record" />
          </Text>
          <Text style={styles.infoContent}>sadf</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name="fiber-manual-record" />
          </Text>
          <Text style={styles.infoContent}>sadf</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name="priority-high" />
          </Text>
          <Text style={styles.infoContent}>asdf</Text>
        </View> */}
      </View>

    )
  }

}
// const ProfileItems = ({

//   age,
//   // name,
//   info1,
//   info2,
//   info3,
//   info4,
//   location,
//   matches,
// }) => {


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
