import { React, useState ,useEffect} from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";


const CompanyLogin = (props) => {
  const [cemail, setEmail] = useState('');
  const [cpassword, setPassword] = useState('');

  useEffect(() => {
    document.title = "Company-Login || Hire-Torch "
  }, []);

  const handleSubmit = (e) => {
    e.preventDeFault();
    console.log(cemail);
  }

  return (
     <div className="auth-form-container col-sm-4 offset-sm-3">
    <Form className="Company-login-form" onSubmit={handleSubmit}>
        <h2 className="text-center"> Company-Login </h2>
        <br/>
      <FormGroup>
        <label For="CompanyEmail" >Comapny Email / UserName</label>
        <br/>
        <input
          type="email"
          value={cemail}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="CompanyEmail"
          placeholder="abc@cdac.com"
        />
      </FormGroup>
      <FormGroup>
        <label For="CompanyPassword">Password</label><br/>
        <input
          type="password"
          value={cpassword}
          onChange={(e) => setPassword(e.target.value)}
          name="cpassword"
          id="CompanyPassword"
          placeholder="Enter Password Here"
        /><br/><a className="mt-3 pt-2" hreF='/forgot-password'>Forgot password?</a>
      </FormGroup>
      <FormGroup>
        <a
          name="login-button"
          id="login"
          class="btn btn-primary"
          hreF="#"
          role="button"
        >
          Login
        </a>
        <br/>
        <br/>
        <p className="mb-1">
          Don't have an account?
          <a hreF="/registration" onClick={() => props.onFormSwitch('login')}>
          {'  '}  Register here
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

export default CompanyLogin;
