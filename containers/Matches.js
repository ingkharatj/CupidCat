import React, { useEffect, useState } from 'react';

import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  RefreshControl,

} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
import Firebase, { db } from '../config/Firebase';

import firebase, { firestore } from "firebase/app";
import 'firebase/firestore'

import _ from "lodash";
import { set } from 'react-native-reanimated';
import { Badge, withBadge } from 'react-native-elements'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const matches = (props) => {
  const { navigation } = props
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);



  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useState('');
  const [user, setUser] = useState();
  const [matches, setMatches] = useState([]);

  const [likeUser, setLikeUser] = useState([]);
  const [userLike, setUserLike] = useState([]);
  const [arr, setArr] = useState([]);

  const [chatuid, setchatUid] = useState([]);
  // const [n, setn] = useState(0)
  // const [allchatuid, setallchatuid] = useState([]);


  // let arr = []




  useEffect(() => {

    const userAuth = Firebase.auth().currentUser.uid
    setAuth(userAuth)
    console.log(userAuth)

    async function a() {

      await db.collection("users")
        .where("match", "array-contains", userAuth)
        .get()
        .then(snap => {
          snap.forEach(doc => {
            // console.log("User that A like ", doc.data().uid);
            likeUser.push(doc.data().uid)
            setLikeUser(likeUser)
          });
          console.log("A like: ", likeUser)
        });


    }

    async function findmatch() {

      const x = await db.collection("users")
        .doc(userAuth)
        .get()
        .then(doc => {
          // console.log(doc.data().match)
          // userLike.push(doc.data().match)
          const x = doc.data().match
          userLike.push(x)


        })
      console.log('User who like A: ', userLike)
      const a = userLike.pop()
      const filteredArray = likeUser.filter(value => a.includes(value));
      // setmatches(matches => [...matches, filteredArray])
      arr.push(filteredArray)
      // const p = arr[0]
      // const p = arr

      // console.log("sdff", p)

      // setArr(filteredArray)
      // setArr(p)


      console.log("Match: ", arr)


      // await db.collection("users")
      //   .where("uid", '==', userAuth)
      //   .get()
      //   .then(snap => {
      //     snap.forEach(doc => {
      //       const y = doc.data().match
      //       console.log("fds", y)
      //       // userLike.join(y)

      //       console.log("User that like A ", userLike);


      //     });

      //   });

    }
    const initialFetchUsers = async () => {
      try {

        const users = await db.collection('users').get();
        // console.log('user::', users.docs);

        setUsers(
          users.docs.map((user) => {
            return user.data();
          })

          // match.map((uid) =>{
          //   arr.filter((user) => user.uid === uid);

          // })
        );

      } catch (error) {
        console.error(error);
      }

    };
    getInitialData();
    a();
    findmatch();
    initialFetchUsers();
    
    // getMatch();
    // getUid();

  }, [props, isFocused]);
  const getInitialData = async () => {} 
  const matchUser = users.filter((user) => arr[0].includes(user.uid) && user.uid != auth)


  const startChat = async (item) => {
    navigation.navigate('Message', {
      uid: item.uid,
      auth_uid: auth,

      petname: item.petname,
      image: item.image,
      location: item.location,
      gender: item.gender,
      infor: item.infor,
      breed: item.breed,
      age: item.age
    })

  }

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containermatches}>
        <View style={styles.top}>
          <Text style={styles.title}>Matches</Text>

        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>


          <FlatList
            style={{ alignSelf: "center" }}
            numColumns={2}
            data={matchUser}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => startChat(item)}
              >

                {/* <Badge
                  status="error"
                  badgeStyle={{ height: 15, width: 15, borderRadius: 10 }}
                  containerStyle={{ position: 'absolute', top: 0, right: 0 }}
                /> */}



                <CardItem
                  image={{ uri: item.image }}
                  petname={item.petname}
                  breed={item.breed}
                  variant
                />
              </TouchableOpacity>
            )}
          />
          {/* {matchUser} */}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default matches;

