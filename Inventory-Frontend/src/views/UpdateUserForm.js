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
// import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
// import Footer from "components/Footer/Footer";
import BarLoader from "react-spinners/BarLoader";

function UpdateUserForm() {
  //   const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [Name, setName] = useState("");
  const [Mobile_No, setMobile_No] = useState("");
  const [E_Mail, setEmail] = useState("");
  //   const [City, setCity] = useState("");
  const [Gender, setGender] = useState("");
  // const [state, setState] = useState("");
  // const [Status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  //   const [isCityError, setIsCityError] = useState(false);
  const [mainCategory, setMainCategory] = useState("");
  const [User, setUser] = useState([]);
  const [allCategories, SetAllCategories] = useState([]);

  const [subCategory, setSubCategory] = useState("");
  //   const [categoryDescription, setCategoryDescription] = useState("");
  //   let history = useHistory();

  useEffect(() => {
    getDatabyPhoneNumber();
    getCategory();
  }, []);

  // ----------------Function to fetch State, Store Loctions and ERP ID--------//
  const getCategory = async () => {
    let response = await axios.post("http://localhost:3002/getCategory");
    let mydata = response.data.data;
    SetAllCategories(mydata);
    // console.log("dcata is us ", categoryData);
    return mydata;
  };

  const getDatabyPhoneNumber = async () => {
    let response = await axios.get("http://localhost:3002/customerData");
    let categoryData = response.data.data.value[0];
    console.log("mydata sii", categoryData);
    setUser(categoryData);
    setName(categoryData.Name);
    setMobile_No(categoryData.Mobile_No);
    setGender(categoryData.Gender);
    setEmail(categoryData.E_Mail);
    setSubCategory(categoryData.City);
    setMainCategory(categoryData.State_Code);

    console.log("dcata is us ", categoryData);
    return categoryData;
  };

  //   let unique = [...new Set(User.map((item) => item.MainCategory))];
  //   console.log("unique is ", unique);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     let formData = {
  //       Name: Name,
  //       Mobile_No: Mobile_No,
  //       City: City,
  //       Gender: Gender,
  //     };
  //     console.log("sss", formData);
  //     try {
  //       let res = await fetch("http://localhost:3002/prod", {
  //         method: "POST",
  //         body: JSON.stringify(formData),
  //         headers: { "Content-type": "application/json; charset=UTF-8" },
  //       });
  //       console.log("dssssss", res);
  //       let resJson = await res.json();
  //       console.log("hello");
  //       console.log(resJson);
  //       if (res.status === 200) {
  //         setSubmitting(true);
  //         setName("");
  //         setEmail("");
  //         setMobile_No("");
  //         setCity("");
  //         setTimeout(() => {
  //           setSubmitting(false);
  //           history.push("/admin/mobileSignIn");
  //         }, 500);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   // -------------Function for Name Validation----------//
  //   const onNameChange = (e) => {
  //     const re = /^[A-Za-z ]+$/;
  //     if (e.target.value === "" || re.test(e.target.value))
  //       setName(e.target.value);
  //     if (e.target.value.length > 20 || e.target.value.length < 3) {
  //       setIsNameError(true);
  //     } else {
  //       setIsNameError(false);
  //     }
  //   };

  //   //-----------Function to iterate the data------------------//
  const uniqueArrayByProperty = (data, iterator) => {
    return [...new Set(data.map(iterator))];
  };

  //   //   //--------Function to find Main Categories Types---------------//
  const uniqueAllCategories = useMemo(() => {
    return uniqueArrayByProperty(allCategories, (_) => _["MainCategory"]);
  }, [allCategories.length]);

  //   //   // --------Function to find SubCategories According to the state selected--------//
  const subCategoriesOptions = useMemo(() => {
    return allCategories.filter((_) => _["MainCategory"] == mainCategory);
  }, [mainCategory]);

  const uniqueAllSubcategories = useMemo(() => {
    return uniqueArrayByProperty(subCategoriesOptions, (_) => _["Subcategory"]);
  }, [subCategoriesOptions.length]);

  let arr = ["Male", "Female", "Other"];

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

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     alert(
  //       ` The name you entered was: ${phone},The name you entered was: ${email}`
  //     );
  //   };

  if (loading) {
    return (
      <div
        className="content"
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
      >
        Fetching Details Please Wait....
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
                Update Your Details
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
                <Form>
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
                            style={{
                              fontSize: "15px",
                              marginTop: "-20px",
                              border: "10px gray",
                            }}
                            label=" Phone Number*"
                            className="form-control"
                            disabled
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
                            //   onChange={onNameChange}
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
                              {Gender}
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
                          <label>Gender</label>
                          <select
                            name="mainCategory"
                            value={mainCategory}
                            className="form-control"
                            onChange={(e) => {
                              setMainCategory(e.target.value);
                            }}
                            required
                          >
                            <option value="" hidden>
                              Select Option
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
                          <label>Sub-Categories</label>
                          <select
                            name="mainCategory"
                            value={subCategory}
                            className="form-control"
                            onChange={(e) => {
                              setSubCategory(e.target.value);
                            }}
                            required
                          >
                            <option value="" hidden>
                              Select Option
                            </option>
                            {uniqueAllSubcategories.sort().map((item, i) => {
                              return (
                                <option key={item} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                          </select>
                        </FormGroup>
                      </Col>
                      {/* <Col className="pr-1" lg="12 ">
                          <FormGroup>
                            <label>Store Location</label>
                            <select
                              name="subCategory"
                              value={subCategory}
                              className="form-control"
                              onChange={(e) => {
                                setSubCategory(e.target.value);
                                setCategoryDescription("");
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
                        </Col> */}
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
}

export default UpdateUserForm;
