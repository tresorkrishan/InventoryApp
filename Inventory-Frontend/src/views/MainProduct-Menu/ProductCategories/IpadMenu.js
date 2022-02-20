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
import React, { useState, useEffect } from "react";

import { Card, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
// core components

import Api from "../../../Backend-Request/Api";
// import IphoneIcon from "../../../assets/img/IphoneIcon.png";
// import MacBook from "../../../assets/img/Macbook.png";
// // import Ipad from "../../assets/img/Ipad1.png";
// import Watch from "../../../assets/img/watch.png";
import Ipad1 from "../../../assets/img/Ipad1.png";
import Ipad2 from "../../../assets/img/Ipad2.png";
import Ipad5 from "../../../assets/img/Ipad5.png";
import Ipad4 from "../../../assets/img/Ipad4.png";
import IPADMini from "assets/img/IpadMini.png";
import BarLoader from "react-spinners/BarLoader";

function IpadMenu() {
  const [loading, setLoading] = useState(true);
  let productData = Api();

  // ------------IPADMini-----------//
  const filteredDataIadMini = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === "A20" && item.Category_4 === "iPad Mini"
      );
    })
    .map(function ({ Category_5, Remaining_Qty }) {
      return { Category_5, Remaining_Qty };
    });

  // ------------iPad 10.2-----------//
  const filteredDataIpad10 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === "A20" && item.Category_4 === "iPad 10.2"
      );
    })
    .map(function ({ Category_5, Remaining_Qty }) {
      return { Category_5, Remaining_Qty };
    });

  // ------------iPad 12.9-----------//
  const filteredDataIpad12 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === "A20" && item.Category_4 === "iPad 12.9"
      );
    })
    .map(function ({ Category_5, Remaining_Qty }) {
      return { Category_5, Remaining_Qty };
    });

  // ------------iPad 11.0-----------//
  const filteredDataIpad11 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === "A20" && item.Category_4 === "iPad 11.0"
      );
    })
    .map(function ({ Category_5, Remaining_Qty }) {
      return { Category_5, Remaining_Qty };
    });

  // ------------iPad 10.9-----------//
  const filteredDataIpad109 = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === "A20" && item.Category_4 === "iPad 10.9"
      );
    })
    .map(function ({ Category_5, Remaining_Qty }) {
      return { Category_5, Remaining_Qty };
    });

  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === "string") {
        return total + Number(obj[type]);
      }
      return total + obj[type];
    }, 0);
  }

  let totalAmountFilteredDataIpadMini = sumProperty(
    filteredDataIadMini,
    "Remaining_Qty"
  );

  let totalAmountFilteredDataIpad10 = sumProperty(
    filteredDataIpad10,
    "Remaining_Qty"
  );

  let totalAmountFilteredDataIpad12 = sumProperty(
    filteredDataIpad12,
    "Remaining_Qty"
  );

  let totalAmountFilteredDataIpad11 = sumProperty(
    filteredDataIpad11,
    "Remaining_Qty"
  );

  let totalAmountFilteredDataIpad109 = sumProperty(
    filteredDataIpad109,
    "Remaining_Qty"
  );

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 1000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

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
  } else {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-globe text-warning" /> */}
                        <img src={Ipad4} alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p
                          className="card-category"
                          style={{ color: "dodgerblue" }}
                        >
                          Ipad Mini
                        </p>
                        <CardTitle tag="p">
                          {totalAmountFilteredDataIpadMini}
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Get a New Iphone
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-money-coins text-success" /> */}
                        <img src={Ipad1} alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p
                          className="card-category"
                          style={{ color: "dodgerblue" }}
                        >
                          Ipad 10
                        </p>
                        <CardTitle tag="p">
                          {totalAmountFilteredDataIpad10}
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> Get a new MacBook
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-vector text-danger" /> */}
                        <img src={Ipad1} alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p
                          className="card-category"
                          style={{ color: "dodgerblue" }}
                        >
                          Ipad 12
                        </p>
                        <CardTitle tag="p">
                          {totalAmountFilteredDataIpad12}
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> Get a new Ipad
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-favourite-28 text-primary" /> */}
                        <img src={Ipad2} alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p
                          className="card-category"
                          style={{ color: "dodgerblue" }}
                        >
                          Ipad 11
                        </p>
                        <CardTitle tag="p">
                          {totalAmountFilteredDataIpad11}
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Get a New Watch
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-favourite-28 text-primary" /> */}
                        <img src={IPADMini} alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p
                          className="card-category"
                          style={{ color: "dodgerblue" }}
                        >
                          Ipad 10.9
                        </p>
                        <CardTitle tag="p">
                          {totalAmountFilteredDataIpad109}
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Get a New Watch
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default IpadMenu;
