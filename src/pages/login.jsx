function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-center gradient-txt">
                    Login
                </h1>

                <form className="flex flex-col custom-form">

                    {/* Email */}
                    <fieldset className="custom-fields">
                        <label htmlFor="email" className="block text-gray-700 ">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            className="custom-inputs w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
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
                            className="custom-inputs w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
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
            </div>
        </div>
    );
}

export default Login;
