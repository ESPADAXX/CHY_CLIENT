import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "../../auth/login/Login";
import Cart from "../../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { closeAuth, openAuth } from "../../../redux/actions/authentication";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [fullName,setFullName]=useState('')
  const isAuthOpen = useSelector((state) => state.authentication.isAuthOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const handleCart = () => {
    setIsCartClicked(!isCartClicked);
  };

  const signOut = async () => {
    try {
      const response = await axios.post(
        "https://jit-bootcamp-api-5g7v.onrender.com/auth/logout",
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        localStorage.removeItem("fullName");
      }
    } catch (error) {
      console.error("Logout failed:", error);

      // Handle errors, such as displaying an error message to the user
    }
  };
  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    // Check if the token exists
    if (token) {
      // Decode the token to extract user information
      const decoded = jwtDecode(token);
      
      // Set the user's full name in the state
      setFullName(decoded.name);
    }
  },[]); 
  // Add event listener when the component mounts
  window.addEventListener("scroll", handleScroll);
  useEffect(() => {
    // Check if the current path is '/'
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      // If the path is not '/', remove the event listener
      window.removeEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);
  const toggleAuth = () => {
    if (isAuthOpen) {
      dispatch(closeAuth());
    } else {
      dispatch(openAuth());
    }
  };
  return (
    <header className="">
      <div className="flex">
        <section className="fixed z-40 mx-auto">
          <nav
            className={`flex justify-between w-screen ${
              scrolling || !isHome
                ? "bg-white text-black"
                : "bg-transparent text-white"
            }`}
          >
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link className="text-3xl font-bold font-heading" to="/">
                Logo Here.
              </Link>

              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link className="hover:text-gray-200" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" to="/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" to="#">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-200" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="hidden xl:flex items-center space-x-5 items-center">
                <Link className="hover:text-gray-200 pointer" to="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </Link>
                <div
                  className="flex items-center hover:text-gray-200 cursor-pointer"
                  onClick={handleCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </div>

                <div
                  className="flex items-center hover:text-gray-200 cursor-pointer"
                  onClick={() =>
                    !localStorage.getItem("userID") ? toggleAuth() : signOut()
                  }
                >
                  <span>{fullName}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200 pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Link className="xl:hidden flex mr-6 items-center" to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </Link>
            <div className="navbar-burger self-center mr-12 xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </nav>
        </section>
      </div>
      {isAuthOpen ? <Login /> : null}
      {isCartClicked ? <Cart closeCart={handleCart} /> : null}
    </header>
  );
}
