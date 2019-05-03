import React, { Component } from "react";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";
import Login from "./Login";

class LoginModal extends Component {
    state = { open: false }
    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        console.log(this.props);
        return (
            <div>
                <Modal size={'mini'} open={this.props.open} onClose={this.props.close} closeOnDimmerClick={true} closeOnEscape={true} >
                    <Login />
                </Modal>
            </div>
        )
    }
}

export default LoginModal;