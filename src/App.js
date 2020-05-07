import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:roomid" component={Room} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
