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
import React, { useEffect, useState } from "react";

import { Card, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
// core components

import Api from "../../Backend-Request/Api";
import Iphone1 from "../../assets/img/Iphone.png";
import MacBook from "../../assets/img/Macbook.png";
import Ipad from "../../assets/img/Ipad1.png";
import Watch from "../../assets/img/watch.png";
import { useHistory } from "react-router-dom";

import BarLoader from "react-spinners/BarLoader";

function ProductMenu() {
  const [loading, setLoading] = useState(true);
  let history = useHistory();
  let productData = Api();
  console.log("data is here", productData);

  //   };

  //Remaining Quantity for IPHONE-----------//
  let Iphone = productData
    .filter((item) => item.Item_Category_Code === "A15")
    .map(function ({ Category_3, Category_4, Remaining_Qty }) {
      return { Category_3, Category_4, Remaining_Qty };
    });

  //---------Remaining Quantity for Mac-----------//
  const filteredDataMac = productData
    .filter((item) => {
      return (
        item.Item_Category_Code === "A12" ||
        item.Item_Category_Code === "A13" ||
        item.Item_Category_Code === "A14" ||
        item.Item_Category_Code === "A17" ||
        item.Item_Category_Code === "A21" ||
        item.Item_Category_Code === "A42"
      );
    })
    .map(function ({ Category_3, Category_4, Remaining_Qty }) {
      return { Category_3, Category_4, Remaining_Qty };
    });

  //Remaining Quantity for IPAD-----------//
  const filteredDataIPad = productData
    .filter((item) => {
      return item.Item_Category_Code === "A20";
    })
    .map(function ({ Category_3, Category_4, Remaining_Qty }) {
      return { Category_3, Category_4, Remaining_Qty };
    });

  //Remaining Quantity for Watches-----------//
  const filteredDataWatches = productData
    .filter((item) => {
      return item.Item_Category_Code === "A44";
    })
    .map(function ({ Category_3, Category_4, Remaining_Qty }) {
      return { Category_3, Category_4, Remaining_Qty };
    });

  function sumProperty(arr, type) {
    return arr.reduce((total, obj) => {
      if (typeof obj[type] === "string") {
        return total + Number(obj[type]);
      }
      return total + obj[type];
    }, 0);
  }

  let totalAmountFilteredDataIphone = sumProperty(Iphone, "Remaining_Qty");
  let totalAmountFilteredDataMac = sumProperty(
    filteredDataMac,
    "Remaining_Qty"
  );
  let totalAmountFilteredDataIpad = sumProperty(
    filteredDataIPad,
    "Remaining_Qty"
  );
  let totalAmountFilteredDataWatches = sumProperty(
    filteredDataWatches,
    "Remaining_Qty"
  );

  const IpadOnClick = () => {
    setTimeout(() => {
      history.push("/admin/ipadmenu");
    }, 500);
  };

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
                        <img src={Iphone1} alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p
                          className="card-category"
                          style={{ color: "dodgerblue" }}
                        >
                          Iphone
                        </p>
                        <CardTitle tag="p">
                          {totalAmountFilteredDataIphone}
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
                        <img src={MacBook} alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p
                          className="card-category"
                          style={{ color: "dodgerblue" }}
                        >
                          MacBook
                        </p>
                        <CardTitle tag="p">
                          {totalAmountFilteredDataMac}
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
              <Card className="card-stats" onClick={IpadOnClick}>
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        {/* <i className="nc-icon nc-vector text-danger" /> */}
                        <img src={Ipad} alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p
                          className="card-category"
                          style={{ color: "dodgerblue" }}
                        >
                          Ipad
                        </p>
                        <CardTitle tag="p">
                          {totalAmountFilteredDataIpad}
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
                        <img src={Watch} alt="" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p
                          className="card-category"
                          style={{ color: "dodgerblue" }}
                        >
                          Watches
                        </p>
                        <CardTitle tag="p">
                          {totalAmountFilteredDataWatches}
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

export default ProductMenu;
