import Image from 'next/image'
import React from 'react'
import { CloseFullscreen } from '@mui/icons-material'
import { Close } from '@mui/icons-material'

function FullScreenImage({title, image, close}) {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-950 z-30 flex flex-col justify-center items-center'>
            <Image src={`/MicroServices/${image}.jpg`} width={1000} height={1000} alt={title}></Image>
            <button className='fixed top-12 right-12 hover:bg-slate-500 bg-slate-600 p-2 sm:text-xl rounded-full' onClick={()=>{close()}}><Close /></button>
        </div>
    )
}

export default FullScreenImage