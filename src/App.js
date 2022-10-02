
import Header from './Header';
import React, { useEffect, useState }  from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Login from './login';
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider"
import Checkout from './Checkout';




function App() {

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
  
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
  
      if (authUser) {
        // the user just logged in / the user was logged in
  
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
return (
  <div className="app">
    <Router>
    <Header/>
      <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Checkout' element={<Checkout/>}/>
     
        
        {/* </Route>  */}
        {/* <Route path='/checkout'/> */}

      </Routes>
    </Router>
  </div>
);
}
export default App;



