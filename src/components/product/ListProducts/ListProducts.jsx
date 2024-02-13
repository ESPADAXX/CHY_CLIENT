
import ProductCard from "../ProductCard/ProductCard";
import PropTypes from "prop-types";


function ListProducts({ productRowNumber ,products ,state}) {
  

  return (
    <div
      className={`mt-6 grid gap-x-2 gap-y-2 ${
        productRowNumber === 3
          ? "grid-cols-3"
          : productRowNumber === 2
          ? "grid-cols-2"
          : productRowNumber === 1
          ? "grid-cols-1"
          : "grid-cols-4"
      } xl:gap-x-8`}
    >
      {
        products &&
        products.map((product,index) => (
          <ProductCard key={index} product={product} state={state} />
        ))
      }
    </div>
  );
}

ListProducts.propTypes = {
  productRowNumber: PropTypes.number,
  products: PropTypes.array,
  state:PropTypes.string
};

export default ListProducts;
