"use client";
import Loader from '@/app/components/Loader';
import ServicePage from '@/app/components/ServicePage';
import React, { Suspense } from 'react'

function page({ params }) {
    return (
        <Suspense fallback={<Loader></Loader>}>
            <ServicePage params={params} ></ServicePage>
        </Suspense>
    )
}
export default page