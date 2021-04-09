
// import React ,{useEffect,useState}from 'react';
// import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
// import { Audio } from 'expo-av';
// import styles from '../assets/styles';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// // import { MaterialCommunityIcons } from '@expo/vector-icons';
// import RNSoundLevel from 'react-native-sound-level'

// const Translate=()=> {
//   // const [recording, setRecording] = React.useState();


// const startRecording = async() => {
//     try {
//         console.log('Requesting permissions..');
//         await Audio.requestPermissionsAsync();
//         await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true,
//         }); 
//         console.log('Starting recording..');
//         const recording = new Audio.Recording();
//         await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
//         await recording.startAsync(); 
//         setRecording(recording);
//         console.log('Recording started');
//     } catch (err) {
//         console.error('Failed to start recording', err);
//     }
//     }

//     async function stopRecording() {
//     console.log('Stopping recording..');
//     setRecording(undefined);
//     await recording.stopAndUnloadAsync();
//     const uri = recording.getURI(); 
//     console.log('Recording stopped and stored at', uri);
//     }

//   return (
//     // <View >
//     //   <Button
//     //     title={recording ? 'Stop Recording' : 'Start Recording'}
//     //     onPress={recording ? stopRecording : startRecording}
//     //   />
//     // </View>

//             <View style={styles.containerTranslate}>
//             <TouchableOpacity style={styles.bigcircledButton} 
//             title={recording ? 'Stop Recording' : 'Start Recording'}
//             onPress={recording ? stopRecording : startRecording}>
//             <MaterialCommunityIcons name="microphone" size="60" color="#747A7A"/>
//             </TouchableOpacity>
//         </View>
//   );
// }

// export default Translate;


import React, { useEffect } from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import RNSoundLevel from 'react-native-sound-level'


import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';




class Translate extends React.Component {

  // componentDidMount() {
  //   RNSoundLevel.start()
  //   RNSoundLevel.onNewFrame = (data) => {
  //     // see "Returned data" section below
  //     console.log('Sound level info', data)
  //   }
  // }

  // don't forget to stop it

  // componentWillUnmount() {
  //   RNSoundLevel.stop()
  // }

  startRecord = () => {

    RNSoundLevel.start()
    RNSoundLevel.onNewFrame = (data) => {
      // see "Returned data" section below
      console.log('Sound level info', data)
    }

  }

  stopRecord = () => {
    RNSoundLevel.stop()
  }


  render() {
    return (
      <View style={styles.containerTranslate}>
        <TouchableOpacity style={styles.bigcircledButton}
          onPress={this.startRecord}
        >

          <MaterialCommunityIcons name="microphone" size="60" color="#747A7A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bigcircledButton}
          onPress={this.stopRecord}
        >

          <MaterialCommunityIcons name="microphone" size="60" color="red" />
        </TouchableOpacity>
      </View>

    )
  }


}


export default Translate;
