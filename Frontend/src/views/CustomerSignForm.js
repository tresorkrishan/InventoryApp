import React, { useState, useEffect } from "react";

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
import TextField from "@material-ui/core/TextField";
import BarLoader from "react-spinners/BarLoader";

// core components

function CustomerSignInForm() {
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [Mobile_No, setMobile_No] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for one second
      await new Promise((r) => setTimeout(r, 500));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      ` The name you entered was: ${phone},The name you entered was: ${email}`
    );
  };

  if (loading) {
    return (
      <div
        className="content"
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
      >
        Loading Content Please Wait....
        <div
          className="sweet-loading"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // marginTop: "100px",
          }}
        >
          <BarLoader color="blue" loading={loading} height={4} width={100} />
        </div>
      </div>
    );
  }
  // If page is not in loading state, display page.
  else {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4"></Col>
            {/* <h1>hello</h1> */}
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
                </CardHeader>
                <Form onSubmit={handleSubmit}>
                  <CardBody
                    style={{
                      height: "86px",
                      display: "flex",
                      alignItems: "center ",
                      justifyContent: "center",
                    }}
                  >
                    <Row className="form-group">
                      <Col className="pr-1" md="12"></Col>
                      <Col className="pr-1" lg="12">
                        <TextField
                          type="tel"
                          // error={isError}
                          value={Mobile_No}
                          style={{
                            fontSize: "15px",
                            marginTop: "-20px",
                            border: "10px gray",
                            width: "300px",
                          }}
                          label=" Phone Number*"
                          className="form-control"
                          onChange={(e) => {
                            const re = /^[0-9\b]+$/;
                            if (
                              e.target.value === "" ||
                              re.test(e.target.value)
                            ) {
                              setMobile_No(e.target.value);
                            }
                            if (
                              e.target.value.length > 10 ||
                              e.target.value.length < 10
                            ) {
                              setIsError(true);
                            } else {
                              setIsError(false);
                            }
                          }}
                        />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    {/* <hr /> */}
                    <Row style={{ marginTop: "-30px " }}>
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
}

export default CustomerSignInForm;
