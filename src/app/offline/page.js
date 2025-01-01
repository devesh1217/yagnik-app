import React from 'react'
import Image from 'next/image'

function OfflinePage() {
    return (
        <div className='w-full h-screen text-center flex flex-col items-center justify-center pb-32'>
            <h1 className='sm:text-5xl text-3xl mb-5'>You are Offline or Unkonw Network Error!</h1>
            <Image src={'/images/offline.png'} width={300} height={300} alt='Error'></Image>
            <div className='sm:text-3xl text-xl'>Check your internet connection and try again later</div>
        </div>
    )
}

export default OfflinePage