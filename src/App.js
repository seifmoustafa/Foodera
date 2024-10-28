import "./App.css";
import Home from "./components/Home/Home.js";
import { Fragment } from "react";
import Navs from "./components/Navs/Navs.js";

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
    </Fragment>
  );
}

export default App;
