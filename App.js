import * as React from 'react';
import { Text, View } from 'react-native';
import firebase from "firebase/app";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import LoginScreen from "./containers/Login";
import TranslateScreen from "./containers/Translate"
import Icon from "./components/Icon";
import styles from "./assets/styles";
import { createStackNavigator } from '@react-navigation/stack';

import { createAppContainer } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";


const firebaseConfig = {
  apiKey: "AIzaSyBtT4zHzNlg_hSGyayWUJTRqCoxiJw0rLM",
  authDomain: "cupidcat-2b0e7.firebaseapp.com",
  // databaseURL:"https://cupidcat-2b0e7-default-rtdb.firebaseio.com",
  
  projectId: "cupidcat-2b0e7",
  storageBucket: "cupidcat-2b0e7.appspot.com",
  messagingSenderId: "455335954698",
  appId: "1:455335954698:web:f175cdf0868e37aa9992f3",
  measurementId: "G-9LTYPNKB3W"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();


const Tab = createBottomTabNavigator(

);

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (<Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#22B2D3',

    }}
  >

    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color, size }) => {
          // const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Text style={[styles.iconMenu]}>
              {/* <Icon name="explore" /> */}
              <MaterialCommunityIcons name="magnify" color={color} size={size} />
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
        tabBarIcon: ({ color, size }) => {
          // const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Text style={[styles.iconMenu,]}>
              {/* <Icon name="heart" /> */}
              <MaterialCommunityIcons name="heart" color={color} size={size} />

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
        tabBarBadge: 3,
        tabBarIcon: ({ color, size }) => {
          // const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Text style={[styles.iconMenu,]}>
              {/* <Icon name="chat" /> */}
              <MaterialCommunityIcons name="chat" color={color} size={size} />

            </Text>
          );
        },
      }}
    />
    <Tab.Screen
      name="Translate"
      component={TranslateScreen}
      options={{
        tabBarLabel: 'Translate',
        tabBarIcon: ({ color, size }) => {
          // const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Text style={[styles.iconMenu,]}>
              {/* <Icon name="user" /> */}
              <MaterialCommunityIcons name="microphone" color={color} size={size} />
            </Text>
          );
        }
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => {
          // const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <Text style={[styles.iconMenu,]}>
              {/* <Icon name="user" /> */}
              <MaterialCommunityIcons name="cat" color={color} size={size} />
            </Text>
          );
        }
      }}
    />

  </Tab.Navigator>)

}

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false

            // tabBarVisible: false,


            // tabBarVisible: getTabBarVisibility(route),
          }}

        />
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            headerShown: false
            // tabBarVisible: false,

            // tabBarVisible: getTabBarVisibility(route),
          }}

        />


      </Stack.Navigator>

    </NavigationContainer>

  );

}

