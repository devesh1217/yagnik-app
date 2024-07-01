"use client";
import React from 'react'
import Card from '../components/Card'
import Link from 'next/link'
import axios from 'axios';
import { useState, useEffect } from 'react';


function Page() {
    const [list, setData] = useState([]);

    useEffect(()=>{
        const getData = async () => {
            const res = await axios.get('/api/services')
            console.log(res.data)
            setData(res.data.data)
        }
        getData();
    },[])

    
    
    return (
        <div className='my-12 mx-20'>
            <h1 className='w-full text-5xl text-center mb-12'>Our Services</h1>
            <div className='flex flex-wrap justify-evenly items-stretch m-4 p-4 gap-8'>
                {
                    list.map((item) => {
                        return (
                            <Link href={'/services/'+item.id} key={item.id}>
                                <Card item={item}></Card>
                            </Link>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Page