import { Button, Checkbox, Form, Input } from "antd";
import { useState, useEffect, useRef, useContext } from "react";
import { FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const CompanyLogin = (props) => {
  let navigate = useNavigate(); 

  useEffect(() => {
    document.title = "Company-Login || Hire-Torch ";
  }, []);

  const emailRef = useRef();
  const errRef = useRef();

  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");
  const [err, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setError("");
  }, [emails, passwords]);

  const handleUserName = (e) => {
    console.log(e.target.value);
    setEmails(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswords(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/home/candidate/login", {
        email: emails,
        password: passwords,
      })
      .then((response) => {
        console.log(response.data.email)
        console.log(response.data.id);
        alert(response.data.message);
        
        if(emails==response.data.email  ){
          let path = "/student-profile-home"; 
          navigate(path);
        } 
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
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <Form.Item>
          <label className="Company-login-lable text-center offset-2">
            <h2>Company Login</h2>
          </label>
        </Form.Item>

        <Form.Item
          label="Email"
          id="email"
          name="username"
          ref={useRef}
          value={emails}
          onBlur={handleUserName}
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
          value={passwords}
          onBlur={handlePassword}
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
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            name="Company-login-btn"
            id="Company-login"
            htmlType="Submit"
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
export default CompanyLogin;