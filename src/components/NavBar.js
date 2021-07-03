import React from 'react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className="bg-blue-700 text-white w-full flex justify-between p-3">
            <div className="flex">
                <img src="/vercel.svg" alt="" width="100"/>
                <h1>Reja</h1>
            </div>
            <div>
                <Link href="/">
                    <a className="px-3 py-5 hover:text-gray-200">Home</a>
                </Link>
                <Link href="/about">
                    <a className="px-3 py-5 hover:text-gray-200">About</a>
                </Link>
            </div>
        </div>
    )
}
