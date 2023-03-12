import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useState , useEffect } from "react";

function Form() {
  const [post, setPost] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    candidateEmail: "",
    candidateAddhar: "",
    candidateUserName: "",
    candidatePassword: "",
    candidateCPassword: "",
  });
  useEffect(() => {
    document.title = "Sign-Up || Hire-Torch ";
  }, []);

  const handleInput = (event) => {
    console.log(event.target.name);
    setPost({ ...post, [event.target.name]: event.target.event });
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4000/home/candidate/save", { post })
      .then((response) => 
    //   console.log(response))
        {
          console.log(response.data.post);
          console.log(response.data.message);
          alert(response.data.message);
        })

      .catch((err) =>
        //   console.log(err))
        {
          console.log(err);
          console.log(err.response);
          alert(err.response.data.err.message);
        }
      );
  }

  return (
    <MDBContainer fluid className="bg-dark">
      <form onSubmit={handleSubmit}>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="my-4">
              <MDBRow className="g-0">
                <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="rounded-start"
                    fluid
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-4 text-uppercase fw-bold">
                      Student registration form
                    </h3>

                    <MDBInput
                      wrapperClass="mb-4"
                      name="First Name"
                      placeholder="First Name"
                      size="lg"
                      id="form1"
                      type="text"
                      onChange={handleInput}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      name="Middle Name"
                      placeholder="Middle Name"
                      size="lg"
                      id="form1"
                      type="text"
                      onChange={handleInput}
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      name="Last Name"
                      placeholder="Last Name"
                      size="lg"
                      id="form2"
                      type="text"
                      onChange={handleInput}
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      name="Birthday"
                      placeholder="Birthday"
                      size="lg"
                      id="form3"
                      type="text"
                      onChange={handleInput}
                    />

                    <div className="d-md-flex ustify-content-start align-items-center mb-4">
                      <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio1"
                        value="option1"
                        label="Female"
                        //   name="Female"
                        inline
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio2"
                        value="option2"
                        label="Male"
                        //   name="Male"
                        inline
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio3"
                        value="option3"
                        label="Other"
                        //   name="Other"
                        inline
                      />
                    </div>

                    <MDBInput
                      wrapperClass="mb-4"
                      name="Email"
                      placeholder="Email ID"
                      size="lg"
                      id="form4"
                      type="text"
                      onChange={handleInput}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      name="Addhaar Number"
                      placeholder="Addhaar Number"
                      size="lg"
                      id="form5"
                      type="number"
                      onChange={handleInput}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      name="User Name"
                      placeholder="User Name"
                      size="lg"
                      id="form6"
                      type="text"
                      onChange={handleInput}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      name="Password"
                      placeholder="Password"
                      size="lg"
                      id="form6"
                      type="password"
                      onChange={handleInput}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      name="Confirm Password"
                      placeholder="Confirm Password"
                      size="lg"
                      id="form6"
                      type="password"
                      onChange={handleInput}
                    />

                    <div className="d-flex justify-content-end pt-3">
                      <MDBBtn color="light" size="lg" href="/registration">
                        Reset all
                      </MDBBtn>
                      <MDBBtn
                        className="ms-2"
                        color="warning"
                        size="lg"
                        onSubmit={handleSubmit}
                        href='/student-Login'
                      >
                        Submit form
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}

export default Form;
