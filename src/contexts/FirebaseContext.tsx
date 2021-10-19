import { createContext } from "react";
import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

export interface FirebaseContextType {
  db: firebase.firestore.Firestore;
  auth: firebase.auth.Auth;
  storage: firebase.storage.Storage;
}

const firebaseConfig = {
  apiKey: "AIzaSyC5JgITAJhbQHxecPBOq8zI-s7sOZMUYcM",
  authDomain: "blogdosblogueiros-2beb6.firebaseapp.com",
  projectId: "blogdosblogueiros-2beb6",
  storageBucket: "blogdosblogueiros-2beb6.appspot.com",
  messagingSenderId: "826499043853",
  appId: "1:826499043853:web:d95e9e95ef75fb097f3b44",
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
