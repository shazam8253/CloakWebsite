import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import net from '../images/icons8-internet-100.png';
import arb from '../images/icons8-arbitrage-64.png';
import stck from '../images/icons8-stock-market-100 (1).png';

const Services = () => {

    return (
        <div id="services" className=" py-12" >
            <section data-aos="zoom-in-down">
            <div className=" my-10 py-4 grid grid-cols-3 gap-4 mx-64">
                <div className="col-span-2">
                    <h2 className="my-2 text-center text-5xl text-white font-extrabold">Cloak is the world's first decentralized dark pool.</h2>
                </div>
                <div>
                    <h2 className="mt-8 mx-12 text-center text-xl lg:text-2xl font-semibold text-white">A service tailored for your <b>high capital</b> trades. We got your back.</h2>
                </div>
                <div>
                    <p className="text-center text-xl text-white mt-12 px-8">
                        Under the hood, Cloak is a hardware and cryptographically secure protocol, ensuring privacy and security.
                    </p>
                </div>
                <div>
                    <p className="text-center text-xl text-white  mt-12 px-8">
                        We combine zk and the latest generation of TEEs to secure your data.
                    </p>
                </div>
                <div>
                    <p className="text-center text-xl text-white mt-12 px-8">
                        We are the protocol that will protect your alpha on chain.
                    </p>
                </div>
            </div>
            </section>

            <div className="flex items-center justify-center m-auto  mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                <div className="flex flex-col  lg:flex-row mt-32 py-8 justify-center text-center lg:text-center relative">

                    <img className="absolute inset-0 w-full h-full object-contain object-center opacity-20 z-0" src={net} alt="Logo"></img>

                    <div className="lg:w-1/8 flex flex-col justify-center z-10" data-aos="zoom-in" data-aos-delay="200">
                        <div className="text-7xl font-bold tracking-tight text-[#a192f8] mt-1">End-to-end Private</div>
                        <p className="text-white opacity-80 mt-4">Our matching engine is protected from both the producer and the clients. It is hardware secured and verified compute.</p>
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
                        <div className="text-7xl font-bold tracking-tight text-white mt-1">MEV Resistant</div>
                        <p className="text-white opacity-80 mt-4">All transaction data is completly cryptographically secured, and can only be viewed by the owner of the private key. This means your alpha is protected on chain.</p>
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
                        <div className="text-7xl font-bold tracking-tight text-[#a192f8] mt-1">Slippage Resistant</div>
                        <p className="text-white opacity-80 mt-4">All transaction data is completly cryptographically secured, and can only be viewed by the owner of the private key. This means your alpha is protected on chain.</p>
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