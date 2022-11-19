import React, { useState } from 'react';
import {
  StyledFormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyleText,
} from './SignUp.styled';

export default function SignUpForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email, password, name });
    resetForm();
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        return;
    }
    };
    
    return (
      <StyledFormContainer>
        <StyleText>Please register</StyleText>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            onChange={handleChange}
            type="text"
            value={name}
            id="name"
            name="name"
            required
          />
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
          <StyledButton type="submit"> Sign Up</StyledButton>
        </StyledForm>
      </StyledFormContainer>
    );
}
