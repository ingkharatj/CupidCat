import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../components/City';
import Logout from '../components/Logout';

import Middle from '../components/Middle';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import Firebase, { db } from '../config/Firebase';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userList';
import { Left, Right } from 'native-base';
import { AGE } from '../actions/user';
import firebase, { firestore } from "firebase/app";
import 'firebase/firestore'



const Home = (props) => {
  // const [swiper, setSwiper] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();


  useEffect(() => {
    const initialFetchUsers = async () => {
      try {

        const users = await db.collection('users').get();
        // console.log('user::', users.docs);

        setUsers(
          users.docs.map((user) => {
            return user.data();
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    initialFetchUsers();
  }, []);

  const handleSwipeRight = (uid) => {

    const userAuth = Firebase.auth().currentUser.uid

    db.collection("users")
      .doc(uid)
      .get()
      .then(doc => {
        console.log(doc.data().uid)
      })


    db.collection("users").doc(uid).update({

      match: firebase.firestore.FieldValue.arrayUnion(userAuth)
    })
    console.log("swipe right")
    this.swiper.swipeRight()
    // console.log("uid:", n)
    // console.log(x.docs)

  }


  const handleSwipeLeft = () => {


    this.swiper.swipeLeft()

    console.log('swipe left')
  }

  const handleSignout = () => {
    Firebase.auth().signOut();
    props.navigation.navigate('Login');
  };

  // "age": "dsf",
  // "breed": "dsf",
  // "email": "test2@gmail.com",
  // "gender": "dsfa",
  // "image": "https://firebasestorage.googleapis.com/v0/b/cupidcat-2b0e7.appspot.com/o/picture%2F0LpCSSckdpfRfQhicFetKrMV9Hk2%2F0.5xn5kyhwsho?alt=media&token=fe8f603f-ec5f-4aaf-99f3-2b091acb722e",
  // "infor": "dfsa",
  // "location": "dsaf",
  // "petname": "sdaf",
  // "uid": "0LpCSSckdpfRfQhicFetKrMV9Hk2",

  const userCards = users.map((item, index) => {
    return (
      <Card key={item.uid}>
        <CardItem
          image={{ uri: item.image }}
          petname={item.petname}
          activity={item.infor}
          // matches={item.breed}
          breed={item.breed}
          // location = {item.location}
          actions

          // onPressLeft={() => handleSwipeLeft(), () => this.swiper.swipeLeft()}
          // onPressRight={() => handleSwipeRight(item.uid)}
          onPressLeft={() => handleSwipeLeft()}

          onPressRight={() => handleSwipeRight(item.uid)}
        // onPressRight={() => set_uid(item.uid)}


        />
      </Card>
    );
  })

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <TouchableOpacity style={styles.logout} onPress={handleSignout}>
            <Text
              style={
                (styles.cityText, { alignSelf: 'center', fontWeight: 'bold' })
              }
            >
              Logout
            </Text>
          </TouchableOpacity>
          <Middle />
          {/* <Filters /> */}
        </View>
        {users.length ? (
          <CardStack
            loop={true}
            verticalSwipe={false}
            horizontalSwipe={true}
            // ref={(swiper) => setSwiper(swiper)}
            ref={swiper => (this.swiper = swiper)}
          // onSwipedLeft={handleSwipeLeft}
          // onSwipedRight={handleSwipeRight}
          >
            {userCards}
          </CardStack>

        ) : null}
        {/* <TouchableOpacity onPress={() =>  swiper.swipeLeft() }>
          <Text>Left</Text>
        </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
};

export default Home;
// const mapStateToProps = (state) => {
//   return {
//     users: state.users,
//   };
// };

// export default connect(mapStateToProps)(Home);
