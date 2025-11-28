import { useState } from 'react';
import { validateLogin } from '../utilities/validators';
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from '../services/authService';
import Logo from '../assets/img/Logo.png';
import Bottom from "../assets/img/Bottom.png";
import { useAuth } from "../context/AuthContext";
import Footer from '../components/Footer'

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '', });
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
            try {
                loginUser(userData).then(res => {
                    login(res.data.token);
                    navigate('/');
                }).catch(err => console.log(err));
            }
            catch (err) {
                console.log(err)
            }
        }
    };
    return (
        <>
            <div className='w-[100%] justify-center flex flex-col items-center'>
                <img className='w-[90%] lg:w-[35%] md:w-[50%] mt-6 rounded-t-lg' src={Logo} alt="HealthCircle-img" />
                <h1 className="gradient-txt font-bold my-2 text-2xl lg:text-3xl md:text-3xl text-center">
                    Login
                </h1>

                <form onSubmit={handleSubmit} className="p-3 w-[90%] lg:w-[35%] md:w-[50%]">

                    {/* Email */}
                    <fieldset className="my-3">
                        <label htmlFor="email" className="block">
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
                    <fieldset className="custom-fields my-3">
                        <label htmlFor="password" className="block">
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

                    <fieldset className="custom-fields flex justify-between my-3">
                        <label className="custom-checkbox flex items-center ">
                            <input type="checkbox" className="my-1 custom-inputs" />
                            <span className="checkmark"></span>
                            Remember Me
                        </label>
                        <a href="#">forgot password ?</a>
                    </fieldset>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="custom-btn w-[100%] p-2 pointer my-1"
                    >
                        Login
                    </button>

                    <hr className="custom-hr my-2" />

                    <p className="text-center my-1">
                        Don't have an account?{" "}
                        [<NavLink to="/signup" className="underline">
                            Create One
                        </NavLink>]
                    </p>
                </form>
                <img className='w-[90%] lg:w-[35%] md:w-[50%] rounded-b-lg' src={Bottom} alt="HealthCircle-img" />
            </div>
            <Footer />
        </>
    );

}
export default Login;
