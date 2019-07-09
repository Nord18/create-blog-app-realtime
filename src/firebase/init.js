import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAVcEKS9oFEtfDEfNl5xvLe83rYfx-5zRw",
    authDomain: "my-blog-v2.firebaseapp.com",
    databaseURL: "https://my-blog-v2.firebaseio.com",
    projectId: "my-blog-v2",
    storageBucket: "my-blog-v2.appspot.com",
    messagingSenderId: "284390636701",
    appId: "1:284390636701:web:da812f6445836b03"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()