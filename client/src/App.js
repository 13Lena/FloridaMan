import React from "react";
import Nav from "./components/Nav";
import Results from "./components/Results"
import 'semantic-ui-css/semantic.min.css'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <container>
      <Nav />
      <Results />
    </container>
  );
}

export default App;