import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

async function ServicePage({ params }) {
    const [data, setData] = useState([]);
    const [service, setService] = useState({});
    useEffect(() => {
        const getData = async () => {
            try {
                const [res, resp] = await Promise.all([
                    axios.get('/api/microservices/all/' + params.id),
                    axios.get('/api/services/get/' + params.id)
                ]);

                setData(res.data.data);
                setService(resp.data.data[0]);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        getData();
    }, []);

    return (
        <div className='my-16 mx-8 sm:mx-64'>
            <div className='mb-10'>
                <Link className='text-xl bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services'}>Services</Link>
                <span className='text-xl'>&gt;</span>
                <Link className='text-xl bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services/' + service.title}>{service.title}</Link>
            </div>
                    <h1 className='text-4xl mb-10'>{service.title}</h1>
            <div className='flex flex-col sm:flex-row justify-between items-stretch gap-8'>
                <div className='mb-10'>
                    <Image src={`/Services/${service.image}.png`} width={500} height={1000} alt={service.id}></Image>
                </div>
                <div className='mb-10'>
                    <ul className='space-y-7 text-amber-200 list-decimal list-inside h-full flex flex-col justify-center text-2xl'>
                        {
                            data.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link href={'/services/' + params.id + '/' + item.id} className='underline'>{item.title}</Link>
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