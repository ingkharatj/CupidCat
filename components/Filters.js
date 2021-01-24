import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Filters = () => {
  return (
    <TouchableOpacity style={styles.filters}>
      <Text style={styles.filtersText}>
        <Icon name="filter" /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
