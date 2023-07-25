import axios from "axios";
import { useEffect, useState } from "react";


const fetchProducts=(url)=> {
  try {
    axios.get(url).then((res) => {
      console.log(res.data);
      return res.data;
    });
  } catch (error) {
    console.log("not connect ", error);
  }
}
export default fetchProducts;

/**
 "https://fakestoreapi.com/products


async function fetchProducts(url) {
  try {
    axios.get(url).then((res) => {
      console.log(res.data);
      return res.data;
    });
  } catch (error) {
    console.log("not connect ", error);
  }
}
export default fetchProducts;
 */