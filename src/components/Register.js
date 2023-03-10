import { React ,useEffect } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Register = () => {
    useEffect(() => {
      document.title = "Sign-Up || Hire-Torch "
    }, []);
  return (
    <div className="Registration-Form"> 
      <Form className="auth-form-container col-sm-6 offset-sm-3">
        <div className="text-center">
        <h1> Registration Form </h1> 
        </div>
        <br/>
        <FormGroup>
          {/* <Label for="exampleEmail">First Name </Label> */}
          <Input
            type="text"
            name="first-name"
            id="F-name"
            placeholder="First Name"
          />
          <br />
          <Input
            type="text"
            name="middle-name"
            id="M-name"
            placeholder="Middle Name"
          />
          <br />
          <Input
            type="text"
            name="last-name"
            id="L-name"
            placeholder="Last Name"
          />
          <br />
          <Input type="email" name="email" id="R-Email" placeholder="Email" />
          <FormGroup>
          <br />
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
          </FormGroup>
          <label className="text-center">
            <i>
              <b>Gender</b>
            </i>
          </label>
          <Label check className="text-center">
            <Input type="radio" name="male" id="Male" /> Male
          </Label>
          <Label check className="text-center">
            <Input type="radio" name="female" id="Female" /> Female
          </Label>
          <Label check className="text-center">
            <Input type="radio" name="other" id="Other" /> Other
          </Label>

          {/* <Label for="examplePassword">Password</Label> */}
          <br />
          <Input
            type="username"
            name="uname"
            id="R-UserName"
            placeholder="Username"
          />
          <br />
          <Input
            type="password"
            name="rpassword"
            id="R-Password"
            placeholder="Password"
          />
          <br />
          <Input
            type="password"
            name="crpassword"
            id="CR-Password"
            placeholder="Confirm Password"
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Accept Terms & Conditions.
          </Label>
        </FormGroup>
        <br/>
        <FormGroup>
          <a
            name="Submit-button"
            id="Submit-button"
            class="btn btn-success"
            hreF="/home"
            role="button"
          >
            Submit
          </a>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Register;
