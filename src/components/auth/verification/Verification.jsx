import axios from "axios";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeAuth } from "../../../redux/actions/authentication";

function Verification({ data, email }) {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const [response, setResponse] = useState([]);
  const codeInputs = useRef([]);
  const dispatch = useDispatch();
  const handleChange = (index, value) => {
    if (!isNaN(value) && value >= 0 && value <= 9) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);

      if (value !== "" && index < 5) {
        // Move to the next input
        codeInputs.current[index + 1].focus();
      }
    }
  };
  function handleVerify() {
    const concatenatedCode = codes.join("");
    axios
      .post("https://jit-bootcamp-api-5g7v.onrender.com/auth/verify", {
        code: concatenatedCode,
      })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setResponse(err.response.data);
      });
  }
  useEffect(() => {
    if (response.success) {
      localStorage.setItem("token", response.token);
      dispatch(closeAuth());
    }
   
  }, [dispatch, response]);
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex z-20 bg-opacity-60 w-screen flex-col justify-center sm:py-12 fixed">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63] to-[#aa1145] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 size-full">
          <p className="text-xl font-medium">Please check your email</p>
          {response.success === false ? (
            <p className="mb-4 text-lg text-red-500">{response.message}</p>
          ) : response.success === undefined ? (
            <p className="mb-4 text-lg text-gray-500">
              {data.message} to {email}
            </p>
          ) : null}
          <div className="mb-2 flex space-x-2 relative w-full ">
            {codes.map((code, index) => (
              <input
                key={index}
                ref={(el) => (codeInputs.current[index] = el)}
                value={code}
                onChange={(e) =>
                  handleChange(index, parseInt(e.target.value, 10))
                }
                className="flex lg:h-14 lg:w-14 items-center justify-center rounded-xl border lg:text-4xl sm:h-20 sm:w-20 md:h-20 md:w-20 sm:text-6xl md:text-6xl"
                type="number"
                min="0"
                max="9"
              />
            ))}
          </div>
          <p className="mb-4 text-gray-500">
            Didn&apos;t get a code?{" "}
            <button className="underline">Click to resend</button>
          </p>
          <div className="flex flex-col sm:flex-row">
            <input
              type="reset"
              className="mb-2 w-full rounded-md border px-8 py-2 font-medium sm:mr-4 sm:mb-0 hover:bg-gray-100"
              onClick={() => setCodes(["", "", "", "", "", ""])}
            />

            <button
              className="w-full rounded-md border bg-gray-700 px-8 py-2 font-medium text-white hover:bg-gray-800"
              onClick={handleVerify}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
Verification.propTypes = {
  data: PropTypes.array,
  email: PropTypes.string,
};
export default Verification;
