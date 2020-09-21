import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDqfK19MgBdTYzL5-HdtHhzybTp0cJh_tA',
  authDomain: 'crwn-clothing-db-4b42f.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-4b42f.firebaseio.com',
  projectId: 'crwn-clothing-db-4b42f',
  storageBucket: 'crwn-clothing-db-4b42f.appspot.com',
  messagingSenderId: '794086368168',
  appId: '1:794086368168:web:c94480d59fecb0a664739d',
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
