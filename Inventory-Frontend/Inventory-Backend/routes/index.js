var express = require("express");
var router = express.Router();
var cors = require("cors");
var bodyParser = require("body-parser");
const CSVToJSON = require("csvtojson");

const {
  fetchData,
  postData,
  customerData,
} = require("../controllers/api.controller");

router.use(cors());
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router.use(bodyParser.json());

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/   ", async function (req, res, next) {
  try {
    let productCount = [];
    let prudctAval = false;
    let product = [];
    let skip = 0;
    let apiCallCount = 1;
    while (!prudctAval) {
      const data = await fetchData({
        path: "Tresor Systems Pvt Ltd",
        oDataQuery: `$format=json&$skip=${skip}`,
      });
      if (data.value.length === 0) {
        console.log("i am true");
        skip = 0;
        prudctAval = true;
      }
      skip = skip + 1000;
      product.push(...data.value);

      console.log("product", skip);

      console.log("product", product);
    }
    res.json(product);
  } catch (error) {
    res.json(error.message);
  }
});

router.post("/prod", async function (req, res, next) {
  try {
    let reqBody = req.body;
    console.log("data", req.body);

    const data = await postData({
      path: "Tresor Systems Pvt Ltd",
      oDataPath: "/iPadCustomerCapturingModification",
      oDataQuery: `$format=json`,
      reqBody,
    });
    console.log("data", data);
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
});

router.get("/customerData", async function (req, res, next) {
  try {
    // let reqBody = req.body;
    // console.log("data", req.body);
    const data = await customerData({
      path: "Tresor Systems Pvt Ltd",
      oDataQuery: `$format=json&$filter=Mobile_No eq '123454345'`,
    });
    res.json({
      data,
    });
  } catch (error) {
    res.json(error.message);
  }
});

router.post("/getCategory", (req, res) => {
  CSVToJSON()
    .fromFile(
      "/Users/apple/Desktop/Krishan Kumar/My-Project/Inventory-Backend/routes/Updated_Data.csv"
    )
    .then((data) => {
      res.json({
        data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
