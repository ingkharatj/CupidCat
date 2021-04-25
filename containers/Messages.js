import React from 'react';
import styles from '../assets/styles';
import { useEffect, useState, useCallback } from 'react';
import { useRoute } from "@react-navigation/native";
import firebase, { firestore, messaging, messagesDB } from "firebase/app";
import Firebase, { db } from '../config/Firebase';
import { Avatar, GiftedChat, InputToolbar, Bubble } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


// import matchUser from '../containers/Matches'

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  Button,
  Image
} from 'react-native';




const Messages = (props) => {
  const { navigation } = props


  const route = useRoute();
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [messages, setMessages] = useState([])


  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          // borderTopColor: "red",
          // borderTopWidth: 10,
          // padding: 1,
          borderRadius: 20,
          // margin : 10
        }}
      />

    );
  };
  const customBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: 'black',
          },
        }}
        timeTextStyle={{
          right: { color: 'black' },
          left: { color: 'black' }
        }}
        wrapperStyle={{
          left: {
            backgroundColor: "#A4E9EA",
          },
          right: {
            backgroundColor: "#7DC9DA",

          }
        }}

      />
    );
  }



  const chatsRef = db.collection('chats')

  useEffect(() => {

    readUser()
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data()
          return { ...message, createdAt: message.createdAt.toDate() }
        }).filter((item) => item.roomMembers.includes(route.params.auth_uid) && item.roomMembers.includes(route.params.uid))
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      appendMessages(messagesFirestore)
    })
    return () => unsubscribe()
  }, [])

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    },
    [messages]
  )

  async function readUser() {
    // const user = await AsyncStorage.getItem('user')
    console.log("Name: ", route.params.petname)
    console.log("uid: ", route.params.uid)
    console.log("Image: ", route.params.image)

    const _id = route.params.uid
    const name = route.params.petname
    const user = { _id, name }



    await AsyncStorage.setItem('user', JSON.stringify(user))
    setUser(user)

    if (user) {
      setUser(JSON.parse(user))
    }

    console.log("User: ", user)
  }



  async function handleSend(messages) {
    const roomMembers = [route.params.auth_uid, route.params.uid]
    const writes = messages.map((m) => chatsRef.add({ ...m, roomMembers }))
    await Promise.all(writes)
  }


  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View>
        <View style={styles.top}>
          <Ionicons name="arrow-back-circle" size="40"
            color="#7BD4E8"

            onPress={() => navigation.navigate('Match')} />

          <TouchableOpacity>

            <MaterialCommunityIcons name="cat" size="28" style={{ alignSelf: "flex-end" }} />
            <Text style={styles.icon} style={{ fontSize: 10 }}>
              See {route.params.petname} infor
              </Text>

          </TouchableOpacity>


        </View>
      </View>



      <GiftedChat messages={messages} user={user} onSend={handleSend}
        renderAvatar={null}
        renderInputToolbar={props => customtInputToolbar(props)}
        renderBubble={props => customBubble(props)}


      />


    </ImageBackground>
  );
};

export default Messages;