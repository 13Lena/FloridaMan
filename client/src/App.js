import React, { Component } from "react";
import Nav from "./components/Nav";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Auth from "./pages/Auth";
// import NoMatch from "./pages/NoMatch";

import UserProvider from "./context";

class App extends Component {

  state = {
    category: "",
    clicked: false
  }

  handleMenuClick = (event) => {
        const category = event.target.innerText;
      this.setState({
        category: category
      });
  
    setTimeout(() => console.log(this.state.category), 50)
 }




  render() {

    return (

      // <UserProvider>
      <Router>
        <div>
          <Nav handlemenuclick={this.handleMenuClick} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </Router>
      // {/* </UserProvider> */}
    );

  }
}

export default App;