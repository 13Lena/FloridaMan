import React, { Component } from "react";
import Nav from "./components/Nav";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Auth from "./pages/Auth";


class App extends Component {

  state = {
    category: "",
    clicked: false,
    username: null
  }

  handleMenuClick = (event) => {
        const category = event.target.innerText;
      this.setState({
        category: category
      });
  
    setTimeout(() => console.log(this.state.category), 50)
 }

 logUsername = username => {
  console.log("app: ",username)
  this.setState({username: username})
 }

  render() {
    return (
      <Router>
        <div>
          <Nav handleMenuClick={this.handleMenuClick} />
          <Switch>
          <Route exact path='/' render={props => <Main {...props} username={this.state.username} category={this.state.category} />} />
            <Route exact path="/signup" render={(props) => <Auth {...props} usernameCB={this.logUsername} action="signup" />} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/login" render={(props) => <Auth {...props} usernameCB={this.logUsername} action="login" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;