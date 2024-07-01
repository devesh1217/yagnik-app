import React from 'react'
import ContactCard from '../components/ContactCard'
import { Email, LocationOn, WhatsApp } from '@mui/icons-material'

export const metadata = {
    title: "Contact | Sai General Store",
    description: "Generated by create next app",
};

function page() {
    const data = [
        {
            link: 'mailto:email',
            icon: <Email className='text-7xl'></Email>,
            text: 'email'
        },
        {
            link: 'tel:no',
            icon: <WhatsApp className='text-7xl'></WhatsApp>,
            text: 'no'
        },
        {
            link: 'map',
            icon: <LocationOn className='text-7xl'></LocationOn>,
            text: 'Location'
        },
    ]
    return (
        <div className='m-16'>
            <h1 className='text-4xl text-center mb-10'>Contact Us</h1>
            <div className=''>
                <div className='flex justify-center items-center w-full gap-x-5'>
                    {
                        data.map(item => {
                            return (
                                <ContactCard {...item} key={item.text} ></ContactCard>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default page