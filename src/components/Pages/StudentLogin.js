import { IconSquareF9 } from "@tabler/icons-react";
import { Button, Checkbox, Form, Input } from "antd";
import { useState, useEffect, useRef, useContext } from "react";
import { FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import AuthContext from "../Context/AuthProvider";
import "./StudentLogin.css";
// import { toast } from "react-toastify";
import React from "react";

  // const LOGIN_URL = "/auth";

// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

const StudentLogin = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };


  useEffect(() => {
    document.title = "Student-Login || Hire-Torch ";
  }, []);


  // const { setAuth } = useContext(AuthContext);
  // const emailRef = useRef();
  // const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   emailRef.current.focus();
  // });

  // useEffect(() => {
  //   setError("");
  // }, [email, password]);

  // const handleUserName = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/home/candidate/login", data);
    //   if(res.data.msg === "Admin login successfully"){
    //   navigate("/admin-profile");
    // }
    if(res.data.msg === "undefine"){
        navigate("/student-profile-home")
      }
      console.log(res.data.msg, "user Login");
      alert(res.data.msg, {
        position: "top-center"
      });
      
      localStorage.setItem("email", JSON.stringify(data.email));
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert.error(err.response.data.msg, {});
    }

  };


  //  loginModel.email = e.email;
  //  loginModel.password = e.password;
  //  console.log("user => " +JSON.stringify(user.data));
  //   axios.post('http://localhost:4000/home/candidate/login',loginModel)
  //   .then((response)=>{
  //     const user =res;
  //     console.log(JSON.stringify(user.data))
  //     localStorage.setItem("user",JSON.stringify(user.data));
  //     console.log(user.data.status);
  //     if(user.data.status = true) navigate('/student-profile-home')
  //     else if(user.data.status = "")
  //   })

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
                                              //  console.log("submitted form ----->>>>");
    // try {
    //   const response = axios.post(
    //     baseURL,
    //     JSON.stringify({ email, password }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(JSON.stringify(response?.data));
    //   console.log(JSON.stringify(response));

    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ email, password, roles, accessToken });
    //   setEmail("");
    //   setPassword("");
    //   setSuccess(true);
    // } catch (err) {
    //   if (!err?.response) {
    //     setError("No Server Response");
    //   } else if (err.response?.status == 400) {
    //     setError("Missing Username or Password");
    //   } else if (err.response?.status == 401) {
    //     setError("Unauthorized");
    //   } else {
    //     setError("Login Failed");
    //   }
    //   errRef.current.focus();
    // }




    // console.log(email, password);
    // axios
    //   .post("http://localhost:4000/home/candidate/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     console.log(response.data.id);
    //     alert(response.data.message)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     console.log(err.response);
    //     setSuccess(err.data.id);
    //     alert(err.response.data.err.message);
    //   });


  return (
    <div className="auth-form-container col-sm-5 offset-sm-7">
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
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Form.Item>
          <label className="Student-login-lable text-center offset-3">
            <h2>Student Login</h2>
          </label>
        </Form.Item>

        <Form.Item
          label="Email"
          type="email"
          id="email"
          name="username"
          value={data.email}
          onChange={handleChange}
          // ref={useRef}
          // value={email}
          // onChange={handleUserName}
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
          value={data.password}
                    onChange={handleChange}
          // value={password}
          // onChange={handlePassword}
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
            type="primary"
            name="student-login-btn"
            id="student-login"
            // type="Submit"
            // href="/student-profile"
            onClick={handleSubmit}
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
export default StudentLogin;
