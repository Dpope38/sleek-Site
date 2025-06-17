import React, { useState } from "react";

export default function LoginForm() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // Add your form submission logic here
  // };

  // const handleForgotPassword = (e) => {
  //   e.preventDefault();
  //   console.log("Forgot password clicked");
  //   // Add forgot password logic here
  // };

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   console.log("Sign up clicked");
  //   // Add sign up navigation logic here
  // };

  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="form">
          <span className="input-span">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </span>
          <span className="input-span">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </span>
          <span className="span">
            <a href="#" onClick={handleForgotPassword}>
              Forgot password?
            </a>
          </span>
          <input
            className="submit"
            type="submit"
            value="Log in"
            onClick={handleSubmit}
          />
          <span className="span">
            Don't have an account?{" "}
            <a href="#" onClick={handleSignUp}>
              Sign up
            </a>
          </span>
        </div>

        <style jsx>{`
          .form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 350px;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            position: relative;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .form::before {
            content: "";
            position: absolute;
            inset: -2px;
            z-index: -1;
            background: linear-gradient(
              45deg,
              #ff6b6b,
              #4ecdc4,
              #45b7d1,
              #96ceb4,
              #ffeaa7,
              #dda0dd
            );
            background-size: 400% 400%;
            border-radius: 12px;
            animation: gradient 15s ease infinite;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .input-span {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .label {
            font-size: 14px;
            font-weight: 600;
            color: #374151;
          }

          input[type="email"],
          input[type="password"] {
            border: 1.5px solid #e5e7eb;
            outline: 0;
            background-color: #f9fafb;
            padding: 8px 10px;
            border-radius: 5px;
            transition: all 0.3s ease;
          }

          input[type="email"]:focus,
          input[type="password"]:focus {
            border-color: #4f46e5;
            background-color: #fff;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
          }

          .submit {
            margin: 20px 0 10px 0;
            background-color: #4f46e5;
            border: none;
            color: white;
            font-size: 15px;
            font-weight: 500;
            border-radius: 5px;
            height: 45px;
            width: 100%;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .submit:hover {
            background-color: #4338ca;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
          }

          .span {
            text-align: center;
            font-size: 14px;
            color: #6b7280;
          }

          .span a {
            color: #4f46e5;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .span a:hover {
            color: #4338ca;
            text-decoration: underline;
          }
        `}</style>
      </div>
    </div>
  );
}
