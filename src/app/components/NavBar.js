"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

function NavBar() {
    const [isOpen, setMenu] = useState(false);
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

    return (
        <>
            <nav className="flex justify-between items-center w-full px-4 py-2 shadow-lg shadow-gray-900 bg-slate-950 mb-4 sticky top-0 z-10">
                <Link className="hover:cursor-pointer flex gap-x-2 items-center" href={'/'}>
                    <Image src={'/icons/logo.png'} width={40} height={40} alt="Logo"></Image>
                    <div className="text-2xl">Sai General Store</div>
                </Link>
                <div className="flex gap-x-8">
                    {
                        !(isMobile) ?
                            <>
                                <Link className="hover:cursor-pointer hover:underline text-xl" href={'/'}>Home</Link>
                                <Link className="hover:cursor-pointer hover:underline text-xl" href={'/services'}>Services</Link>
                                <Link className="hover:cursor-pointer hover:underline text-xl" href={'/contact'}>Contact Us</Link>
                            </>
                            : <button className='text-3xl' onClick={() => { setMenu(prev => !prev) }}>=</button>
                    }

                </div>
            </nav>
            {
                isOpen ? <MobileMenu setMenu={setMenu}></MobileMenu> : <></>
            }

        </>
    )
}

export default NavBar