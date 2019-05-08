import React, { Component } from "react";
import { Dropdown, Input, Menu, Modal, DropdownMenu, DropdownItem } from "semantic-ui-react";
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
        <Menu inverted size='massive'>

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
          <Dropdown item text="Extras">
            <Dropdown.Menu>
              <DropdownItem href="https://en.wikipedia.org/wiki/Florida_Man" target="_blank" text="Florida Man Wiki" />
              <DropdownItem href="https://imgur.com/gallery/bggY9" text="Florida Man Comics" />
              <DropdownItem href="https://www.50states.com/facts/florida.htm" text="Florida Facts" />
              <DropdownItem href="http://www.tampabay.com/florida/2019/04/08/here-are-the-most-outrageous-license-plates-rejected-by-the-florida-dmv/?n" text="Florida Licence Plates" />
              <DropdownItem href="https://en.wikipedia.org/wiki/List_of_invasive_species_in_Florida" text="Invasive Species of Florida" />
              <DropdownItem href="https://www.independent.co.uk/news/world/americas/hurricane-irma-gun-owners-florida-shoot-down-storm-a7937546.html" text="Florida Weather Control" />
              <DropdownItem href="https://www.reddit.com/r/polishman" text="Polish Man" />
              <DropdownItem href="https://www.atlasobscura.com/articles/whatever-you-do-do-not-eat-touch-or-even-inhale-the-air-around-the-manchineel-tree" text="Worst Plant Ever" />
              <DropdownItem href="https://www.nydailynews.com/news/world-hilarious-mug-shots-gallery-1.14220" text="Mugshot Hall of Fame" />
              <DropdownItem href="https://www.youtube.com/watch?v=UD9LEPML8uk" text="Who is Florida Man?" />
              <DropdownItem href="https://www.atlasobscura.com/lists/the-best-of-weird-florida" text="Weird Florida" />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name='favorites'
          >Favorites
          </Menu.Item>

          <Menu.Item
            position='right'
            name="login"
            onClick={this.handleItemClick1}
          ><Link to="/login"> Login</Link>
          </Menu.Item>
          <Menu.Item
            name="signup"
          ><Link to="/signup">Signup</Link>
          </Menu.Item>

        </Menu>
      </>
    );
  }
}

export default Nav;