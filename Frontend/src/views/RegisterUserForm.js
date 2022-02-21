import React, { useState, useEffect, useMemo } from "react";
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
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
// import Footer from "components/Footer/Footer";
import BASE_URL from "/Users/apple/Desktop/Krishan Kumar/My-Project/Inventory-Frontend/src/assets/config/config.ts";

function RegisterUserForm() {
  const [submitting, setSubmitting] = useState(false);
  const [odataError, setOdataError] = useState("");
  const [Name, setName] = useState("");
  const [Mobile_No, setMobile_No] = useState("");
  const [E_Mail, setEmail] = useState("");
  // const [City, setCity] = useState("");
  const [Gender, setGender] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [mainCategory, setMainCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [subCategory, setSubCategory] = useState("");
  // const [Enroll_Date, setEnroll_Date] = useState("");

  let history = useHistory();

  useEffect(() => {
    getCategory();
  }, []);

  // ----------------Function to fetch State, Store Loctions and ERP ID--------//
  const getCategory = async () => {
    let response = await axios.post(`${BASE_URL}getCategory`);
    let categoryData = response.data.data;
    setAllCategories(categoryData);
    // console.log("dcata is us ", categoryData);
    return categoryData;
  };

  // let unique = [...new Set(allCategories.map((item) => item.MainCategory))];
  // console.log("unique is ", unique);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      Name: Name,
      Mobile_No: Mobile_No,
      City: subCategory,
      State_Code: mainCategory,
      Gender: Gender,
      E_Mail: E_Mail,
      Enroll_Date: new Date().toLocaleString(),
    };
    console.log("sss", formData);
    try {
      let res = await fetch(`${BASE_URL}postuserdata`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      console.log("dssssss", res);
      let resJson = await res.json();
      console.log(resJson);
      if (resJson["odata.error"]) {
        setOdataError(resJson["odata.error"].message.value);
        setSubmitting(true);
        setName("");
        setEmail("");
        setMobile_No("");
        setMainCategory("");
        setSubCategory("");
        setMainCategory("");
        setGender("");
      } else if (res.status === 200) {
        // setSubmitting(true);
        setName("");
        setEmail("");
        setMobile_No("");
        setMainCategory("");
        setSubCategory("");
        setMainCategory("");
        setGender("");
        setTimeout(() => {
          history.push("/admin/register");
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // -------------Function for Name Validation----------//
  const onNameChange = (e) => {
    const re = /^[A-Za-z ]+$/;
    if (e.target.value === "" || re.test(e.target.value))
      setName(e.target.value);
    if (e.target.value.length > 20 || e.target.value.length < 3) {
      setIsNameError(true);
    } else {
      setIsNameError(false);
    }
  };

  //-----------Function to iterate the data------------------//
  const uniqueArrayByProperty = (data, iterator) => {
    return [...new Set(data.map(iterator))];
  };

  //--------Function to find Main Categories Types---------------//
  const uniqueAllCategories = useMemo(() => {
    return uniqueArrayByProperty(allCategories, (_) => _["MainCategory"]);
  }, [allCategories.length]);

  // --------Function to find SubCategories According to the state selected--------//
  const subCategoriesOptions = useMemo(() => {
    return allCategories.filter((_) => _["MainCategory"] == mainCategory);
  }, [mainCategory]);

  let arr = ["Male", "Female", "Other"];

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4"></Col>
          <Col md="4">
            <p
              style={{
                fontSize: "24px",
                color: "dodgerblue",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Submit Details And Proceed
            </p>

            <Card>
              <CardHeader>
                <CardTitle
                  tag="h5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Customer Detail Entry
                </CardTitle>
              </CardHeader>
              {submitting && (
                <div style={{ color: "red", textAlign: "center" }}>
                  {odataError}
                </div>
              )}
              <Form onSubmit={handleSubmit}>
                <CardBody
                  style={{
                    height: "auto",
                    display: "flex",
                    alignItems: "center ",
                    justifyContent: "center",
                  }}
                >
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <TextField
                          type="tel"
                          error={isError}
                          value={Mobile_No}
                          required
                          style={{
                            fontSize: "15px",
                            marginTop: "-20px",
                            border: "10px gray",
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
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        {/* <label>Name</label> */}
                        <TextField
                          label="Please Enter a Valid Name"
                          type="text"
                          error={isNameError}
                          value={Name}
                          onChange={onNameChange}
                          className="form-control"
                          required
                          style={{ fontSize: "15px" }}
                        />
                      </FormGroup>
                    </Col>

                    <Col className="pr-1" md="12">
                      <FormGroup>
                        {/* <label>Email</label> */}
                        <TextField
                          label="Please Enter a valid Email Address"
                          style={{ fontSize: "15px" }}
                          error={isEmailError}
                          type="email"
                          value={E_Mail}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (
                              e.target.value.length > 50 ||
                              e.target.value.length < 5
                            ) {
                              setIsEmailError(true);
                            } else {
                              setIsEmailError(false);
                            }
                          }}
                          className="form-control"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Gender</label>
                        <select
                          name="mainCategory"
                          value={Gender}
                          className="form-control"
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                          required
                        >
                          <option value="" hidden>
                            Gender
                          </option>
                          {arr.sort().map((item, i) => {
                            return (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" lg="12 ">
                      <FormGroup>
                        <label>State</label>
                        <select
                          name="mainCategory"
                          value={mainCategory}
                          className="form-control"
                          onChange={(e) => {
                            setMainCategory(e.target.value);
                            setSubCategory("");
                          }}
                          required
                        >
                          <option value="" hidden>
                            Select State
                          </option>
                          {uniqueAllCategories.sort().map((item, i) => {
                            return (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" lg="12 ">
                      <FormGroup>
                        <label>Store Location</label>
                        <select
                          name="subCategory"
                          value={subCategory}
                          className="form-control"
                          onChange={(e) => {
                            setSubCategory(e.target.value);
                          }}
                          required
                        >
                          <option value="" hidden>
                            Select Store Location
                          </option>
                          {uniqueArrayByProperty(
                            subCategoriesOptions,
                            (_) => _["Subcategory"]
                          )
                            .sort()
                            .map((item, i) => {
                              return (
                                <option key={item} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                        </select>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Row>
                    <div className="update ml-auto mr-auto ">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        style={{ marginTop: "-10px" }}
                      >
                        Register User
                      </Button>
                    </div>
                  </Row>
                </CardFooter>
              </Form>
            </Card>
          </Col>
          <Col md="4"></Col>
        </Row>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default RegisterUserForm;
