'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

console.log(process.env.NEXT_PUBLIC_BASEURL);

const BASEURL = process.env.NEXT_PUBLIC_BASEURL || 'http://localhost:5000'; // Fallback for local development

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${BASEURL}/blogs/all`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <>
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">All Blogs</h2>
            {loading ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map(blog => (
                        <div key={blog._id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
                            <div className="h-40 bg-gray-200 flex items-center justify-center">
                                <img
                                    src="https://picsum.photos/seed/picsum/400/200"
                                    alt="Blog"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{blog.title}</h3>
                                <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                                    <span>
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </span>
                                    <span>By User</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}