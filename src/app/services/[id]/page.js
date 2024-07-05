"use client";
import Loader from '@/app/components/Loader';
import ServicePage from '@/app/components/ServicePage';
import React, { Suspense } from 'react'

async function page() {
    return (
        <Suspense fallback={<Loader></Loader>}>
            <ServicePage></ServicePage>
        </Suspense>
    )
}
export default page