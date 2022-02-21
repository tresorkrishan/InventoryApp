var express = require("express");
var router = express.Router();
var ntlm = require("httpntlm").ntlm;
var HttpsAgent = require("agentkeepalive").HttpsAgent;
const request = require("request");
var http = require("http");

var keepaliveAgent = new HttpsAgent();

const fetchData = ({ path = "", oDataQuery = "" } = {}) => {
  console.log("query", oDataQuery);
  var options = {
    url: `http://182.71.63.179:6009/2016/OData/Company('${encodeURIComponent(
      path
    )}')/RealTimeInventoryApi?${oDataQuery}`,
    username: "webservice",
    password: "Tresor@1234",
    domain: "tresorsystems",
    workstation: "",
  };

  return new Promise((resolve, reject) => {
    keepaliveAgent = new http.Agent({ keepAlive: true });

    var type1msg = ntlm.createType1Message(options);
    try {
      request.get(
        options.url,
        {
          headers: {
            Connection: "keep-alive",
            Authorization: type1msg,
          },
          allowRedirects: false,
          agent: keepaliveAgent,
        },
        (error, response, body) => {
          var type2msg = ntlm.parseType2Message(
            response.headers["www-authenticate"]
          );

          var type3msg = ntlm.createType3Message(type2msg, options);
          request.get(
            options.url,
            {
              headers: {
                Connection: "Close",
                Authorization: type3msg,
              },
              allowRedirects: false,
              agent: keepaliveAgent,
            },
            (error2, response2, body2) => {
              resolve(body2 ? JSON.parse(body2) : {});
            }
          );
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

const postData = ({
  path = "",
  oDataPath = "",
  oDataQuery = "",
  reqBody = {},
} = {}) => {
  console.log("sssss", reqBody);
  var options = {
    url: `http://182.71.63.179:6009/2016/OData/Company('${encodeURIComponent(
      path
    )}')${oDataPath}?${oDataQuery}&company=${path}`,
    username: "webservice",
    password: "Tresor@1234",
    domain: "tresorsystems",
    workstation: "",
  };

  return new Promise((resolve, reject) => {
    keepaliveAgent = new http.Agent({ keepAlive: true });

    var type1msg = ntlm.createType1Message(options);
    try {
      request.post(
        options.url,
        {
          headers: {
            Connection: "keep-alive",
            "content-type": "application/json",
            Authorization: type1msg,
          },
          body: reqBody,
          json: true,
          allowRedirects: false,
          agent: keepaliveAgent,
        },
        (error, response, body) => {
          if (error) {
            return reject(error);
          }
          var type2msg = ntlm.parseType2Message(
            response.headers["www-authenticate"]
          );
          var type3msg = ntlm.createType3Message(type2msg, options);

          request.post(
            options.url,
            {
              headers: {
                "content-type": "application/json",
                Connection: "Close",
                Authorization: type3msg,
              },
              body: reqBody,
              json: true,
              allowRedirects: false,
              agent: keepaliveAgent,
            },
            (error2, response2, body2) => {
              if (error2) {
                return reject(error2);
              }
              resolve(body2 ? body2 : {});
            }
          );
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

const updateUserData = ({
  path = "",
  oDataPath = "",
  oDataQuery = "",
  reqBody = {},
} = {}) => {
  console.log("sssss", reqBody);
  var options = {
    url: `http://182.71.63.179:6009/2016/OData/Company('${encodeURIComponent(
      path
    )}')${oDataPath}?${oDataQuery}&company=${path}`,
    username: "webservice",
    password: "Tresor@1234",
    domain: "tresorsystems",
    workstation: "",
  };

  return new Promise((resolve, reject) => {
    keepaliveAgent = new http.Agent({ keepAlive: true });

    var type1msg = ntlm.createType1Message(options);
    try {
      request.post(
        options.url,
        {
          headers: {
            Connection: "keep-alive",
            "content-type": "application/json",
            Authorization: type1msg,
          },
          body: reqBody,
          json: true,
          allowRedirects: false,
          agent: keepaliveAgent,
        },
        (error, response, body) => {
          if (error) {
            return reject(error);
          }
          var type2msg = ntlm.parseType2Message(
            response.headers["www-authenticate"]
          );
          var type3msg = ntlm.createType3Message(type2msg, options);

          request.post(
            options.url,
            {
              headers: {
                "content-type": "application/json",
                Connection: "Close",
                Authorization: type3msg,
              },
              body: reqBody,
              json: true,
              allowRedirects: false,
              agent: keepaliveAgent,
            },
            (error2, response2, body2) => {
              if (error2) {
                return reject(error2);
              }
              resolve(body2 ? body2 : {});
            }
          );
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

const customerData = ({ path = "", oDataQuery = "" } = {}) => {
  console.log("query", oDataQuery);
  var options = {
    url: `http://182.71.63.179:6009/2016/OData/Company('${encodeURIComponent(
      path
    )}')/iPadCustomerCapturingModification?${oDataQuery}`,
    username: "webservice",
    password: "Tresor@1234",
    domain: "tresorsystems",
    workstation: "",
  };

  return new Promise((resolve, reject) => {
    keepaliveAgent = new http.Agent({ keepAlive: true });

    var type1msg = ntlm.createType1Message(options);
    try {
      request.get(
        options.url,
        {
          headers: {
            Connection: "keep-alive",
            Authorization: type1msg,
          },
          allowRedirects: false,
          agent: keepaliveAgent,
        },
        (error, response, body) => {
          var type2msg = ntlm.parseType2Message(
            response.headers["www-authenticate"]
          );

          var type3msg = ntlm.createType3Message(type2msg, options);
          request.get(
            options.url,
            {
              headers: {
                Connection: "Close",
                Authorization: type3msg,
              },
              allowRedirects: false,
              agent: keepaliveAgent,
            },
            (error2, response2, body2) => {
              resolve(body2 ? JSON.parse(body2) : {});
            }
          );
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = { fetchData, postData, customerData, updateUserData };
