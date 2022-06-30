/** @format */

import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyALZY5KuB6Qc_GqIBIok3RsJlD17eqriZI',
    authDomain: 'admin-nominas.firebaseapp.com',
    projectId: 'admin-nominas',
    storageBucket: 'admin-nominas.appspot.com',
    messagingSenderId: '468448670510',
    appId: '1:468448670510:web:e9ec3d68d3c1e7dc2780bf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

//Utils
// Autentificacion de firebase
const auth = getAuth(app);

//Exports

export { auth };
