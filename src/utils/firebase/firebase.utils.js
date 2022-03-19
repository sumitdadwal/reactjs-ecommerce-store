import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";

import { 
    getFirestore,
    doc,
    getDoc, 
    setDoc 
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-uqMjyygH_xidOz03kuuiTQG2NxNHq8M",
    authDomain: "crwn-clothin-db-db049.firebaseapp.com",
    projectId: "crwn-clothin-db-db049",
    storageBucket: "crwn-clothin-db-db049.appspot.com",
    messagingSenderId: "858931448728",
    appId: "1:858931448728:web:57185592e5906b7f47f9ed"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const providor = new GoogleAuthProvider();
providor.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, providor);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error createing the user', error.message);
        };
    }
    return userDocRef;

    //if user data exits
        //return userDocRef

    //if user data does not exist
        //create /set the document with data from userAuth in my collection

    
}