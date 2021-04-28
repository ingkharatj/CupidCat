import React, { useState, useEffect } from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';



import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    Modal,
    Pressable
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Add from '../components/Add';
// import Icon from '../components/Icon';
import { set } from 'react-native-reanimated';
import Firebase, { db } from '../config/Firebase'




const ShowProfileScreen = (props) => {
    const { navigation } = props
    const route = useRoute();


    const age = route.params.age
    const infor = route.params.infor
    const location = route.params.location
    const petname = route.params.petname;
    const gender = route.params.gender
    const breed = route.params.breed
    const image = route.params.image
    

    useEffect(() => {
        const userAuth = Firebase.auth().currentUser.uid
    
        db.collection("users")
          .doc(userAuth)
          .get()
          .then(doc => {
            console.log(doc.data())
            setImage(doc.data().image)
          })
        // console.log("Props", props.image)
    
        // setImage(props.image)
      })


    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.bg}
        >
            <View style={styles.top}>


                <Ionicons name="arrow-back-circle" size="40"
                    color="#7BD4E8"

                    onPress={() => navigation.navigate('Message')} />
            </View>



            <ScrollView style={styles.containerProfile}>
                <ImageBackground style={styles.photo} source={{ uri: image }} >



                    <View style={styles.top}>
                        <TouchableOpacity>
                            <Text style={styles.topIconLeft}>
                                {/* <Icon name="chevronLeft" /> */}
                            </Text>
                        </TouchableOpacity>


                    </View>

                </ImageBackground>

                <View style={styles.containerProfileItem}>
                    <View style={styles.ProfileItem}>
                        <Text style={styles.TextProfileItem}>
                            {breed}
                            {/* <Icon name="heart" /> {matches}% Match! */}
                        </Text>
                    </View>

                    {/* <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>

          </Text>
        </View> */}

                    <Text style={styles.name}>{petname}</Text>

                    <Text style={styles.descriptionProfileItem}>
                        Live in {location}
                    </Text>

                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="pets" />
                        </Text>
                        <Text style={styles.infoContent}>Age: {age}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="pets" />
                        </Text>
                        <Text style={styles.infoContent}>Gender: {gender}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="pets" />
                        </Text>
                        <Text style={styles.infoContent}>Breed: {breed}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="pets" />
                        </Text>
                        <Text style={styles.infoContent}>Activity: {infor}</Text>
                    </View>
                    <TouchableOpacity style={styles.roundedButton}
                    onPress={() => navigation.navigate('ShowCertified')} 
                    >
                        <Text style={styles.textButton}> Show Certified Pedigree
              {/* <Icon name="optionsH" /> */}
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </ImageBackground>

    )

}


export default ShowProfileScreen