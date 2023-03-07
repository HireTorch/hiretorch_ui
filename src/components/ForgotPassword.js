import {React , useEffect}  from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ForgotPassword = () =>
{
  useEffect(() => {
    document.title = "Forgot-password || Hire-Torch "
    
  }, []);

    return(
        <div className="auth-form-container col-4">
        <Form className="Company-login-form">
          <h2 className="text-center"> ADMIN </h2>
          <br/>
        <FormGroup>
          <label For="AdminEmail" >User_ID / Email </label>
          <br/>
          <input
            type="email"
            // value={adminemail}
            // onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="adminEmail"
            placeholder="abc@{cdac/gmail/info}.com"
          />
        </FormGroup>
        
        <FormGroup className="text-cente mr-3 ">
          <a
            name="login-button"
            id="login"
            class="btn btn-success"
            hreF="#"
            role="button"
          >
          New Password link
          </a> 
        </FormGroup>
      </Form>
   </div>

    )
};

export default ForgotPassword;
