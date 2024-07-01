import React from 'react'
import Link from 'next/link'

function ContactCard({ text, icon, link }) {
    return (
        <Link href={link}>
            <div className='relative w-60 h-auto p-2 flex flex-col justify-center items-center bg-slate-900 hover:bg-slate-800 rounded-md overflow-hidden'>
                {icon}
                <div className='underline'>{text}</div>
            </div>
        </Link>
    )
    
}
export default ContactCard