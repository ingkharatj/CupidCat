import React, { useEffect, useState } from 'react';

import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Button
} from 'react-native';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
import Firebase, { db } from '../config/Firebase';
import Demo from '../assets/data/demo.js';

import firebase, { firestore, messaging } from "firebase/app";
import 'firebase/firestore'

import _ from "lodash";
import { set } from 'react-native-reanimated';

import { NavigationContainer } from "@react-navigation/native";


const matches = (props) => {
  const {navigation} = props
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [matches, setMatches] = useState([]);

  const [likeUser, setLikeUser] = useState([]);
  const [userLike, setUserLike] = useState([]);
  const [arr, setArr] = useState([]);
  const [chatuser,setchatuser] = useState([]);

  // let arr = []




  useEffect(() => {

    const userAuth = Firebase.auth().currentUser.uid
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



    a();
    findmatch();
    initialFetchUsers();
    // getMatch();
    // getUid();

  }, []);

  const onClick = () => {
    // console.log(chatuser[0])

    navigation.navigate('Message', {
      name: chatuser[0],
    })
  }


  const matchUser = users.filter((user) => arr[0].includes(user.uid))


  // const matchUser = matches.map((uid) => {
    

  //   const x = arr.pop()
  //   users.filter((user) => user.uid === uid);
  //   return (
  //     <FlatList
  //       numColumns={2}
  //       data={users}
  //       // keyExtractor={item => user.id}
  //       renderItem={({ item }) => (
  //         <TouchableOpacity>
  //           <CardItem
  //             image={{ uri: item.image }}
  //             petname={item.petname}
  //             breed={item.breed}
  //             // status={item.status}
  //             variant
  //           />
  //         </TouchableOpacity>
  //       )}
  //     />


  //   );
  // })
  



  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containermatches}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>matches</Text>
            <TouchableOpacity
            // onPress={() => console.log("Match: ", arr)}
            >
              <Text style={styles.icon}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
          
            numColumns={2}
            data={matchUser}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity               
                // onPress={onClick}
                onPress={
                  () => { chatuser.push(item.petname); onClick(); }
                 }
              >
                <CardItem
                  
                  image={{ uri: item.image }}
                  petname={item.petname}
                  breed={item.breed}
                  // status={item.status}
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
