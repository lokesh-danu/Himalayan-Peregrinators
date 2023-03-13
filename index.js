const express = require('express');
const app = express();
const Port = 5000;
const emailRoute= require('./routes/email');
const cors = require('cors');
app.use(cors());
app.use(express.json());
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC88aa0mtR0jIQo22z0-GJtfH9TbmOFiZ0",
  authDomain: "dan-server-cde26.firebaseapp.com",
  projectId: "dan-server-cde26",
  storageBucket: "dan-server-cde26.appspot.com",
  messagingSenderId: "1035901397232",
  appId: "1:1035901397232:web:0cd408cd2bfd5db9c87a35",
  measurementId: "G-CRP4RP33F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

app.use('/api/email',emailRoute);

app.listen(Port, () => {
    console.log(`app running at Port : ${Port}`);
})