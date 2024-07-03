"use client";
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

async function MicroServicePage({ params }) {
    const [data, setData] = useState({title: "", image: 0, id: ""});
    const [service, setService] = useState("");

    useEffect(()=>{
        const getData = async () => {
            try {
                const [res, resp] = await Promise.all([
                    axios.get('/api/microservices/get/' + params.subid),
                    axios.get('/api/microservices/get-service-name/' + params.id)
                ]);
                setData(res.data.data[0]);
                setService(resp.data.data.title);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        getData();
    },[])

    return (
        <div className='my-16 mx-8 sm:mx-72'>
            <div className='mb-10'>
                <Link className='text-xl bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services'}>Services</Link>
                <span className='text-xl'>&gt;</span>
                <Link className='text-xl bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services/'+params.id}>{service}</Link>
                <span className='text-xl'>&gt;</span>
                <Link className='text-xl bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={`/services/${params.id}/${params.subid}`}>{data.title}</Link>
            </div>
            <div className='mb-10'>
                <h1 className='text-4xl mb-10'>{data.title}</h1>
                <Image src={`/Services/${data.image}.png`} width={500} height={1000} alt={data.title}></Image>
            </div>
        </div>
    )
}
export default MicroServicePage;