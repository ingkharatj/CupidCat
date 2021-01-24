import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <MaterialCommunityIcons name="map-marker"/>Bangkok
        
      </Text>
    </TouchableOpacity>
  );
};

export default City;
