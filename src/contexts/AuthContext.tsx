import { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase";
import { FirebaseCtx } from "./FirebaseContext";
import { useHistory } from "react-router";
import { UserContext } from "./UserContext";

type LoggedInUser = firebase.User | null | undefined;
export interface AuthContextType {
  loginWithGoogle: () => Promise<void>;
  loggedInUser: LoggedInUser | undefined;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedInUser, setloggedInUser] = useState<LoggedInUser | null>(null);
  const firebaseCtx = useContext(FirebaseCtx);
  const { auth } = useContext(FirebaseCtx);
  const { state } = useContext(UserContext);

  const history = useHistory();

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await firebaseCtx.auth.signInWithPopup(provider);
    console.log("resultado", result);
    result.user && setloggedInUser(result.user);
  };

  useEffect(() => {
    const unsubscribe = firebaseCtx.auth.onAuthStateChanged((user) => {
      if (user) {
        setloggedInUser(user);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [firebaseCtx.auth]);

  const signOut = async () => {
    if (loggedInUser) {
      await firebaseCtx.auth.signOut();
      setloggedInUser(undefined);
    }
  };

  return (
    <AuthContext.Provider value={{ loginWithGoogle, loggedInUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
