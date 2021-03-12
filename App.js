import React, { Component } from 'react';
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
// import apiKeys from './config/keys';
import { createAppContainer } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from './containers/Register';
import AddScreen from './components/Add';
import SaveScreen from './components/Save';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtT4zHzNlg_hSGyayWUJTRqCoxiJw0rLM",
  authDomain: "cupidcat-2b0e7.firebaseapp.com",
  databaseURL: "https://cupidcat-2b0e7-default-rtdb.firebaseio.com",
  projectId: "cupidcat-2b0e7",
  storageBucket: "cupidcat-2b0e7.appspot.com",
  messagingSenderId: "455335954698",
  appId: "1:455335954698:web:f175cdf0868e37aa9992f3",
  measurementId: "G-9LTYPNKB3W"

};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.analytics();


const Tab = createBottomTabNavigator(

);

const Stack = createStackNavigator();

// const AddNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Add"
//         component={AddScreen}
//         options={{
//           headerShown: false

//         }}
//       />
//     </Stack.Navigator>
//   )
// }

const MainNavigator = () => {
  return (
    <Tab.Navigator
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

export class App extends Component {
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
          <Text>Loading</Text>
        </View>
      )
    }
    return (

      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false
            }}

          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false

            }}
          />

          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{
              headerShown: false

            }}
          />



          {/* <Stack.Screen
            name="Save"
            component={SaveScreen}
            options={{
              headerShown: false
  
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>



    );
  }
}

export default App;


