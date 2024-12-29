import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";

// Ensure the service worker takes control immediately
self.skipWaiting();
clientsClaim();

// Cache files during the service worker installation
precacheAndRoute(self.__WB_MANIFEST || []);

// Push notification handler
self.addEventListener('push', event => {
    const data = event.data.json();
    const title = data.title || 'New Notification';
    const options = {
        body: data.body || 'You have a new message!',
        icon: data.icon || '/logo.png',
        badge: '/logo.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2',
        },
    };

    // Show notification
    event.waitUntil(self.registration.showNotification(title, options));
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close();
    const url = event.notification.data?.url || '/';
    event.waitUntil(clients.openWindow(url));
});
