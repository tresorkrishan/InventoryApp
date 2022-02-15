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
// import { useHistory } from "react-router-dom";

// core components

function CustomerSignInForm() {
  //   const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  //   const [city, setCity] = useState("");

  //   let history = useHistory();

  //   const redirectToAllreadySignIn = () => {
  //     history.push("/admin/mobileSignIn");
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      ` The name you entered was: ${phone},The name you entered was: ${email}`
    );
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
                <hr />
              </CardHeader>
              <Form onSubmit={handleSubmit}>
                <CardBody
                  style={{
                    height: "86px",
                    display: "flex",
                    alignItems: "center ",
                    justifyContent: "center",
                    padding: "15px",
                  }}
                >
                  <Row className="form-group">
                    <Col className="pr-1" md="12"></Col>
                    <Col className="pr-1" lg="12">
                      <FormGroup>
                        <label>Contact No.</label>
                        <Input
                          placeholder="Please Enter a Valid Registered  Mobile Number"
                          type="number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h6>Or (Email)</h6>
                    </div>
                    <Col className="pr-1" lg="12">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          placeholder="Please Enter a Valid Registered Email"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Get OTP
                      </Button>
                    </div>
                  </Row>
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

export default CustomerSignInForm;
