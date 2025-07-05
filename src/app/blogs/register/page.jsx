"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password || !form.confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // Registration logic here (e.g., API call)
        setSuccess("Registered successfully!");
        setForm({ email: "", password: "", confirmPassword: "" });
    };

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Register as Blogger</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                        />
                    </div>
                    {error && <div className="text-red-600 mb-2">{error}</div>}
                    {success && <div className="text-green-600 mb-2">{success}</div>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600 text-sm">
                    Already have an account?{" "}
                    <Link href="/blogs/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}