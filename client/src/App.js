import React from "react";
import Nav from "./components/Nav";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login"
// import Auth from "./pages/Auth";
// import NoMatch from "./pages/NoMatch";

import UserProvider from "./context";

function App() {
  return (

    // <UserProvider>
      <Router>
        <div>
          <Nav />
            <Switch>
              <Route exact path="/" component={Main} /> 
              <Route exact path="/Favorites" component={Favorites} /> 
              <Route exact path="/Login" component={Login} />
            </Switch>
        </div>
      </Router>
    // {/* </UserProvider> */}
  );
}

export default App;