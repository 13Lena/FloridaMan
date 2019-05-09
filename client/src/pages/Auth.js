import React, { Component } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import API from "../utils/API";
import { BrowserRouter as  Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";


class Auth extends Component {

  state = {
    loggedIn: false,
    email: "",
    password: "",
    confirmPassword: "",
    user: null,
    message: ""
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    sessionStorage.username = this.state.email;
    this.props.usernameCB(this.state.email)
    if (this.state.email && this.state.password) {
      API.login({
        username: this.state.email,
        password: this.state.password
      }).then(username => {
 
        if (username.data.loggedIn) {
          this.setState({
            loggedIn: true,
            email: username.data.username
          });
          ;
          sessionStorage.loggedIn = true
          console.log("log in successful");
          setTimeout(() => window.location.href = '/favorites',50)
        }
        else if (username.data.message) {
          sessionStorage.username = null;
          this.setState({
            message: username.data.message
          })
        }
      });
    }
  }

  handleSignup = event => {
    event.preventDefault();
    sessionStorage.username = this.state.email;
    this.props.usernameCB(this.state.email)
    if (this.state.email && this.state.password) {
      API.signup({
        username: this.state.email,
        password: this.state.password
      }).then(username => {
        if (username.data.username) {
          this.setState({
            loggedIn: true,
            email: username.data.username
          });
          console.log("log in successful");
          window.location.href = '/';
          sessionStorage.loggedIn = true
        } else {
          console.log("something went wrong :(")
          console.log(username.data.user);
          sessionStorage.username = null;
          this.setState({
            message: username.data
          })
        }
      });
    }
  }

  render() {
    return (
      <div className="authBox">
        {(this.props.action === "login") ? (
          <Login
            email={this.state.email}
            password={this.state.password}
            handleLogin={this.handleLogin}
            handleInputChange={this.handleInputChange}
            message={this.state.message}
          />
        ) : (
            <Signup
              email={this.state.email}
              password={this.state.password}
              confirmPassword={this.state.confirmPassword}
              handleSignup={this.handleSignup}
              handleInputChange={this.handleInputChange}
              message={this.state.message}
            />
          )}
          
      </div>
    )
  }
}

export default Auth;