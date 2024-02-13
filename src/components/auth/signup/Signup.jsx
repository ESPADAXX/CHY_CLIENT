import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import Verification from "../verification/verification";


function Signup({ onLoginClick }) {
  const [response, setResponse] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignupSubmit = async () => {
    try {
      const response = await axios.post(
        "https://jit-bootcamp-api-5g7v.onrender.com/auth/register",
        {
          fullName: fullName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }
      );
      setResponse(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(response)
  console.log(response.length)
  return !response.success ? (
    <div className="min-h-screen bg-gray-100 py-6 flex z-20 bg-opacity-60 w-screen flex-col justify-center sm:py-12 fixed">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-[700px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63] to-[#aa1145] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Signup Form with Floating Labels
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Your Full Name"
                  />
                  <label
                    htmlFor="fullName"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email Address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Confirmation Password"
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Confirmation Password
                  </label>
                </div>
                <div className="relative">
                  <button
                    className="bg-[#E91E63] text-white rounded-md px-2 py-1"
                    onClick={handleSignupSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div>
                Already have an account?{" "}
                <p
                  className="cursor-pointer text-xl font-bold"
                  onClick={() => onLoginClick()}
                >
                  Login
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
      <Verification data={response} email={email} />
  );
}

Signup.propTypes = {
  onLoginClick: PropTypes.func,
};

export default Signup;
