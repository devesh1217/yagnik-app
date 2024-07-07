import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import Link from 'next/link';

async function CardGrid() {

    const [list, setList] = useState([]);
    useEffect(() => {
        async function getData(){
            const data = await Promise.resolve(axios.get('/api/services'));
            setList(data.data.data)
        }
        getData();
    },[]);

    return (
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
    )
}

export default CardGrid