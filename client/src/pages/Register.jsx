import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SERVER_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${SERVER_URL}/api/auth/signup`,
        {
          name,
          email,
          password
        }
      );
      if (response.status == 201) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
      }
      navigate("/");
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };
  return (
    <div className="bg-neutral-50 w-full h-screen flex items-center justify-center">
      <div className="w-96 bg-white border border-neutral-200 p-5">
        <h2 className="text-xl font-semibold">Create an account</h2>
        <form onSubmit={handleSignUp} className="mt-5 space-y-5">
          <div>
            <h5 className="font-medium text-sm">Name</h5>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-neutral-200 text-xs"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <h5 className="font-medium text-sm">Email</h5>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-neutral-200 text-xs"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h5 className="font-medium text-sm">Password</h5>
            <input
              type="password"
              className="w-full p-3 rounded-lg border border-neutral-200 text-xs"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-xs text-white bg-orange-600 rounded-lg shadow-sm cursor-pointer"
          >
            Sign up
          </button>
        </form>
        <div className="mt-5">
          <h4 className="text-xs text-center">Already have an account? <Link to={'/login'} className="text-orange-500 cursor-pointer">Login</Link></h4>
        </div>
      </div>

    </div>
  );
};

export default Register;
