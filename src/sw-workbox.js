importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// Set configuration for workbox
workbox.setConfig({
  debug: true,
});

// PRECACHING
const fileToCaches = [
  '/',
  '/index.html',
  '/favicon.png',
  '/manifest.json',
  '/images/hero/hero-image-large.jpg',
  '/images/manifest-icons/icon-72x72.png',
  '/images/manifest-icons/icon-96x96.png',
  '/images/manifest-icons/icon-144x144.png',
  '/images/manifest-icons/icon-192x192.png',
  '/images/manifest-icons/icon-512x512.png',
  '/scripts/data-source.js',
  '/scripts/dom-manipulation.js',
  '/scripts/index.js',
  '/styles/style.css',
];
workbox.precaching.precacheAndRoute(fileToCaches);

// RUNTIME CACHING
const { registerRoute } = workbox.routing;
const { StaleWhileRevalidate, CacheFirst } = workbox.strategies;

const BASE_URL = 'https://restaurant-api.dicoding.dev';

/* Google Fonts */
registerRoute(
  ({ url }) => {
    return url.origin === 'https://fonts.googleapis.com';
  },
  new StaleWhileRevalidate({
    cacheName: 'google-fonts',
  }),
);

/* Restaurant API */
registerRoute(
  ({ request, url }) => {
    return request.destination === 'image' && url.origin === BASE_URL;
  },
  new StaleWhileRevalidate({
    cacheName: 'restaurant-api-images',
  }),
);

registerRoute(
  ({ url }) => {
    return url.origin === BASE_URL;
  },
  new StaleWhileRevalidate({
    cacheName: 'restaurant-api',
  }),
);
