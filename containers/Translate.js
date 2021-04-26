import React, { useState } from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Pressable
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import { WebView } from 'react-native-webview';
import { Component } from 'react';

let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

class Translate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sec: 0,
      msec: 0,
      hz: 0,
      cal: 0,
      feel: '',


    }
    this.interval = null;
  }


  showFeeling = () => {
    // this.setState({ feel: "hello" })
    this.setState({feel : "Feel well"})

    console.log(this.state.cal)

    if ((903 >= this.state.hz && this.state.hz >= 130) && (this.state.cal >= 60 && this.state.cal <= 75)) {

      this.setState({ feel: "Time to play!" })

    }
    if ((this.state.hz >= 223 && this.state.hz <= 661) && (this.state.cal >= 15 && this.state.cal <= 20)) {

      this.setState({ feel: "Follow me!" })

    }
    if ((this.state.hz >= 46 && this.state.hz <= 582) && (this.state.cal >= 250 && this.state.cal <= 300)) {

      this.setState({ feel: "Unhappy / Angry :(" })

    }
    if ((this.state.hz >= 1000) && (this.state.cal >= 20 && this.state.cal <= 50)) {

      this.setState({ feel: "Give me attention please.." })

    }
    if ((this.state.hz >= 200 && this.state.hz <= 2000) && (this.state.cal >= 51 && this.state.cal <= 100)) {

      this.setState({ feel: "I'm uncomfortable" })

    }
    if ((this.state.hz >= 200 && this.state.hz <= 600) && (this.state.cal >= 300 && this.state.cal <= 1000)) {

      this.setState({ feel: "I'm Scare / In pain" })

    }
    if ((this.state.hz >= 97 && this.state.hz <= 1164) && (this.state.cal >= 50 && this.state.cal <= 60)) {

      this.setState({ feel: "I detect something strange" })

    }
    if ((this.state.hz >= 22 && this.state.hz <= 30) && (this.state.cal >= 10 && this.state.cal <= 570)) {

      this.setState({ feel: "I love youuu" })

    }else{
      this.setState({ feel: "Feel well" })
    }


  }

  handleToggle = () => {
    this.setState({ cal: (this.state.sec * 100) + this.state.msec })

    this.setState(
      {
        start: !this.state.start
      },
      () => this.handleStart()
    );
  };


  handleStart = () => {
    if (this.state.start) {
      this.interval = setInterval(() => {
        if (this.state.msec !== 99) {
          this.setState({
            msec: this.state.msec + 1
          });
        } else if (this.state.sec !== 59) {
          this.setState({
            msec: 0,
            sec: ++this.state.sec
          });
        } else {
          this.setState({
            msec: 0,
            sec: 0,
            min: ++this.state.min
          });
        }
      }, 1);

    } else {
      clearInterval(this.interval);
    }
  };

  handleReset = () => {
    this.setState({
      min: 0,
      sec: 0,
      msec: 0,

      start: false
    });

    clearInterval(this.interval);

    this.lapArr = [];
  };
  render() {
    return (
      <View style={{ flex: 0.95, top: -20, }}>

        {/* <TouchableOpacity style={styles.bigcircledButton}>
            <MaterialCommunityIcons name="microphone" size="60" color="#747A7A"/>

                
            </TouchableOpacity> */}
        <WebView source={{ uri: 'https://www.onlinemictest.com/tuners/pitch-detector/' }}
          // javaScriptEnabled={true}
          style={{ width: 350, height: 50, alignSelf: "center", top: -70, }}
          scrollEnabled={false}

        >

        </WebView>
        <View
          style={{ width: 400, height: 120, backgroundColor: "#F2F5F5", position: "absolute" }}
        >

        </View>
        <View
          style={{ width: 400, height: 400, top: 425, backgroundColor: "#F2F5F5", position: "absolute", justifyContent: "center" }}
        >
          <View style={{ alignItems: "flex-start", flexDirection: "row", marginTop: -100 }}>

            <View style={{ marginLeft: 20 }}>
              <TextInput
                style={{ width: 100, height: 30, backgroundColor: "white", borderRadius: 10, fontSize: 24 }}
                placeholder="  Hz"
                // onChangeText={setDb()}
                onChangeText={(hz) => this.setState({ hz })}

              // defaultValue={}

              >
              </TextInput>
            </View>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginLeft: 20 }}>Hz</Text>

            <View style={{ flexDirection: "row", marginLeft: 40 }}>

              <Text style={{ fontSize: 28, }}>{padToTwo(this.state.sec) + " : "}</Text>
              <Text style={{ fontSize: 28, }}>{padToTwo(this.state.msec)}</Text>
            </View>

          </View>
          <View style={{ flexDirection: "row", marginTop: 20, }}>
            <Pressable
              style={{
                backgroundColor: "#7AE7A9",
                padding: 10,
                borderRadius: 70,
                marginLeft: 30,
              }}
              onPress={this.handleToggle}
            >

              {/* <Text
                style={{ fontWeight: "bold" }}>Start</Text> */}
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{!this.state.start ? 'Start' : 'Stop'}</Text>

            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#F55482",
                padding: 10,
                borderRadius: 20,
                marginLeft: 15,
              }}
              onPress={this.handleReset}
            >

              {/* <Text
                style={{ fontWeight: "bold" }}>Start</Text> */}
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Reset</Text>

            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#7BD4E8",
                padding: 10,
                borderRadius: 20,
                marginLeft: 15,
              }}

              onPress={this.showFeeling}
            >

              {/* <Text
                style={{ fontWeight: "bold" }}>Start</Text> */}
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Enter</Text>

            </Pressable>

          </View>

          <View style={{ marginLeft: 30, marginTop: 30, flexDirection: "row" }}>
            <View style={{ backgroundColor: "#7BD4E8", borderRadius: 10, padding: 10 }}>

              <Text style={{ fontSize: 20, marginRight: 10, fontWeight: "bold" }}>Feel:</Text>
              <Text
                style={{ width: 270, height: 30, backgroundColor: "#F2F5F5", borderRadius: 10, fontSize: 20 }}
              >
                {this.state.feel}
              </Text>
            </View>


          </View>

        </View>

      </View>

    )
  }
}



export default Translate;
