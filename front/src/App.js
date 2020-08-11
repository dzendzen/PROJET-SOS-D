import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Cards from "./components/Cards";

import Gallery from "./pages/Gallery";
// import BackToTop from "./components/BackToTop";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/" component={Services} />
        <Route exact path="/about" component={Cards} />
        <Route exact path="/contact" component={Cards} />
        <Route exact path="/job" component={Cards} />
        <Route exact path="/partners" component={Cards} />
        <Route exact path="/gallery" component={Gallery} />
        <Cards />
      </>
    );
  }
}
