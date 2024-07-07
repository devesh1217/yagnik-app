import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import NotFound from '../not-found';
import Error from '../error';
import { useParams } from 'next/navigation';
import Loader from './Loader';

async function ServicePage() {
    const params = useParams();
    const id = params.id

    const [service, setService] = useState({});
    const [data, setData] = useState([]);
    const [isLoading, setLoadingStatus] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const [res, resp] = await Promise.all([
                axios.get('/api/microservices/all/' + id),
                axios.get('/api/services/get/' + id)
            ]);
            if (!res.data.success || !resp.data.success) {
                setLoadingStatus(false);
                return <Error />
            }
            if (res.data.notFound || resp.data.notFound) {
                setLoadingStatus(false);
                return <NotFound />
            }
            setService(resp.data.data);
            setData(res.data.data);
            setLoadingStatus(false);
        }
        getData();
    }, []);

    

    return isLoading ? <Loader /> :
    (
        <div className='my-16 mx-8 sm:mx-64'>
            <div className='mb-10 text-xs sm:text-lg flex items-center gap-1 flex-wrap'>
                <Link className=' bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services'}>Services</Link>
                <span>&gt;</span>
                <Link className=' bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services/' + service.title}>{service.title}</Link>
            </div>
            <h1 className='text-4xl mb-10'>{service.title}</h1>
            <div className='flex flex-col sm:flex-row justify-between items-stretch gap-8'>
                <div className='mb-10'>
                    <Image src={`/Services/${service.image}.png`} width={500} height={1000} alt={service.id}></Image>
                </div>
                <div className='mb-10'>
                    <ul className='space-y-7 text-amber-200 list-decimal list-inside h-full flex flex-col justify-center sm:text-2xl text-lg'>
                        {
                            data.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link href={'/services/' + id + '/' + item.id} className='underline'>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServicePage