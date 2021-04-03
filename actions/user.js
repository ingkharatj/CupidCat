import Firebase, { db } from '../config/Firebase.js'
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
            const { email, password, petname, location, age, infor } = getState().user
            // const { petname, location, age } = getState()
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    petname: petname,
                    location: location,
                    age: age,
                    infor : infor,
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
