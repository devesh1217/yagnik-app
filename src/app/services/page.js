import React, { Suspense } from 'react'
import CardGrid from '../components/CardGrid';
import Loader from '../components/Loader';

export const metadata = {
    title: "Services | Sai General Store",
};

function Page() {

    return (
        <div className='my-12 sm:mx-20'>
            <h1 className='w-full sm:text-5xl text-4xl text-center mb-12'>Our Services</h1>
            <Suspense key={'sai'} fallback={<Loader></Loader>}>
                <CardGrid />
            </Suspense>
        </div>
    )
}

export default Page