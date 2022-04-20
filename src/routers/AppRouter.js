import React, {useState, useEffect} from "react";
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged} from "@firebase/auth"
import { loginEmailPassword } from "../actions/actionLogin"
import {Principal} from "../components/Principal"
import {FormAgregar} from "../components/FormAgregar"
import { producto} from "../components/Producto";



export const AppRouters = () => {

  const dispatch = useDispatch();

const [checking, setChecking]= useState(true);
const [isLoggedIn, setIsLoggedIn]= useState(false);

useEffect(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
          dispatch(loginEmailPassword(user.uid, user.displayName))
          setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
  })
}, [dispatch, setChecking, setIsLoggedIn])


if (checking){
  return(
    <h1>Espere....</h1>
  )
}
  return (
    <Router>
      <Switch>
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/formAgregar" component={FormAgregar}/>
        <Route exact path="/producto" component={producto}/>
        <Route path="/" component={Principal}/>
      </Switch> 
    </Router>
  );
};
