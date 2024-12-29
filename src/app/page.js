"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import Link from 'next/link';

import { subscribeUser, unsubscribeUser, sendNotification } from './actions'

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4); // Add missing padding
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/'); // Replace URL-safe chars
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  

function PushNotificationManager() {
    const [isSupported, setIsSupported] = useState(false);
    const [subscription, setSubscription] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            setIsSupported(true);
            registerServiceWorker();
        }
    }, []);

    async function registerServiceWorker() {
        const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
            updateViaCache: 'none',
        });
        const sub = await registration.pushManager.getSubscription();
        setSubscription(sub);
    }

    async function subscribeToPush() {
        const registration = await navigator.serviceWorker.ready;
        const sub = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(
                process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
            ),
        });
        setSubscription(sub);
        await subscribeUser(sub);
    }

    async function unsubscribeFromPush() {
        await subscription?.unsubscribe();
        setSubscription(null);
        await unsubscribeUser();
    }

    async function sendTestNotification() {
        if (subscription) {
            await sendNotification(message);
            setMessage('');
        }
    }

    if (!isSupported) {
        return <p>Push notifications are not supported in this browser.</p>;
    }

    return (
        <div>
            <h3>Push Notifications</h3>
            {subscription ? (
                <>
                    <p>You are subscribed to push notifications.</p>
                    <button onClick={unsubscribeFromPush}>Unsubscribe</button>
                    <input
                        type="text"
                        placeholder="Enter notification message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={sendTestNotification}>Send Test</button>
                </>
            ) : (
                <>
                    <p>You are not subscribed to push notifications.</p>
                    <button onClick={subscribeToPush}>Subscribe</button>
                </>
            )}
        </div>
    );
}

function InstallPrompt() {
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        setIsIOS(
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        );

        setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
    }, []);

    if (isStandalone) {
        return null; // Don't show install button if already installed
    }

    return (
        <div>
            <h3>Install App</h3>
            <button>Add to Home Screen</button>
            {isIOS && (
                <p>
                    To install this app on your iOS device, tap the share button
                    <span role="img" aria-label="share icon">
                        {' '}
                        ⎋{' '}
                    </span>
                    and then &quot; Add to Home Screen &quot;
                    <span role="img" aria-label="plus icon">
                        {' '}
                        ➕{' '}
                    </span>
                    .
                </p>
            )}
        </div>
    );
}

function Home() {

    const el = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize(); // Set the initial value
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        "use client"
        const typed = new Typed(el.current, {
            strings: ["Aadhaar Card", "PAN Card", "Driving Licence", "RC Book", "Passport", "Property Related Work"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 0,
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 500,
            loop: 1
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='w-full h-screen sm:py-24 py-8 px-4 sm:px-0 flex flex-col sm:flex-row justify-start sm:justify-evenly items-center'>
            <div>
                <div className='flex sm:flex-row flex-col justify-center items-center gap-10 mb-7'>
                    <Image src={!isMobile ? '/logo.png' : '/home.png'} alt='Biometric ID Card' width={180} height={180}></Image>
                    <h1 className='text-6xl mb-5 hidden sm:inline-block'>Sai General <br></br>Store</h1>
                    <h1 className='text-4xl mb-5 sm:hidden'>Sai General Store</h1>
                </div>
                <h2 className='text-3xl text-sky-400 mb-7 italic text-center'>All kind government services available.</h2>
                <div className='flex justify-center sm:justify-normal'><span ref={el} className='text-2xl text-amber-300 mb-7 h-5'></span></div>
                <div className='mt-7 flex justify-center sm:justify-normal'>
                    <Link href={'/services'} className='bg-gray-700 hover:bg-gray-800 rounded-full p-1 text-xl hover:cursor-pointer'>Explore All Services</Link>
                </div>
            </div>
            <div className='hidden sm:inline-block'>
                <Image src={'/home.png'} alt='Biometric ID Card' width={500} height={500}></Image>
            </div>
            <PushNotificationManager />
            {/* <InstallPrompt /> */}
        </div>
    )
}

export default Home