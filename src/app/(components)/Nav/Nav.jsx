"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
const Nav = () => {
    const path = usePathname()
    const [toggler, setToggler] = useState(false)

    const togglerBtn = () => {
        setToggler(!toggler)
    }

    return (
        <>
            <nav className="navbar px-2 bg-black ">
                <div className=" flex w-full flex-wrap ">
                    <Link className="navbar-brand text-white " href="/">
                        <h1 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
                        text-3xl bg-clip-text tracking-tighter text-transparent' >Blog Application</h1>
                    </Link>
                    <button onClick={togglerBtn} className="navbar-toggler ms-auto rounded-sm md:hidden" type="button" >
                        <span className="navbar-toggler-icon rounded-sm p-1 bg-white" />
                    </button>
                    <div className="w-full   md:w-1/4 mx-auto transition-all  order-3 " >
                        <div className="mx-5 md:m-0 transition-all">
                            <ul className={` bg-white mx-auto transition-all md:flex-row  block  md:flex  md:items-center md:justify-between     rounded  w-full md:rounded-full px-2 navbar-nav md:gap-5   ${toggler ? "flex" : "hidden"}`}>
                                <li className="nav-item">
                                    <Link className={`nav-link ${path == "/Home" ? "active" : ""}    hover:font-bold transition-all   `} aria-current="page" href="/Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${path == "/newPost" ? "active" : ""}    hover:font-bold transition-all  `} href="/newPost">Create Post</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
