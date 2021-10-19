import React from "react";
import Postlist from "../components/post/Postlist";
import Main from "../layouts/Main";

const Home: React.FC = () => {
  return (
    <Main>
      <Postlist />
    </Main>
  );
};

export default Home;
