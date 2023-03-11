import { Button, Checkbox, Form, Input } from "antd";
import { useState, useEffect, useRef, useContext ,createBrowserHistory} from "react";
import { FormLabel } from "react-bootstrap";
import { Navigate, useNavigate, useHistory} from "react-router-dom";
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

const Login = (props) => {

  useEffect(() => {
    document.title = "Student-Login || Hire-Torch ";
  }, []);

 
  // const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // const history = createBrowserHistory()
  // const Navigate = useNavigate()
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

  // function handleClick(){
  //   Navigate('student-profile-home')
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push("/dashboard");
    
    //  history.push('/student-profile-home')
    //  Navigate('/student-profile-home')
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
            <h2>Student Login</h2>
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
          onChange={handlePassword}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <a className="offset-4" hreF="/forgot-password">
          Forgot password?
        </a>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            // variant="primary"
            // type="submit"/
            type="primary"
            name="student-login-btn"
            id="student-login"
            htmlType="Submit"
            // href="/student-profile-home"
            onClick={handleSubmit}
            // onClick={handleClick}
          >
            Login
          </Button>
          <p className="mb-1">
            Don't have an account?
            <a hreF="/registration" onClick={() => props.onFormSwitch("login")}>
              <span> Register here</span>
            </a>
          </p>
          <a hreF="#" className="small text-muted">
            Privacy policy
          </a>{" "}
          <a hreF="#" className="small text-muted">
            Terms & Condition .
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;

















// import { React, useState, useEffect } from "react";
// import { Form, FormGroup } from "reactstrap";
// import axios from "./api/axios";


// const Login = (props) => {
  
//   useEffect(() => {
//     document.title = "Candidate-Login || Hire-Torch ";
//   }, []);


//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDeFault();
//     console.log("submitted form ----->>>>");
//     console.log(email, password);
//     axios
//       .post("http://localhost:4000/home/candidate/login", {
//         email: email,
//         password: password,
//       })
//       .then((response) => {
//         console.log(response.data);
//         console.log(response.data.id);
//         alert(response.data.message)
//       })
//       .catch((err) => {
//         console.log(err);
//         console.log(err.response);
//         setSuccess(err.data.id);
//         alert(err.response.data.err.message);
//       });
//   };



//   return (
//     <div className="auth-form-container col-sm-4 offset-sm-3">
//       <Form className="candidate-login-form" onSubmit={handleSubmit}>
//         <h2 className="text-center"> Candidate-Login </h2>
//         <br />
//         <FormGroup>
//           <label For="exampleEmail">Student Email</label>
//           <br />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             name="email"
//             id="exampleEmail"
//             placeholder="abc@gmail.com"
//           />
//         </FormGroup>
//         <FormGroup>
//           <label For="examplePassword">Password</label>
//           <br />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//             id="examplePassword"
//             placeholder="Enter Password Here"
//           />
//           <br />
//           <a className="mt-3 pt-2" hreF="/forgot-password">
//             Forgot password?
//           </a>
//         </FormGroup>
//         <FormGroup>
//           <a
//             name="login-button"
//             id="login"
//             class="btn btn-primary"
//             href="/about"
//             onClick={handleSubmit}
//             role="button"
//           >
//             Login
//           </a>
//           <br />
//           <br />
//           <p className="mb-1">
//             Don't have an account?
//             <a hreF="/registration" onClick={() => props.onFormSwitch("login")}>
//               <span> Register here</span>
//             </a>
//           </p>
//           <a hreF="#" className="small text-muted">
//             Privacy policy
//           </a>{" "}
//           <a hreF="#" className="small text-muted">
//             Terms & Condition .
//           </a>
//         </FormGroup>
//       </Form>
//     </div>
//   );
// };

// export default Login;
