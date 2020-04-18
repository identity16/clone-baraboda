import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./routes/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App() {
  const menus = [
    {
      name: "",
      link: "/"
    }
  ];
  return (
    <div className="App">
      <Router>
        <Navigation logoSrc="https://picsum.photos/185/48" menus={menus} />
        <Route path="/" exact component={Main} />
        <Footer />
      </Router>
    </div>
  );
}
