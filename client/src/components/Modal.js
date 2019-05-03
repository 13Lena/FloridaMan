import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";
import Login from "./Login";

class LoginModal extends Component {
    state = { open: false }
    close = () => this.setState({ open: false })
    show = () => this.setState({ open: true })

    render() {
        console.log(this.props.opener);
        return (
            <div>
                <Modal size={'mini'} open={this.state.open} onClose={this.props.open}>
                    <Login />
                </Modal>
            </div>
        )
    }
}

export default LoginModal;