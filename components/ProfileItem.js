import React, { Component } from 'react';
import styles from '../assets/styles';

import { Text, View } from 'react-native';
// import Icon from './Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase, { firestore } from 'firebase'
import Profile from '../containers/Profile';

import { connect } from 'react-redux'
import Firebase from '../config/Firebase'


class ProfileItem extends React.Component {

  petname = this.props.user.petname
  age = this.props.user.age
  location = this.props.user.location
  infor = this.props.user.infor


  render() {
    console.log(this.props.user.petname)
    console.log(this.props.user.age)
    console.log(this.props.user.location)
    console.log(this.props.user.infor)


    return (
      <View style={styles.containerProfileItem}>
        <View style={styles.matchesProfileItem}>
          <Text style={styles.matchesTextProfileItem}>
            {/* <Icon name="heart" /> {matches}% Match! */}
          </Text>
        </View>

        <Text style={styles.name}>{this.petname}</Text>

        <Text style={styles.descriptionProfileItem}>
          age {this.age} - live in {this.location}
        </Text>

        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name="pets" />
          </Text>
          <Text style={styles.infoContent}>{this.infor}</Text>
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

export default connect(mapStateToProps)(ProfileItem)
