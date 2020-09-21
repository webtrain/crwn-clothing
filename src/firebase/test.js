import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('ZCP5oa3fpqUIgTpwP7qP').collection('cartItems').doc('VrUzTSrV6mhCioQP1jLx');
firestore.doc('users/ZCP5oa3fpqUIgTpwP7qP/cartItems/VrUzTSrV6mhCioQP1jLx');
firestore.collection('users/ZCP5oa3fpqUIgTpwP7qP/cartItems');
