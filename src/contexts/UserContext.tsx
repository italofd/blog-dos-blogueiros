import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IUser } from "../interface/User";
import { AuthContext } from "./AuthContext";
import { FirebaseCtx } from "./FirebaseContext";
//Fazer useEffect para checkar se o auth.currentUser nao é nulo, se não for comparar os dois ids e depois renderizar, se for nulo nao renderize
export interface UserContextType {
  state: {
    user: IUser | null;
    users: IUser[];
    userId: string | undefined;
  };
  actions: {
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
    createUser: any;
    signUp: any;
    getUser: (userId: string) => Promise<IUser>;
  };
}
export interface RegisterDTO {
  name: string;
  username: string;
  email: string;
  password: string;
  country: string;
  city: string;
  state: string;
}

export const UserContext = createContext({} as UserContextType);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [userId, setUserId] = useState("");
  const { db, auth } = useContext(FirebaseCtx);
  const { loggedInUser } = useContext(AuthContext);

  const signUp = async ({
    //Necessario setar o loggedInUser com o UID
    email,
    name,
    password,
    country,
    city,
    state,
    username,
  }: RegisterDTO) => {
    try {
      const user = {
        email: email,
        name: name,
        username: username,
        country: country,
        city: city,
        state: state,
        posts: [],
        image: "",
      };
      console.log("signUP", user);
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await actions.createUser({
        uid: response.user?.uid,
        email: response.user?.email,
        name: user.name,
        username: user.username,
        country: user.country,
        city: user.city,
        state: user.state,
        posts: user.posts,
        image: user.image,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const createUser = async (user: any) => {
    try {
      const userRef = db.collection("users").doc(`${auth.currentUser?.uid}`);
      const userId = userRef.id;

      await userRef.set({
        email: user.email,
        name: user.name,
        username: user.username,
        posts: [],
        country: user.country,
        city: user.city,
        state: user.state,
        image: user.image,
      });
      const uid = userId as string;
      setUserId(uid);
      return uid;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  const getUser = async (userId: string) => {
    try {
      const res = await db.collection("users").doc(userId).get();
      const user = res.data() as IUser;
      if (!user) {
        throw new Error("nao tem dados");
      }
      console.log("userGetuser", user);
      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      const id = await auth.currentUser?.uid;
      setUserId(id as string);
    })();
  }, [auth.currentUser]);

  useEffect(() => {
    if (userId && userId !== undefined) {
      getUser(userId).then((res: any) => setUser(res));
      console.log("useeffectuser", user);
    }
  }, [userId]);

  const state = {
    user,
    users,
    userId,
  };
  const actions = {
    setUsers,
    createUser,
    signUp,
    getUser,
  };

  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  );
};
