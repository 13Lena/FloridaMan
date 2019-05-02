import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { ModalActions, Button, Modal  } from "semantic-ui-react";

class Modal extends Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state

        Login(props) {
            return (
                <div>
                    <Modal size={mini} open={open} onClose={this.close}>
                        <h2 className="loginTitle">Login</h2>
                        <hr />
                        <Form>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="text" email="email" id="email" placeholder="email" value={props.email} onChange={props.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                            </FormGroup>
                            <Modal.Actions>
                                <Button onClick={props.handleLogin} color="primary" block>Login</Button>
                                <p className="signupLink">
                                    <Link to="/signup">Don't have an account?  Sign up here</Link>
                                </p>
                            </Modal.Actions>
                        </Form>
                    </Modal>
                </div>
            )
        }
    }};

export default Login;