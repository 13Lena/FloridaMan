import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Modal } from "semantic-ui-react";

function Login(props) {
    return (
        <div>
            <Modal.Header className="loginTitle">Login</Modal.Header>
            <hr />
                <Modal.Content>
                    <Label for="email">Email</Label>
                    <Input 
                        type="text" 
                        email="email" 
                        id="email" 
                        placeholder="email" 
                        value={props.email} 
                        onChange={props.handleInputChange} 
                    />
                </Modal.Content>
                <Modal.Content>
                    <Label for="password">Password</Label>
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="password" 
                        value={props.password} 
                        onChange={props.handleInputChange} 
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={props.handleLogin} color="primary" block>Login</Button>
                    <p className="signupLink">
                        {/* <Router>
                            <Link to="/signup">Don't have an account?  Sign up here</Link>
                        </Router> */}
                    </p>
                </Modal.Actions>
        </div>
    )
};
export default Login;