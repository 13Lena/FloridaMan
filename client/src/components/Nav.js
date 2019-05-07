import React, { Component } from "react";
import { Dropdown, Input, Menu, Modal } from "semantic-ui-react";
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
    const { category } = this.state;
    const valArray = ["Animals", "Creeps", "Drugs"];
    return (
      <>
        <Menu inverted>

          <Menu.Item
            name="home"
          //   active={activeItem === "home"}
          //   onClick={this.handleItemClick}
          >
            Florida Man
          </Menu.Item>
          <Dropdown item text="Categories">
            <Dropdown.Menu >
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Animals" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Creeps" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Drugs" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Drunks" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Dumb Criminals" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Fail" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Fights" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Florida Woman" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Food" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Funny" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Guns" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Jerks" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Meth" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="NSFW" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Vehicles" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="Weird Weapons" />
              <Dropdown.Item onClick={this.props.handlemenuclick} name="category" text="WTF" /> 
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>

            < Input placeholder="Search..." />
          </Menu.Item>
            <Modal size={"tiny"} trigger={
              <Menu.Item
                name="login"

              // active={activeItem === "login"}
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
              name="signup"
              onClick={this.handleItemClick2}
            >
              Signup
            </Menu.Item>
          } onClose={this.close} open={this.state.signupOpen}>
            <Signup />
          </Modal>
          </>
          <Menu.Item
            name='favorites'
          //   active={activeItem === 'home'}
          //   onClick={this.handleItemClick}
          >
            Favorites
          </Menu.Item>
        </Menu>

        {/* <LoginModal  opener={this.state.open} /> */}
      </>
    );
  }
}

export default Nav;