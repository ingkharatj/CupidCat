import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../components/City';
import Logout from '../components/Logout';

import Middle from '../components/Middle';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import Firebase from '../config/Firebase'
import { connect } from 'react-redux'




class Home extends React.Component {

  handleSignout = () => {
    Firebase.auth().signOut()
    this.props.navigation.navigate('Login')
  }



  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <View style={styles.containerHome}>
          <View style={styles.top}>
            <City />
            <TouchableOpacity style={styles.logout}
              onPress={this.handleSignout}
            >
              <Text style={styles.cityText}>
                Logout
              </Text>
            </TouchableOpacity>
            <Middle />
            {/* <Filters /> */}
          </View>

          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={swiper => (this.swiper = swiper)}
          >
            {Demo.map((item, index) => (
              <Card key={index}>
                <CardItem
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  matches={item.match}
                  actions
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                />
              </Card>
            ))}
          </CardStack>
        </View>
      </ImageBackground>
    )
  }
}


// export default Home;
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)