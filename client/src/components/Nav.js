import React, { Component } from "react";
import { Dropdown, Input, Menu, Modal } from 'semantic-ui-react';
import Signup from "./Signup";
import Login from "./Login";

class Nav extends Component {
  state = {
    loginOpen: false,
    signupOpen: false
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  show1 = () => this.setState({ loginOpen: true })
  show2 = () => this.setState({ signupOpen: true })
  close = () => this.setState({ loginOpen: false, signupOpen: false })

  handleItemClick1 = () => {
    // this.setState({ open: true });
    this.show1();
  }

  handleItemClick2 = () => {
    // this.setState({ open: true });
    this.show2();
  }

  render() {
    return (
      <>
        <Menu inverted>

          <Menu.Item
            name='home'
          //   active={activeItem === 'home'}
          //   onClick={this.handleItemClick}
          >
            Florida Man
          </Menu.Item>


          <Dropdown item text='Categories'>
            <Dropdown.Menu>
              <Dropdown.Item text='Animals' />
              <Dropdown.Item text='Creeps' />
              <Dropdown.Item text='Drugs' />
              <Dropdown.Item text='Drunks' />
              <Dropdown.Item text='Dumb Criminals' />
              <Dropdown.Item text='Fail' />
              <Dropdown.Item text='Fights' />
              <Dropdown.Item text='Florida Woman' />
              <Dropdown.Item text='Food' />
              <Dropdown.Item text='Funny' />
              <Dropdown.Item text='Guns' />
              <Dropdown.Item text='Jerks' />
              <Dropdown.Item text='Meth' />
              <Dropdown.Item text='NSFW' />
              <Dropdown.Item text='Vehicles' />
              <Dropdown.Item text='Weird Weapons' />
              <Dropdown.Item text='WTF' />
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>

            < Input placeholder='Search...' />
          </Menu.Item>
            <Modal size={'tiny'} trigger={
              <Menu.Item
                name='login'

              // active={activeItem === 'login'}
              onClick={this.handleItemClick1}
            >
              Login
            </Menu.Item>
          } onClose={this.close} open={this.state.loginOpen}>

            <Login />
          </Modal>
          <>
          <Modal size={'tiny'} trigger={
            <Menu.Item
              name='signup'
              onClick={this.handleItemClick2}
            >
              Signup
            </Menu.Item>
          } onClose={this.close} open={this.state.signupOpen}>
            <Signup />
          </Modal>
          </>
        </Menu>

        {/* <LoginModal  opener={this.state.open} /> */}
      </>
    );
  }
}

export default Nav;