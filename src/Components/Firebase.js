import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCEc8Mp7h2T0i6-ai9mnRZTA9hQFG8v364',
  authDomain: 'vg-ingenieros.firebaseapp.com',
  databaseURL: 'https://vg-ingenieros.firebaseio.com',
  projectId: 'vg-ingenieros',
  storageBucket: 'vg-ingenieros.appspot.com',
  messagingSenderId: '479498915105'
};

const firebaseConf = firebase.initializeApp(firebaseConfig);
export default firebaseConf;
