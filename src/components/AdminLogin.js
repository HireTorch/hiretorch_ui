import { Button, Checkbox, Form, Input } from "antd";
import { useState, useEffect, useRef, useContext } from "react";
import { FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "../api/axios";
// import AuthContext from "../Context/AuthProvider";
// import "./StudentLogin.css";


// const LOGIN_URL = "/auth";
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AdminLogin = (props) => {

  useEffect(() => {
    document.title = "Admin-Login || Hire-Torch ";
  }, []);

  const navigate = useNavigate();
  // const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   emailRef.current.focus();
  // });

  useEffect(() => {
    setError("");
  }, [email, password]);

  const handleUserName = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // var email = document.getElementById('email').value;
    // var password = document.getElementById('password').value;
    // if(email=='shubham12@gmail.com' && 'password'=='1234')
    // {
    //   window.location.assign('StudentDetail.js');
    //   alert('Login Successful & Redirected');
    // }else{
    // alert('Invalid Information');
    // return;
    // }

    // navigate('/student-profile-home')
    console.log("submitted form ----->>>>");
    

    console.log(email, password);
    axios
      .post("http://localhost:4000/home/candidate/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.id);
        alert(response.data.message)
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        setSuccess(err.data.id);
        alert(err.response.data.err.message);
      });
  };

  return (
    <div className="auth-form-container col-sm-12 ">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Form.Item>
          <label className="Student-login-lable text-center offset-3">
            <h2>Admin Login</h2>
          </label>
        </Form.Item>

        <Form.Item
          label="Email"
          id="email"
          name="username"
          ref={useRef}
          value={email}
          onChange={handleUserName}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          id="password"
          value={password}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            }, 
          ]}
          onChange={handlePassword}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          >
          <Button
            type="primary"
            name="student-login-btn"
            id="student-login"
            htmlType="Submit"
            // href="/student-profile-home"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AdminLogin;











































// import { React, useState, useEffect, useHistory } from "react";
// import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
// import axios from "axios";
// import AdminProfile from "./Adminprofile";

// const AdminLogin = () => {
//   const [adminemail, setEmail] = useState("");
//   const [adminpassword, setPassword] = useState("");
//   const [err, setError] = useState("");



//   useEffect(() => {
//     document.title = "Admin || Hire-Torch";
//   }, []);


//   const handleApi = () => {
//     console.log(adminemail, adminpassword);
//     axios.post('http://localhost:4000/api/adminlogin',{
//       email : adminemail,
//       password : adminpassword, 
//     }).then(result => {
//       console.log(result.data)

//     }).catch(err =>
//       {
//         console.log(err)
//         alert('Server Error')
//       })
//   }

//   return (
//     <div className="auth-form-container col-sm-4 offset-sm-3">
//       <Form className="Company-login-form" >
//       {/* onClick={handleLogin} */}
//         <h2 className="text-center"> ADMIN </h2>
//         <br />
//         <FormGroup>
//           <label For="AdminEmail">UserID</label>
//           <br />
//           <input
//             type="email"
//             value={adminemail}
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//             id="adminEmail"
//             placeholder="Email"
//           />
//         </FormGroup>
//         <FormGroup>
//           <label For="AdminPassword">Password</label>
//           <br />
//           <input
//             type="password"
//             value={adminpassword}
//             onChange={(e) => setPassword(e.target.value)}
//             name="adminpassword"
//             id="adminPassword"
//             placeholder="password "
//           />
//           <br />
//         </FormGroup>
//         <FormGroup className="button-bt-3">
//           <a
//             name="login-button "
//             id="login"
//             class="btn btn-success"
//             href="/student-profile"
//             role="button"
//             onClick={handleApi}
//           >
//             Login
//           </a>
//         </FormGroup>
//       </Form>
//     </div>
//   );
// };

// export default AdminLogin;
