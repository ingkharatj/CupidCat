import MainNavigator from './MainNavigator'
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../containers/Login';
import RegisterScreen from '../containers/Register';
import AddScreen from '../components/Add';
import AddCertifiedScreen from '../components/AddCertified';

import SaveScreen from '../components/Save';
import SaveCertified from '../components/SaveCertified';

import MessagesScreen from "../containers/Messages";

import React, { Component } from 'react';
import ShowProfileScreen from '../containers/ShowProfile';


const Main = () => {

  const Stack = createStackNavigator();

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
          name="Message"
          component={MessagesScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ShowProfile"
          component={ShowProfileScreen}
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
        <Stack.Screen
          name="AddCertified"
          component={AddCertifiedScreen}
          options={{
            headerShown: false

          }}
        />
        <Stack.Screen
          name="SaveCertified"
          component={SaveCertified}
          options={{
            headerShown: false

          }}
        />

        <Stack.Screen
          name="Save"
          component={SaveScreen}
          options={{
            headerShown: false

          }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Main;
