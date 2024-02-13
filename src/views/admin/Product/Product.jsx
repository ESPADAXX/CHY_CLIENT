import axios from "axios";
import { useEffect, useState } from "react";
import ListProducts from "../../../components/product/ListProducts/ListProducts";
import { Link } from "react-router-dom";


function Product() {
   const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=20")
      .then((response) => {
        setData(response.data.products);
        
      })
      .catch((res) => console.log(res.data)
    )},
    []
  );
  return (
    <div >
      <div>
        <h1 className="text-center font-sans text-5xl mt-5">Products</h1>
        <Link to="/admin/addProduct">Add product</Link>
      </div>
      <ListProducts products={data} state={"admin"} />
    </div>
  )
}

export default Product