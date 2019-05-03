import React from "react";
import Nav from "./components/Nav";
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Main from "./pages/Main";
// import Saved from "./pages/Saved";
// import Auth from "./pages/Auth";
// import NoMatch from "./pages/NoMatch";

import { Container } from 'reactstrap';
import UserProvider from "./context";

function App() {
  return (
    // <UserProvider>
      <Router>
        <div>
          <Nav />
          <Container>
            <Switch>
              {/* <Route exact path="/" component={Main} />  */}
            </Switch>
          </Container>
        </div>
      </Router>
    // {/* </UserProvider> */}
  );
}

export default App;