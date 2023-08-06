import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
 const { currentUser } = useSelector((state) => state.user);
 return (
   <div className="list-group">
     ...
     {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
     {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
     { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
   </div>
 );
}

export default Navigation;