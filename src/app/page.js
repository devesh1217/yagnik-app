"use client";
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Link from 'next/link';

function Home() {

    const el = useRef(null);

    useEffect(() => {
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
        <div className='w-full py-24 flex justify-evenly items-center'>
            <div>
                <div className='flex justify-center items-center gap-10 mb-7'>
                    <Image src={'/logo.png'} alt='Biometric ID Card' width={180} height={180}></Image>
                    <h1 className='text-6xl mb-5'>Sai General <br></br>Store</h1>
                </div>
                <h2 className='text-3xl text-sky-400 mb-7'>All kind government services available.</h2>
                <span ref={el} className='text-2xl text-amber-300 mb-7 h-5'></span>
                <div className='mt-7'>
                    <Link href={'/services'} className='bg-gray-700 hover:bg-gray-800 rounded-full p-1 text-xl'>Explore All Services</Link>
                </div>
            </div>
            <div>
                <Image src={'/home.png'} alt='Biometric ID Card' width={500} height={500}></Image>
            </div>
        </div>
    )
}

export default Home