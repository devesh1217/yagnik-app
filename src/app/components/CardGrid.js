"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Link from 'next/link';

async function CardGrid() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/api/services')
            setList(res.data.data)
        }
        getData();
    }, []);

    return (
        <>
            <h1 className='w-full sm:text-5xl text-4xl text-center mb-12'>Our Services</h1>
            <div className='flex flex-wrap justify-evenly items-stretch m-4 p-4 gap-8'>
                {
                    list.map((item) => {
                        return (
                            <Link href={'/services/' + item.id} key={item.id}>
                                <Card item={item}></Card>
                            </Link>
                        )

                    })
                }
            </div>
        </>
    )
}

export default CardGrid