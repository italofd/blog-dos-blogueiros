import { createContext } from "react";
import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";
import "firebase/storage";

export interface FirebaseContextType {
  db: firebase.firestore.Firestore;
  auth: firebase.auth.Auth;
  storage: firebase.storage.Storage;
}
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const FirebaseCtx = createContext({} as FirebaseContextType);
export const FirebaseProvider: React.FC = ({ children }) => {
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  return (
    <FirebaseCtx.Provider value={{ db, auth, storage }}>
      {children}
    </FirebaseCtx.Provider>
  );
};
