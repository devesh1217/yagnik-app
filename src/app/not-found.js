import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function NotFound() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center pb-32'>
            <Image src={'/images/404.png'} width={300} height={300} alt='Error'></Image>
            <h1 className='sm:text-5xl text-3xl mb-5'>Error 404: Page not found</h1>
            <div className='sm:text-3xl text-xl'>Go to <Link href={'/'} className='text-amber-300 italic hover:underline hover:cursor-pointer'>Home Page</Link></div>
        </div>
    )
}

export default NotFound