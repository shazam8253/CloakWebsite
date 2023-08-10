import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 text-lg font-[Inter] font-medium text-black hover:text-eerie-black duration-300" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 text-lg font-[Inter] font-medium text-black hover:text-eerie-black duration-300" smooth to="/#services">
                Protocol
            </HashLink>
            <HashLink className="px-4 text-lg font-[Inter] font-medium text-black hover:text-eerie-black duration-300" to="/#docs">
                Whitepaper
            </HashLink>
            <Link className="text-white text-lg font-[Inter] font-medium bg-md-slate-blue hover:bg-l-slate-blue duration-300 inline-flex items-center justify-center w-auto px-6 py-3 rounded-xl" smooth to="/">
                Join Waitlist   
            </Link>
        </>
    )
}

export default NavLinks;