import * as firebase from 'firebase';
import React, { useState } from "react";

// Firebase connections and such
const firebaseConfig = {
  apiKey: "AIzaSyBXvPKOTevlCJlR8TtntEXFDMVIHrGgE6o",
  authDomain: "spikeexercise02.firebaseapp.com",
  databaseURL: "https://spikeexercise02-default-rtdb.firebaseio.com",
  projectId: "spikeexercise02",
  storageBucket: "spikeexercise02.appspot.com",
  messagingSenderId: "608541145096",
  appId: "1:608541145096:web:9dbfb931e370a0448ab9bd",
  measurementId: "G-SFGMQ7R615"
};
// Firebase references 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

export {firebaseApp, db}