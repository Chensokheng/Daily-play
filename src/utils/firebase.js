import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyBGYgXrU5ayMxO7cVRBkwOf13n8AKRQgIY',
  authDomain: 'memory-b8310.firebaseapp.com',
  databaseURL: 'https://memory-b8310.firebaseio.com',
  projectId: 'memory-b8310',
  storageBucket: 'memory-b8310.appspot.com',
  messagingSenderId: '471400056832',
  appId: '1:471400056832:web:2488fb440d9c8ee87230e5',
  measurementId: 'G-XELZFL5RBE',
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
