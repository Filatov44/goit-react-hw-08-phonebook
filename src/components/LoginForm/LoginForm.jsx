import React, { useState } from 'react';

import {
  StyledFormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
    StyledButton,
  StyleText
} from './LoginForm.styled';

export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const resetForm = () => {
     setEmail('');
     setPassword('');
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ email, password })
        resetForm();
    };

     const handleChange = e => {
       const { name, value } = e.target;

       switch (name) {
         case 'name':
           setEmail(value);
           break;
         case 'number':
           setPassword(value);
           break;
         default:
           return;
       }
    };
    
    return (
      <StyledFormContainer>
        <StyleText>Please enter login and password</StyleText>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="email"
            value={email}
            id="email"
            name="email"
            required
          />
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="password"
            value={password}
            id="password"
            name="password"
            required
          />
          <StyledButton type="submit"> Log In</StyledButton>
        </StyledForm>
      </StyledFormContainer>
    );
}
