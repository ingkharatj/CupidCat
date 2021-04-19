import firebase, { firestore } from "firebase/app";
import 'firebase/firestore'

require("firebase/firebase-storage")

// const store = createStore(rootReducer, applyMiddleware(thunk));

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

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase;

export const db = firebase.firestore()

// export const x = firestore()

db.settings({
    timestampsInSnapshots: true
})
export const storage = firebase.storage().ref()
