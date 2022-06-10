import Header from "./components/Header";
import BuildHome from "./components/BuildHome"
import AboutApp from "./components/AboutApp";
import AboutAuthor from "./components/AboutAuthor";
import NoMatch from "./NoMatch";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routing ke setiap page
// Untuk Page BuildHome akan mengirim props lists
export default function MainPage(props) {
  return (
    <Router>
      <Header kiri="ToDo" kanan="List"/>
      <Routes>
        <Route
          path="/"
          element={<BuildHome lists={props.lists}/>}/>
        <Route path="/about/about-app" element={<AboutApp />}/> 
        <Route path="/about/about-author" element={<AboutAuthor />}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}