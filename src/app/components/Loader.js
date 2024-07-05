"use client"
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Loader() {
    return (
        <div className='w-full h-screen flex justify-center items-center pb-32'>
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                strokeColor="#ffffff"
                strokeWidth="3"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loader