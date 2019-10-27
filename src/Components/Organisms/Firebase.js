import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCEc8Mp7h2T0i6-ai9mnRZTA9hQFG8v364',
  authDomain: 'vg-ingenieros.firebaseapp.com',
  databaseURL: 'https://vg-ingenieros.firebaseio.com',
  projectId: 'vg-ingenieros',
  storageBucket: 'vg-ingenieros.appspot.com',
  messagingSenderId: '479498915105',
  appId: '1:479498915105:web:ae96901232c452a3198260',
  measurementId: 'G-P5B14H54HD'
};

const FirebaseConfig = firebase.initializeApp(config);

export default FirebaseConfig;
