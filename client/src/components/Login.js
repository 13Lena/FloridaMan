import React from "react";
import { Grid, GridColumn, GridRow, Form, Button } from "semantic-ui-react";

function Login(props) {
    return (
        <Grid>
            <GridRow>
                <GridColumn width={2}></GridColumn>
                <GridColumn width={9}>
                    <div style={{ padding: "10px", marginLeft:"200px", backgroundColor: "white" }}>
                        <h2 className="loginTitle"> Please Login</h2>
                        <hr />
                        <Form>
                            <Form.Field>
                                <label>Email</label>
                                <input
                                    placeholder="Email"
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={props.email}
                                    onChange={props.handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={props.password}
                                    onChange={props.handleInputChange}
                                />
                            </Form.Field>
                            <Button
                                type="login"
                                onClick={props.handleLogin}
                                color="teal"   
                            > Login 
                            </Button>
                            <p className="signupLink"></p>
                        </Form>
                    </div>
                </GridColumn>
                <GridColumn width={2}></GridColumn>
            </GridRow>
        </Grid>
    )
};
export default Login;