import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import updateIcon from '../../../assets/images/updateIcon.png'
import deleteIcon from '../../../assets/images/deleteIcon.svg'
function ProductCard({ product, state }) {
  const location = useLocation();
  const isProductPage = location.pathname === "/products";
  
  return (
    <div className="w-full">
      <div className="container  w-full p-4 ">
        <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
          <div className="prod-title">
            <p className="text-2xl uppercase text-gray-900 font-bold truncate">
              {product.title}
            </p>
            <p className="uppercase text-sm text-gray-400">
              {product.category}
            </p>
          </div>
          <div className="prod-img overflow-auto h-[200px] w-[170px]">
            <Link to="/product/1">
              <img
                src={product.thumbnail}
                className="w-full object-cover object-center"
              />
            </Link>
          </div>
          <div
            className={`prod-info grid ${isProductPage ? "gap-2" : "gap-10"} `}
          >
            <div>
              <ul className="flex flex-row justify-center items-center">
                <li className="mr-4 last:mr-0">
                  <span
                    className={`block ${
                      isProductPage ? "p-1/2" : "p-1"
                    }border-2 border-gray-500 rounded-full transition ease-in duration-300`}
                  >
                    <Link
                      to="#blue"
                      className={`block ${
                        isProductPage ? "w-4 h-4" : "w-6 h-6"
                      } bg-blue-900 rounded-full`}
                    ></Link>
                  </span>
                </li>
                <li className="mr-4 last:mr-0">
                  <span
                    className={`block ${
                      isProductPage ? "p-1/2" : "p-1"
                    }border-2 border-gray-500 rounded-full transition ease-in duration-300`}
                  >
                    <Link
                      to="#blue"
                      className={`block ${
                        isProductPage ? "w-4 h-4" : "w-6 h-6"
                      } bg-red-900 rounded-full`}
                    ></Link>
                  </span>
                </li>
                <li className="mr-4 last:mr-0">
                  <span
                    className={`block ${
                      isProductPage ? "p-1/2" : "p-1"
                    }border-2 border-gray-500 rounded-full transition ease-in duration-300`}
                  >
                    <Link
                      to="#blue"
                      className={`block ${
                        isProductPage ? "w-4 h-4" : "w-6 h-6"
                      } bg-orange-900 rounded-full`}
                    ></Link>
                  </span>
                </li>
                <li className="mr-4 last:mr-0">
                  <span
                    className={`block ${
                      isProductPage ? "p-1/2" : "p-1"
                    }border-2 border-gray-500 rounded-full transition ease-in duration-300`}
                  >
                    <Link
                      to="#blue"
                      className={`block ${
                        isProductPage ? "w-4 h-4" : "w-6 h-6"
                      } bg-green-500 rounded-full`}
                    ></Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p className="font-bold text-xl">{product.price} dh</p>
              {state === "admin" ? (
                <>
                  <Link
                    className={`${
                      isProductPage ? "px-3 py-2 text-sm" : "px-6 py-2"
                    } transition ease-in duration-200 uppercase rounded-full hover:bg-amber-400 hover:text-white border-2 bg-amber-500 focus:outline-none`}
                  >
                    <img src={updateIcon} className="w-[30px] h-auto"/>
                  </Link>
                  <Link
                    className={`${
                      isProductPage ? "px-3 py-2 text-sm" : "px-6 py-2"
                    } transition ease-in duration-200 uppercase rounded-full hover:bg-red-600 hover:text-white border-2 bg-red-700 focus:outline-none`}
                  >
                    <img src={deleteIcon} className="w-[30px] h-auto"/>
                  </Link>
                </>
              ) : (
                <button
                  className={`${
                    isProductPage ? "px-3 py-2 text-sm" : "px-6 py-2"
                  } transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none`}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  product: PropTypes.object,
  state: PropTypes.string,
};
export default ProductCard;
