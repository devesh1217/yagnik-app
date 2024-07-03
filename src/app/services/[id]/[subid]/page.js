import Loader from '@/app/components/Loader'
import MicroServicePage from '@/app/components/MicroServicePage'
import React, { Suspense } from 'react'

function page({ params }) {
    return (
        <Suspense fallback={<Loader/>} >
            <MicroServicePage params={params} />
        </Suspense>
    )
}
export default page