import { useEffect, useState } from "react";
import ListProducts from "../../../../components/product/ListProducts/ListProducts";
import axios from "axios";

function Section2() {
   const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((response) => {
        setData(response.data.products);
        
      })
      .catch((res) => console.log(res.data)
    )},
    []
  );
  return (
    <>
      <div className="px-[20px] sm:px-[40px] lg:px-[100px]">
        <div className="text-3xl justify-center w-full text-center mt-[40px] h-[50px]">
          Newest products
        </div>
       <ListProducts products={data} />
      </div>
    </>
  );
}

export default Section2;
