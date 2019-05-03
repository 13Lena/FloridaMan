import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ModalActions, Modal } from "semantic-ui-react";

function Login(props) {
    return (
        <div>
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
                        <Router>
                            <Link to="/signup">Don't have an account?  Sign up here</Link>
                        </Router>
                    </p>
                </Modal.Actions>
            </Form>

        </div>
    )
};
export default Login;