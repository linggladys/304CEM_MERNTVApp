import React, {useState, useContext} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { MyContext } from '../../context';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword]=useState('');
    // take from the context
  const { setUser} = useContext(MyContext);
    // from the backend there
  function handleLogin(e){
    
      e.preventDefault();
      if(!email || !password){
        return alert('Please fill in the fields.')
      }
     
      axios.post('/login',{email,password})
      .then(({data})=> {
        setUser(data)
        localStorage.setItem('token',data.token)
        return alert ("Login success!");
      })
      .catch((err) => alert("Invalid email and/or password")) 
    }
  
    return (
      <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=>setEmail(e.target.value)}
        value={email} required/>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)}
        value={password} required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    )
}

export default Login;
