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
import Register from "./components/Register";
import Login from "./components/Login";

// import NotFound from "./components/NotFound";

import ForgotPassword from "./components/ForgotPassword";
import InstituteLogin from "./components/InstituteLogin";
import CompanyLogin from "./components/CompanyLogin";
import AdminLogin from "./components/AdminLogin";

import AdminProfile from "./components/Adminprofile";
import StudentDetail from "./components/Pages/Student Details/StudentDetail";
import StudentQualification from "./components/Pages/Student Details/Qualification/StudentQualification";
import StudentLogin from "./components/Pages/StudentLogin";
import CommonLogin from "./components/Pages/Student Details/CommonLogin";

function App() {

  const [currentForm, setCurrentForm] = useState("");
  const toggleForm = (forName) => setCurrentForm(forName);
  {
    currentForm === "login" ? (
      <Login onFormSwitch={toggleForm} />
    ) : (
      <Register onFormSwitch={toggleForm} />
    );
  }
  
  return (
    <Router>
      <div className="App">
        <Header Header_name="HireTorch_Header" />
        {/* <StudentLogin/> */}
        <hr />
        {/* <CommonLogin/> */}
        <Container>
          <Routes>
            <Route path="/admin-profile" element={<AdminProfile />} exact />
            <Route path="/home" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/registration" element={<Register />} exact />
            <Route path="/student-profile-home" element= {<StudentDetail/>} exact />
            <Route
              path="/student-qualification"
              element={<StudentQualification />}
              exact
            />
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
          <Route path="/*" element={<NotFound />} exact />
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
