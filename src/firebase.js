import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1qae4f0WxeRTx-k1UGtmQM0gwImyoPZ8",
    authDomain: "linkedin-clone-d5d77.firebaseapp.com",
    projectId: "linkedin-clone-d5d77",
    storageBucket: "linkedin-clone-d5d77.appspot.com",
    messagingSenderId: "840397826583",
    appId: "1:840397826583:web:40f1f96a92c79ea76fca52"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };