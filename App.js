import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import Icon from "./components/Icon";
import styles from "./assets/styles";



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color,size }) => {
            // const iconFocused = focused ? "#7444C0" : "#363636";
            return (
              <Text style={[styles.iconMenu]}>
                {/* <Icon name="explore" /> */}
                <MaterialCommunityIcons name="magnify" color={color} size={size}/>
              </Text>
            );
          }
        }}
      />
      <Tab.Screen
        name="Match"
        component={MatchesScreen}
        options={{
          tabBarLabel: 'Match',
          tabBarIcon: ({ color,size }) => {
            // const iconFocused = focused ? "#7444C0" : "#363636";
            return (
              <Text style={[styles.iconMenu,]}>
                {/* <Icon name="heart" /> */}
                <MaterialCommunityIcons name="heart" color={color} size={size}/>

              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color,size }) => {
            // const iconFocused = focused ? "#7444C0" : "#363636";
            return (
              <Text style={[styles.iconMenu,]}>
                 {/* <Icon name="chat" /> */}
                <MaterialCommunityIcons name="chat" color={color} size={size}/>

              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color,size }) => {
            // const iconFocused = focused ? "#7444C0" : "#363636";
            return (
              <Text style={[styles.iconMenu, ]}>
                {/* <Icon name="user" /> */}
                <MaterialCommunityIcons name="cat" color={color} size={size}/>
              </Text>
            );
          }
        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
