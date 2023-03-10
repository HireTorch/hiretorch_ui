import { React, useState ,useEffect} from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";


const InstituteLogin = (props) => {
  const [iemail, setEmail] = useState('');
  const [ipassword, setPassword] = useState('');

  useEffect(() => {
    document.title = "Institute-Login || Hire-Torch "
  }, []);

  const handleSubmit = (e) => {
    e.preventDeFault();
    console.log(iemail);
  }

  return (
     <div className="auth-form-container col-sm-4 offset-sm-3">
    <Form className="Institute-login-form" onSubmit={handleSubmit}>
        <h2 className="text-center"> Institute-Login </h2>
        <br/>
      <FormGroup>
        <label For="InstituteEmail" >UID / Email</label>
        <br/>
        <input
          type="email"
          value={iemail}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="InstituteEmail"
          placeholder="abc@mit.edu.com"
        />
      </FormGroup>
      <FormGroup>
        <label For="InstitutePassword">Password</label><br/>
        <input
          type="password"
          value={ipassword}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="InstitutePassword"
          placeholder="Enter Password Here"
        /><br/><a className="mt-3 pt-2" hreF='/forgot-password'>Forgot password?</a>
      </FormGroup>
      <FormGroup>
        <a
          name="login-button"
          id="login"
          class="btn btn-primary"
          hreF="/buttonss"
          role="button"
        >
          Login
        </a>
        <br/>
        <br/>
        <p className="mb-1">
          Don't have an account?
          <a hreF="/registration" onClick={() => props.onFormSwitch('login')}>
           <span> {'  '} Register here </span>
          </a>
        </p>
        <a hreF="#" className="small text-muted">
          Terms of use.
        </a>
        <a hreF="#" className="small text-muted">
          Privacy policy
        </a>
      </FormGroup>
    </Form>
 </div>
  );
};

export default InstituteLogin;
