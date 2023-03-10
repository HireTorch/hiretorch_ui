import { React, useState ,useEffect } from "react";
import { Form, FormGroup} from "reactstrap";


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    useEffect(() => {
      document.title = "Candidate-Login || Hire-Torch "
    }, []);

  const handleSubmit = (e) => {
    e.preventDeFault();
    console.log(email);
  }

  return (
     <div className="auth-form-container col-sm-4 offset-sm-3">
    <Form className="candidate-login-form" onSubmit={handleSubmit}>
        <h2 className="text-center"> Candidate-Login </h2>
        <br/>
      <FormGroup>
        <label For="exampleEmail" >Student Email</label>
        <br/>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="exampleEmail"
          placeholder="abc@gmail.com"
        />
      </FormGroup>
      <FormGroup>
        <label For="examplePassword">Password</label><br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="examplePassword"
          placeholder="Enter Password Here"
        /><br/><a className="mt-3 pt-2" hreF='/forgot-password'>Forgot password?</a>
      </FormGroup>
      <FormGroup>
        <a
          name="login-button"
          id="login"
          class="btn btn-primary"
          href="/about"
          role="button"
        >
          Login
        </a>
        <br/>
        <br/>
        <p className="mb-1">
          Don't have an account?
          <a hreF="/registration" onClick={() => props.onFormSwitch('login')}>
           <span> {' '}Register here</span> 
          </a>
        </p>
        <a hreF="#" className="small text-muted">
           Privacy policy
        </a> {' '}
        <a hreF="#" className="small text-muted">
         Terms & Condition .
        </a>
      </FormGroup>
    </Form>
 </div>
  );
};

export default Login;
