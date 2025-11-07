import React, { useState } from 'react';
import { validateSignup } from '../utilities/validators';
import { registerUser } from '../api/authApi';
import  Logo  from '../assets/img/Logo.png';
import Bottom from "../assets/img/Bottom.png";

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', cpassword: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateSignup(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const userData = {
        name: formData.name,
        email: formData.email,
        cpassword: formData.cpassword,
      }
      try {
        const response = registerUser(userData).then(res => console.log(res)).catch((err) => console.log(err));
      }
      catch (err) {
        console.log(err)
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
                <img className='custom-img' src={Logo} alt="HealthCircle-img" />
        <h1 className="text-center gradient-txt">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col custom-form">
          {/* Full Name */}
          <fieldset className="custom-fields">
            <label htmlFor="name" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className=" custom-inputs w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </fieldset>

          {/* Email */}
          <fieldset className="custom-fields">
            <label htmlFor="email" className="block text-gray-700 ">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="custom-inputs w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </fieldset>

          {/* Password */}
          <fieldset className="custom-fields">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="custom-inputs w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </fieldset>

          {/* Confirm Password */}
          <fieldset className="custom-fields">
            <label htmlFor="cpassword" className="block text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={formData.cpassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="custom-inputs w-full border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.cpassword && <p style={{ color: 'red' }}>{errors.cpassword}</p>}
          </fieldset>

          {/* Family Linking */}
          <fieldset className="custom-fields flex flex-col">
            <label className="block text-gray-700 ">Family Linking :</label>
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Join existing family
            </label>
            <label className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Create new family
            </label>
          </fieldset>

          {/* Submit Button */}
          <button
            type="submit"
            className="custom-btn w-full bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create Account
          </button>

          <hr className="custom-hr" />

          <p className="text-center text-gray-600 text-sm mt-1">
            Already have an account?{" "}
            <a href="#">
              Login instead
            </a>
          </p>
        </form>
                        <img className='custom-img-bottom' src={Bottom} alt="HealthCircle-img" />
      </div>
    </div>
  );
}

export default Signup;
