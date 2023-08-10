import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 text-xl font-medium text-white hover:text-gray-300 duration-300" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 text-xl font-medium text-white hover:text-gray-300 duration-300" smooth to="/#services">
                Protocol
            </HashLink>
            <HashLink className="px-4 text-xl font-medium text-white hover:text-gray-300 duration-300" to="/#docs">
                Whitepaper
            </HashLink>
            <Link className="text-white text-xl font-medium bg-md-slate-blue hover:bg-l-slate-blue duration-300 inline-flex items-center justify-center w-auto px-6 py-3 rounded-xl" smooth to="/">
                Join Waitlist   
            </Link>
        </>
    )
}

export default NavLinks;