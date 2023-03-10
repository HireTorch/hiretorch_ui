import { Button, Checkbox, Form, Input } from "antd";
import { useState, useEffect, useRef, useContext } from "react";
import { FormLabel } from "react-bootstrap";
import axios from '../api/axios'
import AuthContext from '../Context/AuthProvider'
import './StudentLogin.css'

// const LOGIN_URL = "/auth";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const StudentLogin = (props) => {
  useEffect(() => {
    document.title = "Student-Login || Hire-Torch ";
  }, []);

  const { setAuth } = useContext(AuthContext);
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

  const handleSubmit =  (e) => {
    e.preventDefault();

    console.log("submitted form ----->>>>");
    // try {
    //   const response = await axios.post(
    //     LOGIN_URL,
    //     JSON.stringify({ email, password }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
      // console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      // setAuth({ email, password, roles, accessToken });
      setEmail("");
      setPassword("");
      setSuccess(true);
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
     console.log(email, password);

    axios
      .post("http://localhost:3000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        alert("Successfully LoggedIn");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        // alert(err.response.data.err.message);
      });
  };

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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        
        
       <Form.Item>
        <label className="Student-login-lable text-center offset-3"><h2>Student Login</h2></label>
       </Form.Item>

        <Form.Item
          label="Email"
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
            type="primary"
            name="student-login-btn"
            id="student-login"
            htmlType="Submit"
            href="/student-profile"
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
