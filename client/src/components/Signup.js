import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Modal, Button, Form } from "semantic-ui-react";


class Signup extends Component {
    state = {
        validEmail: false,
        validPassword: false,
        confirmPassword: false,
        password: "",
        passwordMessage: "",
        open: false,
        // show = () => this.setState({ open: true }),
        // close = () => this.setState({ open: false })
    }

    componentDidMount() {
        console.log(this.props);
        this.validatePassword();
    }

    componentDidUpdate() {

        // functions to check the input fields, and update the state if they are valid
        this.confirmPassword();
        this.validatePassword();
        this.passwordMessage();
        this.validateEmail();
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    // uses regex to check is email is valid
    validateEmail = () => {
        let validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let valid = validEmail.test(this.props.email);
        if (!this.state.validEmail && valid) {
            this.setState({
                validEmail: true
            });
        }
        if (this.state.validEmail && !valid) {
            this.setState({
                validEmail: false
            });
        }
    }

    // checks is password meets regex test (at least 6 letters, 1 capital and 1 number)
    validatePassword = () => {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            this.setState({
                validPassword: false,
            });
        }
    }

    // checks if 2 password fields match
    confirmPassword = () => {
        if (!this.state.confirmPassword && this.state.password !== "" && this.state.password === this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.state.confirmPassword && this.state.password !== this.props.password) {
            this.setState({
                confirmPassword: false
            });
        }
    }

    // displays the password message if it exists
    passwordMessage = () => {
        let message = "at least 6 letters, 1 capital & 1 number"
        if (this.props.password !== "" && !this.state.validPassword && this.state.passwordMessage !== message) {
            this.setState({
                passwordMessage: message
            });
        }
        if (this.state.validPassword && this.state.passwordMessage !== "") {
            this.setState({
                passwordMessage: ""
            });
        }
        if (this.state.passwordMessage === message && this.props.password === "") {
            this.setState({
                passwordMessage: ""
            });
        }
    }

    render() {
        return (
            <div style={{ padding: "10px"}}>
                <h2 className="signupTitle"> Please Signup</h2>
                <hr />
                <Form>
                    {/* <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="email@email.com" value={this.props.email} onChange={this.props.handleInputChange} valid={this.state.validEmail} />
                    </FormGroup> */}
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder='Email'
                            type='text'
                            email='email'
                            id='email'
                            // value={this.props.email}        
                            // onChange={this.props.handleInputChange}
                            // valid={this.state.validEmail}
                        />
                    </Form.Field>
                    {/* <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                        <FormText>{this.state.passwordMessage}</FormText>
                    </FormGroup> */}
                    <Form.Field>
                        <label>Password</label>
                        <input
                            placeholder='Password'
                            type='password'
                            name='password'
                            id='password'
                            // value={this.props.password}
                            // onChange={this.props.handleInputChange}
                            // valid={this.state.validPassword}
                        />
                        {/* <FormText>{this.state.passwordMessage}</FormText> */}
                    </Form.Field>
                    {/* <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input type="password" name="password" id="confirmPassword" placeholder="confirm password" value={this.state.password} onChange={this.handleInputChange} valid={this.state.confirmPassword} />
                    </FormGroup> */}
                    <Form.Field>
                        <label>Confirm Password</label>
                        <input
                            placeholder='Confirm Password'
                            type='password'
                            name='password'
                            id='confirmPassword'
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            valid={this.state.confirmPassword}
                        />
                    </Form.Field>

                    <Modal.Actions>
                        {/* if all fields are valid, allow the user to submit the form */}
                        {/* {(this.state.validEmail && this.state.validPassword && this.state.confirmPassword) ? (
                            <Button onClick={this.props.handleSignup} color="success" block>Signup</Button>
                        ) : (
                                <Button onClick={this.props.handleSignup} color="danger" block disabled>Signup</Button>
                            )} */}
                        {/* <p className="signupLink">
                            <Link to="/login">Already have an account?  Sign in here</Link>
                        </p> */}
                        <Button
                            type='signup'
                            // onClick={props.handleLogin}
                            color='teal'
                        >
                            Signup
                        </Button>
                        {/* <p className='loginLink'>
                            <Router>
                                <Link to='/login'>Already have an account? Click here</Link>
                            </Router>
                        </p> */}

                    </Modal.Actions>
                </Form>
            </div>
        );
    }
}

export default Signup;