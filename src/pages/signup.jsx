import React, { useState } from 'react';
import { validateSignup } from '../utilities/validators';
import { registerUser } from '../api/authApi';
import Logo from '../assets/img/Logo.png';
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
    <div className='w-[100%] justify-center flex flex-col items-center'>
      <img className="w-[90%] lg:w-[35%] md:w-[50%] mt-6 rounded-t-lg" src={Logo} alt="HealthCircle-img" />
      <h1 className="gradient-txt font-bold my-2 text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-center">
        Sign Up
      </h1>

      <form onSubmit={handleSubmit} className="p-2 w-[90%] lg:w-[35%] md:w-[50%]">
        {/* Full Name */}
        <fieldset className="my-3">
          <label className='block' htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className=" custom-inputs w-[100%] my-2 p-2"
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </fieldset>

        {/* Email */}
        <fieldset className="my-3">
          <label className='block' htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="custom-inputs w-[100%] my-1 p-2"
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </fieldset>

        {/* Password */}
        <fieldset className="my-3">
          <label className='block' htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="custom-inputs w-[100%] my-1 p-2"
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </fieldset>

        {/* Confirm Password */}
        <fieldset className="my-3">
          <label className='block' htmlFor="cpassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="custom-inputs w-[100%] my-1 p-2"
          />
          {errors.cpassword && <p style={{ color: 'red' }}>{errors.cpassword}</p>}
        </fieldset>

        {/* Family Linking */}
        <fieldset className="my-3">
          <label className='block mb-1'>Family Linking :</label>
          <label className="custom-checkbox flex gap-2 items-center">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Join existing family
          </label>
          <label className="custom-checkbox flex gap-2 items-center">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Create new family
          </label>
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="custom-btn w-[100%] p-2 pointer my-1"
        >
          Create Account
        </button>

        <hr className="custom-hr my-2" />

        <p className='text-center my-1'>
          Already have an account?{" "}
          <a href="#" className='underline'>
            Login instead
          </a>
        </p>
      </form>
      <img className='w-[90%] lg:w-[35%] md:w-[50%] rounded-b-lg' src={Bottom} alt="HealthCircle-img" />
    </div>
  );
}

export default Signup;
