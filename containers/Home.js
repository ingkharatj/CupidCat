import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Alert, RefreshControl, ScrollView } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../components/City';
import Logout from '../components/Logout';

import Middle from '../components/Middle';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Firebase, { db } from '../config/Firebase';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userList';
import { Left, Right } from 'native-base';
import { AGE } from '../actions/user';
import firebase, { firestore } from "firebase/app";
import 'firebase/firestore'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Home = (props) => {

  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
    getInitialData();

    initialFetchUsers();
  }, [props, isFocused]);
  const getInitialData = async () => { }


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
    // Alert.alert(
    //   "Match!",
    //   "If you cannot find the Cat that you Match please restart your applciation.",
    //   [
    //     // {
    //     //   text: "Cancel",
    //     //   onPress: () => console.log("Cancel Pressed"),
    //     //   style: "cancel"
    //     // },
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ]
    // );

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


  const userCards = users.map((item) => {
    return (
      <Card key={item.uid}
      >
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
            style={{ flex: 1 }}
            loop={true}
            verticalSwipe={false}
            horizontalSwipe={true}
            ref={swiper => (this.swiper = swiper)}
            disableRightSwipe={true}


          // onSwipedLeft={handleSwipeLeft}
          // onSwipedRight={handleSwipeRight}
          >
            {userCards}
          </CardStack>

        ) : null}

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
