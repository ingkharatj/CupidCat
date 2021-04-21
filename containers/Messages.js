import React from 'react';
import styles from '../assets/styles';
import { useEffect, useState } from 'react';
import { useRoute } from "@react-navigation/native";

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
  Button
} from 'react-native';
import Message from '../components/Message';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

const Messages = () => {
  const route = useRoute();
  const [chatuser,setchatuser] = useState([]);
  console.log("aaaaaa",route.params);
  // const { itemId, otherParam } = route.params;

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>Messages</Text>
            <TouchableOpacity>
              <Text style={styles.icon}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>

          {/* <FlatList
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Message
                  image={item.image}
                  name={item.name}
                  lastMessage={item.message}
                />
              </TouchableOpacity>
            )}
          /> */}
              <TouchableOpacity>

<Button
                onPress={()=>console.log('now on chat page : ', chatuser[0])}
                title={route.params.name}
                ></Button>
                              </TouchableOpacity>

        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Messages;
