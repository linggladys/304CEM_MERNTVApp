import './App.css';
import AppNavbar from './components/Navbar';
import  { MyContext } from './context';
import Home from './pages/Home';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ErrorPage from './pages/Error404/404';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { useContext,useEffect } from 'react';
import axios from 'axios';



function App() {
  const{user,setUser} = useContext(MyContext);
  useEffect(() => {
   axios.post('/autologin')
   .then(({data})=>setUser(data)
  //  post request from the authorisation
  )}, [])
  // app runs once when it loads
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route exact path="/"> 
          <Home/>
          </Route>
          {!user && (
            <>
            <Route exact path="/login"> 
          <Login />
            </Route>
            <Route exact path="/signup"> 
          <SignUp />
            </Route>
         
            </>
          )}
    
          <Route>
            <ErrorPage /> 
          </Route>
      </Switch>
     </Router>
  );
}

export default App;
