"use client";
import React, { Suspense } from 'react'
import CardGrid from '../components/CardGrid';
import Loader from '../components/Loader';


function Page() {

    return (
        <div className='my-12 mx-20'>
            <h1 className='w-full text-5xl text-center mb-12'>Our Services</h1>
            <Suspense key={'sai'} fallback={<Loader></Loader>}>
                <CardGrid />
            </Suspense>
        </div>
    )
}

export default Page