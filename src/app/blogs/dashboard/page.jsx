'use client';

import React, { useEffect, useState } from 'react';

const BASEURL = process.env.BASEURL || 'http://localhost:5000'; // Fallback for local development

export default function BlogsDashboard() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('No token found. Please login.');
                    setLoading(false);
                    window.location.href = '/blogs/login'; // Redirect to login if no token
                    return;
                }
                const res = await fetch(`${BASEURL}/blogs`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await res.json();
                setBlogs(data);
            } catch (err) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">My Blogs</h1>
                {loading && (
                    <div className="text-center text-gray-500">Loading...</div>
                )}
                {error && (
                    <div className="text-center text-red-500 mb-4">{error}</div>
                )}
                {!loading && !error && blogs.length === 0 && (
                    <div className="text-center text-gray-500">No blogs found.</div>
                )}
                <ul className="space-y-6">
                    {blogs.map((blog) => (
                        <li
                            key={blog._id}
                            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                {blog.title}
                            </h2>
                            <p className="text-gray-700 mb-4">{blog.content}</p>
                            <div className="text-sm text-gray-400">
                                Created at:{' '}
                                {new Date(blog.createdAt).toLocaleString(undefined, {
                                    dateStyle: 'medium',
                                    timeStyle: 'short',
                                })}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}