import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import API from "../utils/API"
import { Grid, GridColumn, GridRow, Form, Button } from "semantic-ui-react";
import "./styles.css"

function Login(props) {
    return (
        <Grid>
            <GridRow>
                <GridColumn width={3}></GridColumn>
                <GridColumn width={10}>
                    <div style={{ padding: "10px", backgroundColor: "white" }}>
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
                            <Button
                                        type='login'
                                        onClick={props.handleLogin}
                                        color='teal'
                            > Login </Button>
                            <p className='signupLink'>
                                {/* <Router>
                                    <Link to='/signup'>Don't have an account? Sign up here</Link>
                                </Router> */}
                            </p>
                                
                         </Form>
                    </div>
                </GridColumn>  
                <GridColumn width={3}></GridColumn>
            </GridRow>
        </Grid>
    )
};
export default Login;