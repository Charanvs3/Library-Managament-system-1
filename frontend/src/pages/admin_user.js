import React from 'react';
import { useState } from 'react';
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
  FormGroup,
  Input,
  Label,
  Button,
} from "../components/Styles";
import axios from "axios";

const AdminLogin = () => {
  const[email, setEmail]= useState(null);
  const [password, setPassword] = useState(null);

  const Login = async (e) => {
    e.preventDefault();

    try{
      const obj ={
        email: email,
        password: password,

      };
      const { data } = await axios.post('http://localhost:4000/api/auth',obj);

      alert(data.success);
      window.location = '/adminhome';
      } catch (error){
        console.log("Error", error);
        alert(error.response.data);
    }
  };
  return (
    <div>
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: '130px' }}>Admin Login</HeadTitle>
          {/* <form onSubmit={handleLogin}> */}

          <form style={{ marginTop: '50px', marginLeft: '550px' }}>
            <FormGroup>
              <Label>Username</Label>
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
              onClick={(e) => Login(e)}
              style={{ marginLeft: '110px', marginTop: '50px' }}
              type='submit'
            >
              Login
            </Button>
          </form>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default AdminLogin;
