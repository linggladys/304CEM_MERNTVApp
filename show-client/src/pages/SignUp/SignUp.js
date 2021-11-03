import axios from '../../Axios';
import React, { useContext,useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { MyContext } from '../../context';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword]=useState('');
    // take from the context
    const {setUser} = useContext(MyContext);
    // from the backend there
    function handleSignup(e){
      
      e.preventDefault();
      if(!email || !password){
        return alert('Please fill in the fields.')
      }
      axios.post('/users',{email,password})
      .then(({data})=> {
        setUser(data)
        localStorage.setItem('token',data.token)
        return alert ('Sign In Success!');
      })
      .catch((err) => alert(err + " Someone has registered with this email!"));
    }


    return (
        <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
          onChange={(e)=>setEmail(e.target.value)}
          value={email} required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)}
          value={password} required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Me Up
        </Button>
      </Form>
    )
}

export default SignUp
