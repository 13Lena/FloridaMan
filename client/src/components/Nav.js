import React, { Component } from "react";
import { Dropdown, Input, Menu, Modal } from 'semantic-ui-react';
import SignupModal from "./Signup";
import Login from "./Login";

class Nav extends Component {
  state = {
    open: false
  }

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  handleItemClick = () => {
    // this.setState({ open: true });
    this.show();
  }

  render() {
    return (
      // <nav>
      //     <h2>Florida Man</h2>
      //     <Link to="/">Main</Link>
      //     <Link to="/saved">Saved</Link>
      // </nav>
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
            <Dropdown.Item  text='Animals' />
            <Dropdown.Item  text='Creeps' />
            <Dropdown.Item  text='Drugs' />
            <Dropdown.Item  text='Drunks' />
            <Dropdown.Item  text='Dumb Criminals' />
            <Dropdown.Item  text='Fail' />
            <Dropdown.Item  text='Fights' />
            <Dropdown.Item  text='Florida Woman' />
            <Dropdown.Item  text='Food' />
            <Dropdown.Item  text='Funny' />
            <Dropdown.Item  text='Guns' />
            <Dropdown.Item  text='Jerks' />
            <Dropdown.Item  text='Meth' />
            <Dropdown.Item  text='NSFW' />
            <Dropdown.Item  text='Vehicles' />
            <Dropdown.Item  text='Weird Weapons' />
            <Dropdown.Item  text='WTF' />
          </Dropdown.Menu>
        </Dropdown>

        {/* <Menu.Item>
        < Input placeholder='Search...' />
        </Menu.Item> */}

          <Menu.Item>
            < Input placeholder='Search...' />
          </Menu.Item>
            <Modal size={'tiny'} trigger={
              <Menu.Item
                name='login'
              // active={activeItem === 'login'}
                onClick={this.handleItemClick}
                >
                Login
               </Menu.Item>
              }  onClose={this.close} open={this.state.open}>
            <Login />
          </Modal>
        </Menu>

        {/* <LoginModal  opener={this.state.open} /> */}
      </>
    );
  }
}

export default Nav;