"use client";
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import hero from '../../public/home-page-ill.png'
import Typed from 'typed.js'
import Link from 'next/link';

function Home() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Aadhaar Card", "PAN Card", "Driving Licence", "RC Book", "Passport", "Property Related Work"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 0,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 200,
            loop: 1
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='w-full py-24 flex justify-evenly items-center'>
            <div>
                <h1 className='text-6xl mb-5'>Sai General Store</h1>
                <h2 className='text-3xl text-sky-400 mb-5'>All kind government services available.</h2>
                <span ref={el} className='text-2xl text-amber-300 mb-5 h-5'></span>
                <div className='mt-5'>
                    <Link href={'/services'} className='bg-gray-700 hover:bg-gray-800 rounded-full p-1 text-xl'>Explore All Services</Link>
                </div>
            </div>
            <div>
                <Image src={hero} alt='Biometric ID Card' width={500} height={500}></Image>
            </div>
        </div>
    )
}

export default Home