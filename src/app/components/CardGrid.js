import React from 'react'
import axios from 'axios';
import Card from './Card';
import Link from 'next/link';

async function CardGrid() {
    
    const {data} = await Promise.resolve(axios.get('/api/services'));
    const list = data.data;

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