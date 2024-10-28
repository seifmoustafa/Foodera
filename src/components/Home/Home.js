import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import Blog from "./Blog";
import Numbers from "./Numbers";
import Pride from "./Pride";
import Ingredients from "./Ingrediants";
import Paralex from "./Paralex";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Numbers />
      <Pride />
      <Ingredients />
      <Paralex />
      <Blog />
    </Fragment>
  );
};

export default Home;
