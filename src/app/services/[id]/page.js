import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page({ params }) {
    const data = [
        {
            id: 'new-pan-card-application',
            title: 'New Pan Card Application',
        },
        {
            id: 'update-pan-card',
            title: 'Update Pan Card',
        },
        {
            id: 'e-pan-card',
            title: 'E-PAN Card',
        }
    ];

    return (
        <div className='my-16 mx-8 sm:mx-72'>
            <div className='mb-10'>
                <Link className='text-xl bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services'}>Services</Link> <span className='text-xl'>&gt;</span> <Link className='text-xl bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'#'}>Pan Card</Link>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-stretch'>
                <div className='mb-10'>
                    <h1 className='text-4xl mb-10'>Pan Card Related Services</h1>
                    <Image src={'/Services/2.png'} width={500} height={1000} alt='Pan Card'></Image>
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
export default page