import React, { Component } from "react";
import Nav from "./components/Nav";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login"
// import Auth from "./pages/Auth";
import Auth from "./pages/Auth";
// import NoMatch from "./pages/NoMatch";

import UserProvider from "./context";

class App extends Component {

  state = {
    category: "",
    clicked: false
  }

  handleMenuClick = (event) => {
    // console.log(this.state.category)
        // if ((category && this.state.clicked === false)) {
        //   alert("hi")
        const category = event.target.innerText;
      this.setState({
        category: category
      });
  
    // }
    setTimeout(() => console.log(this.state.category), 50)
    // console.log(category)
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
            <Route exact path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
      // {/* </UserProvider> */}
    );

  }
}

export default App;