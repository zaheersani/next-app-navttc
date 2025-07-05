'use client'

import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
            <div className="flex items-center space-x-3">
                <img src="/globe.svg" alt="Logo" className="h-8 w-8" />
                <Link href="/blogs"><span className="text-2xl font-bold text-gray-800">BlogSpace</span></Link>
            </div>
            <div className="space-x-4">
                <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
                    <Link href="/blogs/login">Login</Link>
                </button>
                <button className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                    <Link href="/blogs/register">Register</Link>
                </button>
            </div>
        </header>
      <main className="max-w-5xl mx-auto py-10 px-4">{children}</main>
    </div>
  );
}