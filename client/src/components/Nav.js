import React from "react";
import { Dropdown, Input, Menu } from 'semantic-ui-react'

function Nav() {
    return(
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
            <Dropdown.Item  text='Penis' />
            <Dropdown.Item  text='Vehicles' />
            <Dropdown.Item  text='Weird Weapons' />
            <Dropdown.Item  text='WTF' />
          </Dropdown.Menu>
        </Dropdown>

        {/* <Menu.Item>
        < Input placeholder='Search...' />
        </Menu.Item> */}

        <Menu.Item
          name='login'
        //   active={activeItem === 'login'}
        //   onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
      </Menu>
    );
}

export default Nav;