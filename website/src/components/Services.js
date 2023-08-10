import React from 'react';

import net from '../images/icons8-internet-100.png';
import arb from '../images/icons8-arbitrage-64.png';
import stck from '../images/icons8-stock-market-100 (1).png';

const Services = () => {

    return (
        <div id="services" className=" py-12 font-[Inter]" >
            <section data-aos="zoom-in-down">
            <div className=" my-32 py-4 grid grid-cols-3 gap-4 mx-64">
                <div className="col-span-2">
                    <h2 className="my-2 text-left text-5xl text-black font-extrabold">Cloak is a non-custodial, autonomous digital asset dark pool.</h2>
                </div>
                <div>
                    <h2 className="mt-8 mx-12 text-left text-xl lg:text-2xl font-semibold text-black">A privacy-oriented exchange tailored for your <b>high capital</b> trades. We have your back.</h2>
                </div>
                <div>
                    <p className="text-left text-xl font-medium text-gray-500 mt-12 px-8">
                        Under the hood, Cloak is an alternative trading system (ATS) for digital assets.
                    </p>
                </div>
                <div>
                    <p className="text-left text-xl font-medium text-gray-500  mt-12 px-8">
                        Enjoy the benefits of off-market trading while using a seamless interface. 
                    </p>
                </div>
                <div>
                    <p className="text-left text-xl font-medium text-gray-500 mt-12 px-8">
                        Protect your alpha while trading on-chain - no MEV, no wallet tracking, no data leakage. 
                    </p>
                </div>
            </div>
            </section>

            <div className="flex items-center justify-center m-auto  mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                <div className="flex flex-col  lg:flex-row mt-32 py-8 justify-center text-center lg:text-center relative">

                    <img className="absolute inset-0 w-full h-full object-contain object-center opacity-20 z-0" src={net} alt="Logo"></img>

                    <div className="lg:w-1/8 flex flex-col justify-center z-10" data-aos="zoom-in" data-aos-delay="200">
                        <div className="text-6xl font-bold tracking-tight text-black mt-1">Secure, discreet trading.</div>
                        <p className="text-black text-2xl text-center font-semibold opacity-80 mt-4">Whether buying or selling, your orders are private pre-, during, and post-execution.</p>
                        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            {/* Any other content you want to add in the future */}
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex items-center justify-center m-auto  mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                <div className="flex flex-col  lg:flex-row mt-32 py-8 justify-center text-center lg:text-center relative">

                    <img className="absolute inset-0 w-full h-full object-contain object-center opacity-20 z-0" src={arb} alt="Logo"></img>

                    <div className="lg:w-1/8 flex flex-col justify-center z-10" data-aos="zoom-in" data-aos-delay="200">
                        <div className="text-6xl font-bold tracking-tight text-black mt-1">No more MEV. </div>
                        <p className="text-black text-2xl text-center font-semibold opacity-80 mt-4">Cloak curbs pre-trade transparency through cryptographic security. <br/> Your trades are immune to MEV front-running, back-running, and sandwich attacks.</p>
                        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            {/* Any other content you want to add in the future */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center m-auto  mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                <div className="flex flex-col  lg:flex-row mt-32 py-8 justify-center text-center lg:text-center relative">

                    <img className="absolute inset-0 w-full h-full object-contain object-center opacity-20 z-0" src={stck} alt="Logo"></img>

                    <div className="lg:w-1/8 flex flex-col justify-center z-10" data-aos="zoom-in" data-aos-delay="200">
                        <div className="text-6xl font-bold tracking-tight text-black mt-1">Goodbye, slippage.</div>
                        <p className="text-black text-2xl text-center font-semibold opacity-80 mt-4">Cloak guarantees the best prices through NBBO midpoint execution.</p>
                        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            {/* Any other content you want to add in the future */}
                        </div>
                    </div>
                </div>
            </div>



            
        </div>
    )
}

export default Services;