"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'flowbite-react';
// import { Button } from 'flowbite-react';

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)
    const [isClient, setIsClient] = useState(false)
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button className='text-white' onClick={() => signOut()}>Sign out</button>
    //     </>
    // }

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image className='invertImg' src="/tea.gif" alt="" width={100} height={100} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Give Me A Chai</span>
                </Link>
                <div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {session && <>
                        <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
                            setTimeout(() => {
                                setShowdropdown(false)
                            }, 100);
                        }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 me-2 font-medium rounded-lg text-sm px-13 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Account<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <div className='relative'>
                            <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute top-[2.8rem] right-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 text-center inline-flex items-center`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                    }
                    {session && <button className='text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ' onClick={() => { signOut() }}>Logout</button>}
                    {!session && <Link href={"/Login"}>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                Log In
                            </span>
                        </button></Link>}
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href={"/"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                        </li>

                        <li>
                            <Link href={"/About"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>

                        <li>
                            <Link href={"/Contact"} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar