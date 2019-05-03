import React, { Component } from "react";
import { Dropdown, Input, Menu } from 'semantic-ui-react';
import LoginModal from "./Modal";
import SignupModal from "./Signup";

class Nav extends Component {
  state = {
    open: false
  }

  handleItemClick = () => {
    this.setState({ open: true })
  }

  render() {
    return (
      // <nav>
      //     <h2>Florida Man</h2>
      //     <Link to="/">Main</Link>
      //     <Link to="/saved">Saved</Link>
      // </nav>
      <Menu>

        <Menu.Item
          name='home'
        //   active={activeItem === 'home'}
        //   onClick={this.handleItemClick}
        >
          Florida Man
        </Menu.Item>

        <Dropdown item text='Categories'>
          <Dropdown.Menu>
            <Dropdown.Item text='WTF' />
            <Dropdown.Item text='Meth' />
            <Dropdown.Item text='NSFW' />
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          < Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item
          name='login'
          // active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          <LoginModal open={this.state.open} />
          Login
          <SignupModal open={this.state.close} />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;