import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import { Col, Container, Row } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Pages/Form";

// import NotFound from "./components/NotFound";

import Login from "./components/Login";
import InstituteLogin from "./components/InstituteLogin";
import CompanyLogin from "./components/CompanyLogin";
import AdminLogin from "./components/AdminLogin";
import ForgotPassword from "./components/ForgotPassword";

import StudentDetail from "./components/Pages/Student Details/StudentDetail";
import StudentAddress from "./components/Pages/Student Details/StudentAddress";
import StudentQualification from "./components/Pages/Student Details/Qualification/StudentQualification";
import StudentInfo from "./components/Pages/Student Details/StudentInfo";

import AdminProfile from "./components/Adminprofile";

function App() {
  const [currentForm, setCurrentForm] = useState("");
  const toggleForm = (forName) => setCurrentForm(forName);
  //{
  currentForm === "login" ? (
    <Login onFormSwitch={toggleForm} />
  ) : (
    <Form onFormSwitch={toggleForm} />
  );
  //}

  return (
    <Router>
      <div className="App">
        <Header Header_name="HireTorch_Header" />
        <hr />
        <Container>
          <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/registration" element={<Form />} exact />

            <Route
              path="/student-profile-home"
              element={<StudentDetail />}
              exact
            />
            <Route path="/Student-address" element={<StudentAddress />} exact />
            <Route
              path="/Student-Information"
              element={<StudentInfo />}
              exact
            />
            <Route
              path="/student-qualification"
              element={<StudentQualification />}
              exact
            />

            <Route path="/admin-profile" element={<AdminProfile />} exact />
          </Routes>
          <Row>
            <Col md={7}>
              <Routes>
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </Col>
            <Col md={5}>
              <Routes>
                <Route path="/student-Login" element={<Login />} />
                <Route path="/company-Login" element={<CompanyLogin />} exact />
                <Route path="/institute-Login" element={<InstituteLogin />} />
                <Route path="/admin-Login" element={<AdminLogin />} />
              </Routes>
            </Col>
          </Row>
          {/* <Footer /> */}
          {/* <Routes>
          <Route path="*" element={<NotFound />} exact />
        </Routes> */}
        </Container>
        <Footer />
      </div>
    </Router>
  );
}
// render dont know
render(<App />, document.getElementById("root"));
export default App;
