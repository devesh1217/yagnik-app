"use client";
import React, { Suspense } from 'react'
import CardGrid from '../components/CardGrid';
import Loader from '../components/Loader';


function Page() {

    return (
        <div className='my-12 sm:mx-20'>
            <Suspense key={'sai'} fallback={<Loader></Loader>}>
                
                <CardGrid />
            </Suspense>
        </div>
    )
}

export default Page