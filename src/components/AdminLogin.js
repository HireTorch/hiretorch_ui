import { React, useState, useEffect, useHistory } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import AdminProfile from "./Adminprofile";

const AdminLogin = () => {
  const [adminemail, setEmail] = useState("");
  const [adminpassword, setPassword] = useState("");
  const [err, setError] = useState("");



  useEffect(() => {
    document.title = "Admin || Hire-Torch";
  }, []);


  const handleApi = () => {
    console.log(adminemail, adminpassword);
    axios.post('http://localhost:4000/api/adminlogin',{
      email : adminemail,
      password : adminpassword, 
    }).then(result => {
      console.log(result.data)

    }).catch(err =>
      {
        console.log(err)
        alert('Server Error')
      })
  }

  return (
    <div className="auth-form-container col-sm-4 offset-sm-3">
      <Form className="Company-login-form" >
      {/* onClick={handleLogin} */}
        <h2 className="text-center"> ADMIN </h2>
        <br />
        <FormGroup>
          <label For="AdminEmail">UserID</label>
          <br />
          <input
            type="email"
            value={adminemail}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="adminEmail"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <label For="AdminPassword">Password</label>
          <br />
          <input
            type="password"
            value={adminpassword}
            onChange={(e) => setPassword(e.target.value)}
            name="adminpassword"
            id="adminPassword"
            placeholder="password "
          />
          <br />
        </FormGroup>
        <FormGroup className="button-bt-3">
          <a
            name="login-button "
            id="login"
            class="btn btn-success"
            // href="/admin-profile"
            role="button"
            onClick={handleApi}
          >
            Login
          </a>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AdminLogin;
