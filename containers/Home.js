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
import { Left } from 'native-base';
import { AGE } from '../actions/user';

const Home = (props) => {
  const [swiper, setSwiper] = useState();
  const [users, setUsers] = useState([]);
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


  const handleSwipeRight = () => {
    const user = db.collection('users')


    console.log('user:', user)
    // swiper.swipeRight()

    console.log('swipe right')



  }

  const handleSwipeLeft = () => {
    console.log('swipe left')
    // swiper.swipeLeft()
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
            ref={(swiper) => setSwiper(swiper)}
            onSwipedLeft={handleSwipeLeft}
            onSwipedRight={handleSwipeRight}

          >
            {users.map((item, index) => {
              // console.log('item::', item);
              return (
                <Card key={item.uid}>
                  <CardItem
                    image={{ uri: item.image }}
                    name={item.petname}
                    description={item.infor}
                    // matches={item.breed}
                    breed={item.breed}
                    // location = {item.location}
                    actions
                    onPressLeft={() => handleSwipeLeft}
                    onPressRight={() => handleSwipeRight}
                  />
                </Card>
              );
            })}
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
