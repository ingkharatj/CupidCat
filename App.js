import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



const navigation = createStackNavigator(
  {
    // Home : HomeScreen,
    // Login : LoginScreen,
    Profile : ProfileScreen

    
    
},
{
  initialRouteParams : "Profile",
    defaultNavigationOptions: { 
      title: "CupidCat"
  }
},

);

const Tab = createBottomTabNavigator(


);

function MyTabs() {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#22B2D3',
      }}
    >
      <Tab.Screen
        name="Explore"
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
// export default createAppContainer(navigation);
