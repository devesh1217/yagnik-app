"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import Link from 'next/link';

function Home() {

    const el = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize(); // Set the initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        "use client"
        const typed = new Typed(el.current, {
            strings: ["Aadhaar Card", "PAN Card", "Driving Licence", "RC Book", "Passport", "Property Related Work"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 0,
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 500,
            loop: 1
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='w-full h-screen sm:py-24 py-8 px-4 sm:px-0 flex flex-col sm:flex-row justify-start sm:justify-evenly items-center'>
            <div>
                <div className='flex sm:flex-row flex-col justify-center items-center gap-10 mb-7'>
                    <Image src={!isMobile ? '/logo.png' : '/home.png'} alt='Biometric ID Card' width={180} height={180}></Image>
                    <h1 className='text-6xl mb-5 hidden sm:inline-block'>Sai General <br></br>Store</h1>
                    <h1 className='text-4xl mb-5 sm:hidden'>Sai General Store</h1>
                </div>
                <h2 className='text-3xl text-sky-400 mb-7 italic text-center'>All kind government services available.</h2>
                <div className='flex justify-center sm:justify-normal'><span ref={el} className='text-2xl text-amber-300 mb-7 h-5'></span></div>
                <div className='mt-7 flex justify-center sm:justify-normal'>
                    <Link href={'/services'} className='bg-gray-700 hover:bg-gray-800 rounded-full p-1 text-xl hover:cursor-pointer'>Explore All Services</Link>
                </div>
            </div>
            <div className='hidden sm:inline-block'>
                <Image src={'/home.png'} alt='Biometric ID Card' width={500} height={500}></Image>
            </div>
        </div>
    )
}

export default Home