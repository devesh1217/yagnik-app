import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NotFound from '../not-found';
import Error from '../error';
import { useParams } from 'next/navigation';
import Loader from './Loader';
import FullScreenImage from './FullScreenImage';

async function MicroServicePage() {

    const params = useParams();

    const [data, setData] = useState({});
    const [service, setService] = useState("");
    const [isLoading, setLoadingStatus] = useState(true);
    const [isImageOpen, setIamgeStatus] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const [res, resp] = await Promise.all([
                axios.get('/api/microservices/get/' + params.subid),
                axios.get('/api/microservices/get-service-name/' + params.id)
            ]);
            if (!res.data.success || !resp.data.success) {
                setLoadingStatus(false);
                return <Error />
            }
            if (res.data.notFound || resp.data.notFound) {
                setLoadingStatus(false);
                return <NotFound />
            }
            console.log(res.data.data, resp.data.data)
            setService(resp.data.data.title);
            setData(res.data.data[0]);
            setLoadingStatus(false);
        }
        getData();
    }, []);

    const handleClick = () => {
        setIamgeStatus(true);
    }

    return isLoading ? <Loader/> :
    (
        <div className='my-16 mx-8 sm:mx-72'>
            <div className='mb-10 text-xs sm:text-lg flex items-center gap-1 flex-wrap'>
                <Link className=' bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services'}>Services</Link>
                <span>&gt;</span>
                <Link className=' bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={'/services/' + params.id}>{service}</Link>
                <span>&gt;</span>
                <Link className=' bg-slate-800 p-2 hover:bg-slate-700 rounded-full' href={`/services/${params.id}/${params.subid}`}>{data.title}</Link>
            </div>
            
            <div className='mb-10'>
                <h1 className='text-4xl mb-10'>{data.title}</h1>
                <Image className='hover:cursor-pointer' src={`/MicroServices/${data.image}.jpg`} width={500} height={1000} alt={data.title} onClick={handleClick}></Image>
            </div>
            {
                isImageOpen ? <FullScreenImage image={data.image} title={data.title} close={setIamgeStatus} /> : <></>
            }
        </div>
    )
}
export default MicroServicePage;