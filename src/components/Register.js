import { React, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
// import { NavLink } from "react-router-dom";
// import axios from "axios";

const Register = (e) => {
 
  const [formValue,setFormValue] = useState({
    firstName:'',
    middleName:'',
    lastName:'',
    dob:'',
    gender:'',
    candidateEmail:'',
    candidateAddhar:'',
    candidateUserName:'',
    candidatePassword:'',
    candidateCPassword:'',
  });


  // const[message,setMessage]= useState('')

  const handleInput = (e) => {
    const {name,value}=e.target;
    setFormValue({...formValue,[name]:value})
     
  };

  useEffect(() => {
    document.title = "Sign-Up || Hire-Torch ";
  }, []);

  const handleSubmit= async (e) => {
    e.preventDefault();
    const allInputvalue = {
      firstName: formValue.firstName,
      middleName: formValue.middleName,
      lastName: formValue.lastName,
      dob: formValue.dob,
      gender: formValue.gender,
      candidateEmail: formValue.candidateEmail,
      candidateAddhar: formValue.candidateAddhar,
      candidateUserName: formValue.candidateUserName,
      candidatePassword: formValue.candidatePassword,
      candidateCPassword: formValue.candidateCPassword,
    };
     console.log(allInputvalue);
  }
 

  return (
    <div className="RegistrationForm">
      <Form className="auth-form-container col-sm-6 offset-sm-3" onSubmit={handleSubmit}>
        <div className="text-center">
          <h1> Registration Form </h1>
        </div>
        <br />
        <FormGroup>
          <Input
            type="text"
            name="first-name"
            id="fname"
            // autocomplete="off" 
            value={formValue.firstName}
            onChange={handleInput}
            placeholder="First Name"
          />
          <br />
          <Input
            type="text"
            name="middle-name"
            id="M-name"
            autocomplete="off" 
            value={formValue.middleName}
            onChange={handleInput}
            placeholder="Middle Name"
          />
          <br />
          <Input
            type="text"
            name="last-name"
            id="L-name"
            autocomplete="off" 
            value={formValue.lastName}
            onChange={handleInput}
            placeholder="Last Name"
          />
          <FormGroup>
            <br />
            <Input
              type="date"
              name="date"
              id="exampleDate"
              autocomplete="off" 
              value={formValue.dob}
              onChange={handleInput}
              placeholder="Date Of Birth"
            />
          </FormGroup>
          <Label className="text-center">
            <i>
              <b>Gender</b>
            </i>
          </Label>
          <Label check className="text-center">
            <Input type="radio" name="radio" id="Male" 
            autocomplete="off" 
            value={formValue.gender}
            onChange={handleInput} /> Male
          </Label>
          <Label check className="text-center">
            <Input type="radio" name="radio" id="Female" 
            autocomplete="off" 
            value={formValue.gender}
            onChange={handleInput} /> Female
          </Label>
          <Label check className="text-center">
            <Input type="radio" name="radio" id="Other" 
            autocomplete="off" 
            value={formValue.gender}
            onChange={handleInput}  /> Other
          </Label>
          <br />
          <br />
          <Input type="email" name="email" id="R-Email" 
          autocomplete="off" 
          value={formValue.candidateEmail}
          onChange={handleInput}
          placeholder="Email" />
          <br />
          <Input
            type="number"
            name="Addhaar Number"
            id="R-Addhaar"
            autocomplete="off" 
            value={formValue.candidateAddhar}
            onChange={handleInput}
            placeholder="Addhaar Number"
          />
          <br />
          <Input
            type="text"
            name="uname"
            id="R-UserName"
            autocomplete="off" 
            value={formValue.candidateUserName}
            onChange={handleInput}
            placeholder="Username"
          />
          <br />
          <Input
            type="password"
            name="rpassword"
            id="R-Password"
            autocomplete="off" 
            value={formValue.candidatePassword}
            onChange={handleInput}
            placeholder="Password"
          />
          <br />
          <Input
            type="password"
            name="crpassword"
            id="CR-Password"
            autocomplete="off" 
            value={formValue.candidateCPassword}
            onChange={handleInput}
            placeholder="Confirm Password"
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Accept Terms & Conditions.
          </Label>
        </FormGroup>
        <br />
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
