import { Link } from "react-router-dom";
import { React, useState ,useEffect} from "react";

 function NotFound() {
  useEffect(() => {
    document.title = "Error 404"
  }, []);
  
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/home" action>Home</Link>  {'  | '} 
      <Link className="mr-5" to="/contact" action>Contact</Link>
    </div>
  );
}

export default NotFound;