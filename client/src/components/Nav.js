import React, { Component } from "react";
import { Dropdown, Input, Menu, Modal } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

class Nav extends Component {
  state = {
    loginOpen: false,
    signupOpen: false,
    category: ""
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  show1 = () => this.setState({ loginOpen: true })
  show2 = () => this.setState({ signupOpen: true })
  close = () => this.setState({ loginOpen: false, signupOpen: false })

  handleItemClick1 = () => {
    this.show1();
  }

  handleItemClick2 = () => {
    this.show2();
  }


  render(props) {
    return (
      <>
        <Menu inverted>

          <Menu.Item
            name="home"
          >
            <Link to="/">Florida Man</Link>
          </Menu.Item>
          <Dropdown item text="Categories">
            <Dropdown.Menu >
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Animals" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Creeps" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Drugs" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Drunks" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Dumb Criminals" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Fail" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Fights" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Florida Woman" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Food" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Funny" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Guns" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Jerks" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Meth" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="NSFW" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Vehicles" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="Weird Weapons" />
              <Dropdown.Item onClick={this.props.handleMenuClick} name="category" text="WTF" /> 
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            < Input placeholder="Search..." />
          </Menu.Item>
              <Menu.Item
                name="login"
                onClick={this.handleItemClick1}
              ><Link to="/login"> Login</Link>
          </Menu.Item>
          <Menu.Item
              name="signup"
            ><Link to="/signup">Signup</Link>
          </Menu.Item>
          <Menu.Item
            name='favorites'
          >
            Favorites
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default Nav;