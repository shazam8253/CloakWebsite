import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                

                <div className="flex items-center justify-center m-auto overflow-hidden  mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                <div className="flex flex-col lg:flex-row mt-32 py-8 justify-center text-center lg:text-center">
                    <div className="lg:w-1/8 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                        <div className="text-7xl font-bold text-center tracking-tight text-white mt-1">Trade crypto with <br/> end-to-end privacy.</div>
                        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            <Link to="/contact" className="text-white bg-md-slate-blue hover:bg-l-slate-blue duration-300 inline-flex items-center justify-center w-full px-6 py-3 my-10 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                Learn more
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
                </div>
        </>
    )
}

export default Hero;