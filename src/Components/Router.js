import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "Screens/Home";
import Header from "Components/Header";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Route path="/" component={Home} />
    </HashRouter>
  );
};

export default Router;
