import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { Grid, GridColumn, GridRow, Form, Button } from "semantic-ui-react";

class Signup extends Component {
    state = {
        validEmail: false,
        validPassword: false,
        confirmPassword: false,
        password: "",
        passwordMessage: "",
        open: false,
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
            <Grid>
                <GridRow>
                    <GridColumn width={2}></GridColumn>
                    <GridColumn width={9}>
                        <div style={{ padding: "10px", backgroundColor: "white", marginLeft: "200px" }}>
                            <h2 className="signupTitle"> Please Signup</h2>
                            <hr />
                            <Form>
                                <Form.Field>
                                    <label>Email</label>
                                    <input
                                        placeholder='Email'
                                        type='text'
                                        name='email'
                                        id='email'
                                        value={this.props.email}
                                        onChange={this.props.handleInputChange}
                                        valid={this.state.validEmail}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <label>Password</label>
                                    <input
                                        placeholder='Password'
                                        type='password'
                                        name='password'
                                        id='password'
                                        value={this.props.password}
                                        onChange={this.props.handleInputChange}
                                        valid={this.state.validPassword}
                                    />
                                </Form.Field>

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
                                    <Button
                                        type='signup'
                                        onClick={this.props.handleSignup}
                                        color='teal'
                                    >Signup
                                    </Button>
                                </Modal.Actions>
                            </Form>
                        </div>
                    </GridColumn>
                </GridRow>
            </Grid>

        );
    }
}

export default Signup;