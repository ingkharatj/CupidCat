import firebase, { firestore } from "firebase/app";
import 'firebase/firestore'

require("firebase/firebase-storage")

// const store = createStore(rootReducer, applyMiddleware(thunk));

const firebaseConfig = {
    // apiKey: "AIzaSyBtT4zHzNlg_hSGyayWUJTRqCoxiJw0rLM",
    // authDomain: "cupidcat-2b0e7.firebaseapp.com",
    // databaseURL: "https://cupidcat-2b0e7-default-rtdb.firebaseio.com",
    // projectId: "cupidcat-2b0e7",
    // storageBucket: "cupidcat-2b0e7.appspot.com",
    // messagingSenderId: "455335954698",
    // appId: "1:455335954698:web:f175cdf0868e37aa9992f3",
    // measurementId: "G-9LTYPNKB3W"

    apiKey: "AIzaSyBhLlpJBM6NkjcEC2GHPGcaeEW_atulDmk",
    authDomain: "cupid-cat.firebaseapp.com",
    projectId: "cupid-cat",
    storageBucket: "cupid-cat.appspot.com",
    messagingSenderId: "960689330993",
    appId: "1:960689330993:web:0331449b8c226e297c6e10",
    measurementId: "G-3CYW9FY0QY"
    

};

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase;

export const db = firebase.firestore()

// export const x = firestore()

db.settings({
    timestampsInSnapshots: true
})
export const storage = firebase.storage().ref()
