"use client"
import Loader from '@/app/components/Loader'
import MicroServicePage from '@/app/components/MicroServicePage'
import React, { Suspense } from 'react'

function page() {
    return (
        <Suspense fallback={<Loader/>} >
            <MicroServicePage/>
        </Suspense>
    )
}
export default page