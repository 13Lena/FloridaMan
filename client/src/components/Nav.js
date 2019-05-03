import React, { Component } from "react";
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Menu } from 'semantic-ui-react'


export default class Nav extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state
        return (

            <Menu>
            <Menu.Item header><h2>Florida Man</h2></Menu.Item>
            <Menu.Item
              name='aboutUs'
              active={activeItem === 'aboutUs'}
              onClick={this.handleItemClick}
            />
            <Menu.Item name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
            <Menu.Item
              name='locations'
              active={activeItem === 'locations'}
              onClick={this.handleItemClick}
            />
          </Menu>

        )
    }
}

