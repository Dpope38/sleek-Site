import { useCallback, useState } from "react";
import { cn } from "../utility/cn.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";

const LoginForm = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [touched, setTouched] = useState(false);
  const [auth, setAuth] = useAuth();

  // Validation Handler
  const validateEmail = useCallback(() => {
    const emailValidate = email.endsWith("@gmail.com");
    setIsValid(emailValidate);
    setHasError(touched && !emailValidate && email.length > 0);
    return emailValidate;
  }, [email, touched]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (touched) {
      validateEmail();
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validateEmail();
  };

  const buttonClasses = cn(
    "px-6 py-2 rounded-lg font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    isValid
      ? "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500 cursor-pointer"
      : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
  );

  const inputClasses = cn(
    "w-full px-4 py-2 border rounded-lg transition-colors duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-1",
    hasError
      ? "border-red-500 focus:ring-red-500 bg-red-50"
      : isValid
      ? "border-green-500 focus:ring-green-500 bg-green-50"
      : "border-gray-300 focus:ring-blue-500"
  );
  const passwordInputClasses = cn(
    "w-full px-4 py-2 border rounded-lg transition-colors duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-300"
  );

  const formHandler = async (e) => {
    e.preventDefault();

    try {
      console.log(`Submitting Form....>>> ${import.meta.env.VITE_BASEURL_API}`);

      const { data } = await axios.post(
        `${import.meta.env.VITE_BASEURL_API}auth/login`,
        {
          email,
          password,
        }
      );
      console.log(data);
      console.log("From error message", data.error);
      if (data?.error) {
        console.log(data.error);
      } else {
        localStorage.setItem("tokens", data.token);
        localStorage.setItem("users", JSON.stringify(data.data));
        // Make sure to store the correct values in the auth context
        setAuth({ user: data.data, token: data.token });

        toast.success("Login successful");
        navigate(`/${data.data.role}`);
        onClose(false);
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 bg-black/50">
      <div className="relative max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Green Springs School Email Validation
        </h2>

        <form onSubmit={formHandler} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your @gmail.com email"
              className={inputClasses}
              value={email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {hasError && (
              <p className="mt-2 text-sm text-red-600">
                Email must contain "@gmail.com"
              </p>
            )}
            {isValid && (
              <p className="mt-2 text-sm text-green-600">
                ✓ Valid Green Springs School email
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={passwordInputClasses}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" disabled={!isValid} className={buttonClasses}>
            {isValid ? "Submit Form" : "Enter Valid Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
