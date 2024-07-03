import Image from 'next/image';
import React from 'react';

function Card({ item }) {
    return (
        <div className='relative w-60 h-auto bg-gray-950 rounded-md overflow-hidden group'>
            <div className='absolute inset-0 flex justify-center items-center bg-slate-800 bg-opacity-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-95 transition-opacity duration-300'>
                <div>Read More...</div>
            </div>
            <Image className='mb-2' src={`/Services/${item.image}.png`} width={1000} height={1000} alt={item.title}></Image>
            <h1 className='text-xl p-2'>{item.title}</h1>
            <div className='p-2'>{item.description.substring(0,70)+'...'}</div>
        </div>
    );
}

export default Card;
