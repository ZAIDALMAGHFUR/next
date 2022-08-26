import Link from "next/link"

import React from "react"

const Navbar = () => {
    return (
        <>
            <div className="navbar backdrop-blur-sm fixed shadow-lg z-10">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="#Hero">Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                        <li><a>Project</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <a href="https://astounding-entremet-560cd3.netlify.app" className="btn btn-ghost normal-case text-xl text-teal-500">ZaidDev</a>
                </div>
                <div className="flex-none  rounded-lg">
                    <ul className="menu menu-horizontal p-0">
                        <li tabIndex="0">
                            <a className="text-teal-400" href="#">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;