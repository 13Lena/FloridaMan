import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Modal, Button, Form } from "semantic-ui-react";


function Login(props) {
    return (

        <div style={{ padding: "10px" }}>
            <h2 className="loginTitle"> Please Login</h2>
            <hr />
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type='text'
                        email='email'
                        id='email'
                        value={props.email}
                        onChange={props.handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        type='password'
                        name='password'
                        id='password'
                        value={props.password}
                        onChange={props.handleInputChange}
                    />
                </Form.Field>
                <Modal.Actions>
                    <Button
                        type='login'
                        onClick={props.handleLogin}
                        color='teal'
                    >
                        Login
                    </Button>
                    <p className='signupLink'>
                        <Router>
                            <Link to='/signup'>Don't have an account? Sign up here</Link>
                        </Router>
                    </p>
                </Modal.Actions>
            </Form>
        </div>
    )
};
export default Login;