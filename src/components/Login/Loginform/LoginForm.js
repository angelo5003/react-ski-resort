import React from 'react';

import forms from '../index';

import {Button} from '../../Button/ButtonMediumElements';
import {Form, FormH1, FormLabel, FormInput} from '../FormElements';
import {css} from 'styled-components/macro';


const LoginForm = ({showForm}) => {

    return (

        <Form> 
        <FormH1>Please login to your account</FormH1>
        
        <FormLabel htmlFor='email'>Email:</FormLabel>
        <FormInput type='email' name='email' id='email' placeholder='Enter your email' /> 

        <FormLabel htmlFor='password'>Password:</FormLabel>
        <FormInput type='password' name='password' id='password' placeholder='Enter your password' />

        <Button onClick={()=> showForm(forms.signUp)} medium='true' mediumround='true' css={`margin: 15px;`}>Sign Up</Button>         
        <Button medium='true' mediumround='true'>Login</Button>     
    </Form>

    );
};

export default LoginForm;
