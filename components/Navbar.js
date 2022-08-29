import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="navbar backdrop-blur-sm fixed shadow-lg z-10">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 backdrop-blur-sm">
                        <li><a href="../Hero">Home Page</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a>Project</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="flex-1 pl-80 ml-28">
                    <a href="https://dev21.me" className="btn btn-ghost normal-case text-xl text-teal-500 navbar-end">ZaidDev</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;