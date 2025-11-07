import React, { useState } from 'react';
import { validateLogin } from '../utilities/validators';
import { loginUser } from '../api/authApi';
import  Logo  from '../assets/img/Logo.png';
import Bottom from "../assets/img/Bottom.png";

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateLogin(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const userData = {
                email: formData.email,
                password: formData.password,
            }
            const response = loginUser(userData).then(res => console.log(res)).catch(err => console.log(err));
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full flex flex-col items-center">
                <img className='custom-img' src={Logo} alt="HealthCircle-img" />
                <h1 className="text-center gradient-txt">
                    Login
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col custom-form">

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
                    <fieldset className="custom-fields flex justify-between items-center">
                        <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Remember Me
                        </label>
                        <a href="#">forgot password ?</a>
                    </fieldset>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="custom-btn w-full bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>

                    <hr className="custom-hr" />

                    <p className="text-center text-gray-600 text-sm mt-1">
                        Don't have an account?{" "}
                        [<a href="#">
                            Create One
                        </a>]
                    </p>
                </form>
                <img className='custom-img-bottom' src={Bottom} alt="HealthCircle-img" />
            </div>
        </div>
    );
}

export default Login;
