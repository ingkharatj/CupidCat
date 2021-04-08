import Firebase, { db } from '../config/Firebase.js'
import { Image } from 'react-native'
import someCatPicture from '../assets/images/01.jpg'
// import "firebase/auth";

// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const PETNAME = 'PETNAME'
export const UPDATE_PETNAME = 'UPDATE_PETNAME'
export const LOCATION = 'LOCATION'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'
export const AGE = 'AGE'
export const UPDATE_AGE = 'UPDATE_AGE'
export const INFOR = 'INFOR'
export const UPDATE_INFOR = 'UPDATE_INFOR'
export const GENDER = 'GENDER'
export const UPDATE_GENDER = 'UPDATE_GENDER'
export const BREED = 'BREED'
export const UPDATE_BREED = 'UPDATE_BREED'
export const IMAGE = 'IMAGE'
export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const MATCH = 'MATCH'
export const UPDATE_MATCH = 'UPDATE_MATCH'







// actions

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const updatePetname = petname => {
    return {
        type: UPDATE_PETNAME,
        payload: petname
    }
}
export const updateAge = age => {
    return {
        type: UPDATE_AGE,
        payload: age
    }
}

export const updateLocation = location => {
    return {
        type: UPDATE_LOCATION,
        payload: location
    }
}

export const updateInfor = infor => {
    return {
        type: UPDATE_INFOR,
        payload: infor
    }
}

export const updateGender = gender => {
    return {
        type: UPDATE_GENDER,
        payload: gender
    }
}

export const updateBreed = breed => {
    return {
        type: UPDATE_BREED,
        payload: breed
    }
}

export const updateImage = image => {
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}

export const updateMatch = match => {
    return {
        type: UPDATE_MATCH,
        payload: match
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            
            dispatch(getUser(response.user.uid))
        } catch (e) {
            alert(e)
        }
    }
}

export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get()

            dispatch({ type: LOGIN, payload: user.data() })
        } catch (e) {
            alert(e)
        }
    }
}

export const signup = () => {

    return async (dispatch, getState) => {
        try {
            const { email, password, petname, location, age, infor, gender, breed, image } = getState().user
            // const { petname, location, age } = getState()
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    petname: petname,
                    location: location,
                    age: age,
                    infor: infor,
                    gender: gender,
                    breed: breed,
                    // match: match,
                    image: image || Image.resolveAssetSource(someCatPicture).uri,
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)
 
                dispatch({ type: SIGNUP, payload: user })
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const updateUser =()=>{
    db.collection('users')
                    .doc(user.uid)
                    .set(user)
}

const uploadImage = async () => {
    const uri = props.route.params.image;
    const childPath = `picture/${Firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;

    const response = await fetch(uri);
    const blob = await response.blob();

    const task = await Firebase.storage().ref().child(childPath).put(blob);
    const downloadUrl = await task.getDownloadURL()

    console.log(downloadUrl)
}



export const updateUserImage = () => {

    return async (dispatch, getState) => {

    }
}

