import React from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';


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

const Translate = () => {


    return (
        <View style={styles.containerTranslate}>
            <TouchableOpacity style={styles.bigcircledButton}>
            <MaterialCommunityIcons name="microphone" size="60" color="#747A7A"/>

                
            </TouchableOpacity>
        </View>
    );
};

export default Translate;
