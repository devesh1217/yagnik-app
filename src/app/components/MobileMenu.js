import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MobileMenu({setMenu}) {
    return (
        <div className={'w-screen h-screen z-20 p-8 fixed top-0 bg-slate-950'}>
            <div className='flex justify-end mb-10'>
                <button className='text-3xl' onClick={() => {setMenu(prev => !prev)}}>X</button>
            </div>
            <Link href={'/'} onClick={() => {setMenu(prev => !prev)}} className='hover:cursor-pointer flex justify-start items-center gap-5'>
                <Image src={'/logo.png'} width={50} height={50} alt='Logo'></Image>
                <h1 className='text-3xl'>Sai General Store</h1>
            </Link>
            <div className='mt-16 underline flex flex-col gap-8'>
                <Link href={'/'} onClick={() => {setMenu(prev => !prev)}} className='hover:cursor-pointer flex justify-start items-center gap-5 text-3xl'>Home</Link>
                <Link href={'/services'} onClick={() => {setMenu(prev => !prev)}} className='hover:cursor-pointer flex justify-start items-center gap-5 text-3xl'>Services</Link>
                <Link href={'/contact'} onClick={() => {setMenu(prev => !prev)}} className='hover:cursor-pointer flex justify-start items-center gap-5 text-3xl'>Contact Us</Link>
            </div>
        </div>
    )
}

export default MobileMenu