export interface IPost {
  content: string;
  title: string;
  user: IPostUser;
  username?: string;
}

export interface IPostUser {
  name: string;
  email: string;
  userposts: IPost[];
  username?: string;
}
