import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NotFound from '../not-found';
import Error from '../error';
import { useParams } from 'next/navigation';

async function MicroServicePage() {

    const params = useParams();
    const [res, resp] = await Promise.all([
        axios.get('/api/microservices/get/' + params.subid),
        axios.get('/api/microservices/get-service-name/' + params.id)
    ]);
    if (!res.data.success || !resp.data.success) {
        return <Error />
    }
    if (res.data.notFound || resp.data.notFound) {
        return <NotFound />
    }
    const service = resp.data.data.title;
    const data = res.data.data[0];


    return (
        <div className='my-16 mx-8 sm:mx-72'>
            <div className='mb-10 text-xs sm:text-lg flex items-center gap-1 flex-wrap'>
                <Link className=' bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services'}>Services</Link>
                <span>&gt;</span>
                <Link className=' bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services/' + params.id}>{service}</Link>
                <span>&gt;</span>
                <Link className=' bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={`/services/${params.id}/${params.subid}`}>{data.title}</Link>
            </div>
            <div className='mb-10'>
                <h1 className='text-4xl mb-10'>{data.title}</h1>
                <Image src={`/Services/${data.image}.png`} width={500} height={1000} alt={data.title}></Image>
            </div>
        </div>
    )
}
export default MicroServicePage;