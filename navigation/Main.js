import MainNavigator from './MainNavigator'
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../containers/Login';
import RegisterScreen from '../containers/Register';
import AddScreen from '../components/Add';
import SaveScreen from '../components/Save';
import React, { Component } from 'react';


const Main = () => {

const Stack = createStackNavigator();

    return(

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
