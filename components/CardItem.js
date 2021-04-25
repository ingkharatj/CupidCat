import React from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Text, View, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from './Icon';

const CardItem = ({
  actions,
  breed,
  image,
  uid,
  matches,
  petname,
  onPressLeft,
  onPressRight,
  status,
  variant
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: variant ? 170 : 350,
      margin: variant ? 0 : 20
    }
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: variant ? 15 : 30
    }
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            {matches}

          </Text>
        </View>
      )}

      {/* PETNAME */}
      <Text style={nameStyle}>{petname}</Text>

      {/* BREED*/}
      {
        <Text style={styles.descriptionCardItem, { fontWeight: "500" }}>{breed}</Text>
      }

      {/* STATUS */}
      {status && (
        <View style={styles.status}>
          <View style={status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}

      {/* ACTIONS */}
      {actions && (
        <View style={styles.actionsCardItem}>


          <TouchableOpacity style={styles.button2} onPress={() => onPressLeft()}>
            <Text style={styles.dislike}>
              {/* <Icon name="dislike" /> */}
              <MaterialCommunityIcons name="close" size="40" />

            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            // onPress={() => {onPressRight(); Alert.alert(
            //   "Match!",
            //   "Now you can chat with with each other!",
            //   [
            //     {
            //       text: "Cancel",
            //       onPress: () => console.log("Cancel Pressed"),
            //       style: "cancel"
            //     },
            //     { text: "Chat Now", onPress: () => console.log("OK Pressed") }
            //   ],
            //   { cancelable: false }
            // );}}
            onPress={() => onPressRight()}
          >
            <Text style={styles.like}>
              {/* <Icon name="like" /> */}
              <MaterialCommunityIcons name="heart" size="40" color="#F6DFE6" />

            </Text>
          </TouchableOpacity>


        </View>
      )}
    </View>
  );
};

export default CardItem;
