import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import {
  useDispatch,
  useSelector,
  createStore,
  Provider,
  combineReducers,
} from "react-redux";
import { userLogin } from "../Router.post/userLogin";

function CompanyLogin1() {
  const dispatch = useDispatch();

  function onFinish(values) {
    dispatch(userLogin(values));
    console.log(values);
  }

  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-items-center">
        <Col sd={16} className="text-left p-5">
          {/* <Form layout="vertical" className="login-form p-5" onFinish={onFinish}> */}
          <Form layout="Horizontal" className="login-form p-5">
            <h1>Login</h1>
            <hr />
            <Form.Item
              label="Email"
              name="User Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Login</button>

            <hr />
            <Link to="/registration">Click Here to Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default CompanyLogin1;
