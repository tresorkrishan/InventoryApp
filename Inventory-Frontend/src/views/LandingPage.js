import React from "react";
import { Button, Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  let history = useHistory();

  // ----------Will Redirect to User Register Form---------//
  const RedirectToRegister = () => {
    history.push("/admin/register");
  };
  const RedirectToUpdate = () => {
    history.push("/admin/updateuser");
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">
                        <b>Please Select an Option</b>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4"></Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                            onClick={RedirectToRegister}
                          >
                            Register New User
                          </Button>
                        </Col>
                        <Col md="4"></Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4"></Col>
                        <Col md="4">
                          <Button
                            block
                            color="warning  "
                            onClick={RedirectToUpdate}
                          >
                            Update User
                          </Button>
                        </Col>
                        <Col md="4"></Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LandingPage;
