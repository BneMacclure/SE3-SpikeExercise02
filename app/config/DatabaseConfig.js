import * as firebase from 'firebase';
import React, { useState } from "react";

// Firebase connections and such
const firebaseConfig = {
  apiKey: "AIzaSyBXvPKOTevlCJlR8TtntEXFDMVIHrGgE6o",
  authDomain: "spikeexercise02.firebaseapp.com",
  databaseURL: "https://spikeexercise02-default-rtdb.firebaseio.com",
  storageBucket: "spikeexercise02.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);