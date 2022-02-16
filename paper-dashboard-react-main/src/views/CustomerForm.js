/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState } from "react";
// react plugin used to create charts
// import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Form,
  Col,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

// core components

function CustomerForm() {
  const [submitting, setSubmitting] = useState(false);
  const [Name, setName] = useState("");
  const [Mobile_No, setMobile_No] = useState("");
  const [E_Mail, setEmail] = useState("");
  const [City, setCity] = useState("");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [Status, setStatus] = useState("");
  // let reqBody = {};
  let history = useHistory();

  const selectCountry = () => {
    setCountry({ country: "India" });
  };

  const selectRegion = (val) => {
    setState(val);
  };

  const redirectToAllreadySignIn = () => {
    history.push("/admin/mobileSignIn");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert("A form was submitted: " + name + email + phone + city);
    let formData = {
      Name: Name,
      Mobile_No: Mobile_No,
      E_Mail: E_Mail,
      State_Code: state,
      // Status: Status,
      City: City,
    };
    console.log("sss", formData);
    try {
      let res = await fetch("http://localhost:3002/prod", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      console.log("dssssss", res);
      let resJson = await res.json();
      console.log("hello");
      console.log(resJson);
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobile_No("");
        setCity("");
        history.push("/admin/dashboard");
      }

      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4"></Col>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle
                  tag="h5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  Customer Detail Entry
                </CardTitle>
                {/* <hr /> */}
              </CardHeader>
              {/* {submitting && (
                <div style={{ color: "red", textAlign: "center" }}>
                  submitting Form
                </div>
              )} */}
              <Form onSubmit={handleSubmit}>
                <CardBody
                  style={{
                    height: "400px",
                    display: "flex",
                    alignItems: "center ",
                    justifyContent: "center",
                    padding: "15px",
                  }}
                >
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          placeholder="Please Enter a Valid Name"
                          type="text"
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input
                          placeholder="Please Enter a valid Phone Number"
                          type="number"
                          value={Mobile_No}
                          onChange={(e) => setMobile_No(e.target.value)}
                          className="form-control"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          placeholder="Please Enter a valid Email Address"
                          type="text"
                          value={E_Mail}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          placeholder="Enter a Valid City Name"
                          type="text"
                          value={City}
                          onChange={(e) => setCity(e.target.value)}
                          className="form-control"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Counntry</label>
                        <CountryDropdown
                          value={country}
                          onChange={selectCountry}
                          className="form-control"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>State</label>
                        <RegionDropdown
                          country={country}
                          value={state}
                          onChange={(val) => selectRegion(val)}
                          className="form-control"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  {/* <hr /> */}
                  <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Complete Profile
                      </Button>
                    </div>
                  </Row>
                  <Row style={{ display: "flex", flexDirection: "column " }}>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round "
                          color="secondry"
                          type="submit"
                        >
                          Update Profile
                        </Button>
                      </div>
                    </Row>
                  </Row>
                  <div
                    className="stats"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Already Registered
                    <button
                      style={{
                        background: "none !important",
                        border: "none",
                        color: "dodgerblue",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={redirectToAllreadySignIn}
                    >
                      SignIn
                    </button>
                  </div>
                </CardFooter>
              </Form>
            </Card>
          </Col>
          <Col md="4"></Col>
        </Row>
      </div>
    </>
  );
}

export default CustomerForm;
