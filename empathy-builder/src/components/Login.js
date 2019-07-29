import React from 'react';
import styled from 'styled-components';
import { PageContainer, 
        LoginContainer, 
        LoginHeader, 
        FormContainer, 
        InputContainer} from '../styled-components';



const Login = props => {
    
    return(
        <PageContainer>
            <LoginContainer>
                <LoginHeader>
                    <h1> Log In</h1>
                </LoginHeader>
                <FormContainer>
                    <form>
                        <InputContainer>
                            <label>Username</label>
                            <input
                                type="text"
                                placeholder="username"
                                required="fill this out!"
                                name="username"
                            />
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="password"
                                required="fill this out!"
                                name="password"
                            />
                        </InputContainer>
                    </form>
                    <button className="Login-button">Log In</button>
                </FormContainer>
            </LoginContainer>
        </PageContainer>
    );
};

export default Login;