import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyBaSTdhso0FukXROUKeEemq7bdipAPq50k",
    authDomain: "netflix-clone-webapp-905f1.firebaseapp.com",
    databaseURL: "https://netflix-clone-webapp-905f1.firebaseio.com",
    projectId: "netflix-clone-webapp-905f1",
    storageBucket: "netflix-clone-webapp-905f1.appspot.com",
    messagingSenderId: "996589561665",
    appId: "1:996589561665:web:21b571bdc0b0d681c223c0"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export {firebase};