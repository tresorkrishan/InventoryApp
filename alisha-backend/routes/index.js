var express = require("express");
var router = express.Router();
var cors = require("cors");
var bodyParser = require("body-parser");

const { fetchData, postData } = require("../controllers/api.controller");

// router.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
/* GET home page. */
router.use(cors());

// parse application/x-www-form-urlencoded
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// parse application/json
router.use(bodyParser.json());

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/data", async function (req, res, next) {
  try {
    let productCount = [];
    let prudctAval = false;
    let product = [];
    let skip = 0;

    let apiCallCount = 1;
    while (!prudctAval) {
      // console.log("running");

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
      // const data = await fetchData({
      //   path: "Tresor Systems Pvt Ltd",
      //   oDataQuery: "$format=json",
      // });
      // res.json({
      //   data,
    }
    res.json(product);
  } catch (error) {
    //   const data = await fetchData({
    //     path: "Tresor Systems Pvt Ltd",
    //     oDataQuery: "$format=json",
    //   });
    //   res.json({
    //     data,
    //   });
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
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;

// $format=json&$skiptoken=%27MGNR3HN%2FA%27,%27EBS-DEL%27
// $format=json&$skiptoken=%278906046400403%27,%27JAMMU-OK%27

// router.get("/data2", async function (req, res, next) {
//   try {
//     // let productCount = [];

//     // let product = [];
//     // let top = 1000;
//     // let skip = 0;
//     // let apiCallCount = 1;
//     // while (productCount.length > 1) {
//     //   const data = await fetchData({
//     //     path: "Tresor Systems Pvt Ltd",
//     //     oDataQuery: `$format=json&${skip}&${top}`,
//     //   });
//     //   productCount = data.value;
//     //   product.push(data.value);
//     //   apiCallCount++;
//     //   skip = skip + top;
//     //   res.json(product);
//     //   console.log("product", productCount);
//     //   console.log(product);
//     const data = await fetchData({
//       path: "Tresor Systems Pvt Ltd",
//       oDataQuery: "$format=json&$skiptoken=%27MGNR3HN%2FA%27,%27EBS-DEL%27",
//     });
//     res.json({
//       data,
//     });
//   } catch (error) {
//     //   const data = await fetchData({
//     //     path: "Tresor Systems Pvt Ltd",
//     //     oDataQuery: "$format=json",
//     //   });
//     //   res.json({
//     //     data,
//     //   });
//     //   res.json(error.message);
//   }
// })

// router.get("/data3", async function (req, res, next) {
//   try {
//     // let productCount = [];

//     // let product = [];
//     // let top = 1000;
//     // let skip = 0;
//     // let apiCallCount = 1;
//     // while (productCount.length > 1) {
//     //   const data = await fetchData({
//     //     path: "Tresor Systems Pvt Ltd",
//     //     oDataQuery: `$format=json&${skip}&${top}`,
//     //   });
//     //   productCount = data.value;
//     //   product.push(data.value);
//     //   apiCallCount++;
//     //   skip = skip + top;
//     //   res.json(product);
//     //   console.log("product", productCount);
//     //   console.log(product);
//     const data = await fetchData({
//       path: "Tresor Systems Pvt Ltd",
//       oDataQuery: "$format=json&$skiptoken=%278906046400403%27,%27JAMMU-OK%27",
//     });
//     res.json({
//       data,
//     });
//   } catch (error) {
//     //   const data = await fetchData({
//     //     path: "Tresor Systems Pvt Ltd",
//     //     oDataQuery: "$format=json",
//     //   });
//     //   res.json({
//     //     data,
//     //   });
//     //   res.json(error.message);
//   }
// });
