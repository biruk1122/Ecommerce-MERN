import React from "react";
import { useAppContext } from "../context/AppContext";

const Login = () => {

    const {setShowUserLogin, setUser} = useAppContext();

    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmitHandler = async(e) => {
        e.preventDefault()
        setUser({
            email: "test@gmail.com",
            name: "Test User"
        })
        setShowUserLogin(false);
    }

    return (
        <div onClick={() => setShowUserLogin(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 sm:p-10 flex flex-col gap-5 animate-fadeIn">

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center text-gray-800">
                    <span className="text-indigo-600">User</span>{" "}
                    {state === "login" ? "Login" : "Sign Up"}
                </h2>

                {/* Name Field */}
                {state === "register" && (
                    <div className="w-full">
                        <label className="text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Enter your name"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                            type="text"
                            required
                        />
                    </div>
                )}

                {/* Email Field */}
                <div className="w-full">
                    <label className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter your email"
                        className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        type="email"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="w-full">
                    <label className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter your password"
                        className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        type="password"
                        required
                    />
                </div>

                {/* Switch Mode */}
                <p className="text-sm text-center text-gray-600">
                    {state === "register"
                        ? "Already have an account?"
                        : "Don't have an account?"}{" "}
                    <span
                        onClick={() =>
                            setState(state === "login" ? "register" : "login")
                        }
                        className="text-indigo-600 font-medium cursor-pointer hover:underline"
                    >
                        {state === "register" ? "Login" : "Sign Up"}
                    </span>
                </p>

                {/* Button */}
                <button
                    type="submit"
                    className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
                >
                    {state === "register" ? "Create Account" : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;