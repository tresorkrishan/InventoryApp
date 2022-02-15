import React, { useState, useEffect } from "react";
import API from "./url";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("heloo ferom erp");

  const fetchData = async () => {
    try {
      let invedata = await axios({
        method: "get",
        url: `${API.BASE_URL}${API.INVENTORY}`,
      });
      console.log("data", invedata.data);
      console.log("hello from erp");
      setData(invedata.data);
      return data;
    } catch (error) {
      console.log("errr", error);
    }
  };
  return data;
};

export default Api;
