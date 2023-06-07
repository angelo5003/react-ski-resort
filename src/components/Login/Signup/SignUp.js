import React, {useState} from 'react';

import forms from '../index';
import {Button} from '../../Button/ButtonMediumElements';
import {Form, FormH1, FormLabel, FormInput} from '../FormElements';
import {css} from 'styled-components/macro';


const SignUp = ({showForm}) => {



        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const userName = formData.get('username');
            console.log(userName)
        }
    

    return (
       <Form onSubmit={handleSubmit}>
           <FormH1>Sign up today!</FormH1>

           <FormLabel htmlFor='username'>Username:</FormLabel>
           <FormInput type='text' name='username' id='username' placeholder='Enter your Username'/>

           <FormLabel htmlFor='email'>Email:</FormLabel>
           <FormInput type='email' name='email' id='email' placeholder='Enter your email'/>

           <FormLabel htmlFor='password'>Password:</FormLabel>
           <FormInput type='password' name='password' id='password' placeholder='Enter your Password'/>

           <Button type='submit' css={`margin: 15px;`} medium='true' mediumround='true'>Sign Up</Button>
           <Button onClick={() => showForm(forms.login)} medium='true' mediumround='true'>Login</Button>
       </Form>
    );
};

export default SignUp;
