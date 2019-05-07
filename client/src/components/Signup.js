import React, { Component } from "react";
import { FormText,  } from 'reactstrap';
// import { Link } from "react-router-dom";
import { ModalActions } from "semantic-ui-react";
import { Button, Form } from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div>
                <h2 className="loginTitle">Signup</h2>
                <hr />
                <Form>
                    <Form.Field>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="email@email.com" value={this.props.email} onChange={this.props.handleInputChange} valid={this.state.validEmail} />
                    </Form.Field>
                    <Form.Field>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                        {/* <FormText>{this.state.passwordMessage}</FormText> */}
                    </Form.Field>
                    <Form.Field>
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" name="password" id="confirmPassword" placeholder="confirm password" value={this.state.password} onChange={this.handleInputChange} valid={this.state.confirmPassword} />
                    </Form.Field>
                    {/* <ModalActions> */}
                        {/* if all fields are valid, allow the user to submit the form */}
                        {(this.state.validPassword && this.state.confirmPassword) ? (
                            <Button onClick={this.props.handleSignup} block>Signup</Button>
                        ) : (
                                <Button onClick={this.props.handleSignup} block disabled>Signup</Button>
                            )}
                        {/* <p className="signupLink">
                            <Link to="/login">Already have an account?  Sign in here</Link>
                        </p> */}
                    {/* </ModalActions> */}
                </Form>
            </div>
        );
    }
}

export default Signup;

