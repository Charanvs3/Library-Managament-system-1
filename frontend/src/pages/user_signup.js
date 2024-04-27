import React from 'react';
import {} from '../components/Styles';
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
  FormGroup,
  Input,
  Label,
  Button,
  HeadDescription,
} from '../components/Styles';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const register = async (e) => {
    e.preventDefault();

    try {
      const obj = {
        email: email,
        name: username,
        password: password,
      };

      const { data } = await axios.post('http://localhost:4000/api/users', obj);

      alert(data.success);
      window.location = '/userlogin';
    } catch (error) {
      console.log(error, 'error');
      alert(error.response.data);
    }
  };

  return (
    <div>
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: '130px' }}>User Signup</HeadTitle>
          {/* <form onSubmit={handleSignup}> */}

          <form style={{ marginTop: '50px', marginLeft: '550px' }}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                type='text'
                placeholder='Enter your username'
                id='name'
                name='name'
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                placeholder='Enter your username'
                id='name'
                name='name'
              />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Enter your password'
                id='pw'
                name='pw'
              />
            </FormGroup>

            <Button
              onClick={(e) => register(e)}
              style={{ marginLeft: '110px', marginTop: '50px' }}
              type='submit'
            >
              Signup
            </Button>
            <HeadDescription style={{ marginLeft: '20px' }}>
              Already an User? <a href='/userlogin'>Login!</a>{' '}
            </HeadDescription>
          </form>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Signup;