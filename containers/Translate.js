import React ,{useEffect}from 'react';
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




class Translate extends React.Component{ 

    componentDidMount =()=> {
        RNSoundLevel.start()
        RNSoundLevel.onNewFrame = (data) => {
          // see "Returned data" section below
          console.log('Sound level info', data)
        }
      }
      
      // don't forget to stop it
      componentWillUnmount=()=> {
        RNSoundLevel.stop()
      }


      render(){
          return(
                  <View style={styles.containerTranslate}>
                        <TouchableOpacity style={styles.bigcircledButton}>
                            
                            <MaterialCommunityIcons name="microphone" size="60" color="#747A7A"/>
                        </TouchableOpacity>
                    </View>
                    
                    )
      }


}

// const Translate = () => {
    


//     return (
//         <View style={styles.containerTranslate}>
//             <TouchableOpacity style={styles.bigcircledButton}>
//             <MaterialCommunityIcons name="microphone" size="60" color="#747A7A"/>

                
//             </TouchableOpacity>
//         </View>
//     );
// };

export default Translate;
