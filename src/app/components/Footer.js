import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Email, LocationOn, Phone, WhatsApp } from '@mui/icons-material'

function Footer() {
    return (
        <div className='bg-gray-900 py-10 px-12'>
            <div className='flex justify-center items-center gap-x-10 gap-y-5 mb-10 flex-col sm:flex-row'>
                <Link href={'/'} className='flex justify-start items-center gap-5'>
                    <Image src={'/logo.png'} width={50} height={50} alt='Logo'></Image>
                    <h1 className='text-2xl sm:text-3xl'>Sai General Store</h1>
                </Link>
                <div className='border-t-2 sm:border-l-2 sm:border-t-0 border-white h-0 sm:h-10 w-full sm:w-0'></div>
                <div className='flex justify-center items-center gap-10'>
                    <Link className='sm:text-xl hover:underline' href={'/'}>Home</Link>
                    <Link className='sm:text-xl hover:underline' href={'/services'}>Services</Link>
                    <Link className='sm:text-xl hover:underline' href={'/contact'}>Contact Us</Link>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-evenly items-center mb-5'>
                <div className='flex flex-col justify-center items-start gap-5 sm:text-xl sm:w-1/2 mb-5 sm:mb-0'>
                    <Link className='hover:underline' href={'tel:+919714271310'}>
                        <Phone></Phone> +91 97142 71310
                    </Link>
                    <Link className='hover:underline' href={'mailto:SAIGENERAL1310@GMAIL.COM'}>
                        <Email /> SAIGENERAL1310@GMAIL.COM
                    </Link>
                    <Link className='hover:underline' href={'https://wa.link/6qt3f2'}>
                        <WhatsApp /> +91 97142 71310
                    </Link>
                    <Link className='hover:underline' href={'https://goo.gl/maps/6M7kLMzPuDn6uZbS7'}>
                        <LocationOn /> G-1 Surdhara Complex, Opp. Pragati Co-Op. Bank, Nr. Saraswati Complex, Manjalpur Village Road, Vadodara, 390011
                    </Link>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d461.51707104935156!2d73.1909465!3d22.272816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5dc581d6d8b%3A0x5617feaa30000000!2sSai%20Genral%20store!5e0!3m2!1sen!2sin!4v1720021014595!5m2!1sen!2sin" width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='text-gray-400 text-center'> &copy; 2024, Sai General Store.</div>
        </div>
    )
}

export default Footer