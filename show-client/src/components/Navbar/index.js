import axios from 'axios';
import React, { useContext } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MyContext } from '../../context';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTv} from '@fortawesome/free-solid-svg-icons';



function AppNavbar() {
  const {user,setUser} = useContext(MyContext);
  const history = useHistory();
  const handleLogout = () =>{
    axios.post('/logout')
    .then(res => {
      localStorage.removeItem("token");
      setUser(null);
      history.replace('/');
      alert ("Logout success!")
    });
  }
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand className="span-navbar">
          <FontAwesomeIcon icon={faTv}/>Binge Binge Binge</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {!user && (
            <Nav className="me-auto">
              <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
              {/* use router to link those pages */}
            </Nav>
            )}
            {user && (
              <Nav.Link onClick={handleLogout}>
                Logout
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default AppNavbar
