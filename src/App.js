import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { render } from "react-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
// import NotFound from "./components/NotFound";
import CompanyLogin from "./components/CompanyLogin";
import About from "./components/About";
import Contact from "./components/Contact";
import InstituteLogin from "./components/InstituteLogin";
import AdminLogin from "./components/AdminLogin";
import ForgotPassword from "./components/ForgotPassword";
import Country from "./components/Country";
import AdminProfile from "./components/Adminprofile";
import StudentLogin from "./components/Pages/StudentLogin";


function App() {
  const [currentForm, setCurrentForm] = useState("Login");

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
        <hr />
        <Container>
          <Routes>
            <Route path="/admin-profile" element={<AdminProfile />}exact />
            <Route path="/home" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/registration" element={<Register />} exact/>
            <Route path="/country" element={<Country />} exact />
            <Route path="/student-login-ant" element={<StudentLogin/>} exact/>
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
