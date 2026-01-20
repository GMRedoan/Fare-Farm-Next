"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const LogInform = () => {
    const router = useRouter();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const notify = () => toast.success("You logged in successfully!")

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "123456") {
            document.cookie = "auth=true; path=/; max-age=86400";
            login()
            router.push("/products");
            notify()
            Swal.fire({
                title: "Welcome!",
                text: "You logged in successfully!",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor:"#f59e0b"
            });
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <div className="w-full max-w-lg bg-base-200 rounded-2xl shadow-2xl p-8">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-base-content mb-4">
                    Welcome <span className="text-primary">Back</span>
                </h2>
                <p className="text-center text-accent mb-8">
                    Please log in to your account
                </p>
                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="admin@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="123456"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-center text-red-500 mb-2 font-medium">
                            {error}
                        </p>
                    )}



                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full btn btn-primary text-white font-semibold py-3 rounded-lg transition hover:scale-[1.02]"
                    >
                        Log In
                    </button>
                </form>
            </div>
            <ToastContainer
                autoClose={3000}
            />
        </div>
    );
};

export default LogInform;
