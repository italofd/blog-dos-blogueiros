import { IPost } from "./Post";

export interface IUser {
  name: string;
  username: string;
  posts: IPost[];
  image: string;
  email: string | null | undefined;
  country: string;
  city: string;
  state: string;
}

export interface IProfile {
  user: IUser;
  image: string;
  name: string;
  username: string;
  email: string;
  address: {
    country: string;
    city: string;
    state: string;
  };
}

export interface IDataUser {
  email: string;
}
