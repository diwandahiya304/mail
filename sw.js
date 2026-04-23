const CACHE_NAME = 'gmail-clone-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './css/variables.css',
  './css/base.css',
  './css/components.css',
  './css/inbox.css',
  './css/drawer.css',
  './css/search.css',
  './css/detail.css',
  './css/compose.css',
  './js/icons.js',
  './js/data.js',
  './js/drawer.js',
  './js/inbox.js',
  './js/search.js',
  './js/detail.js',
  './js/compose.js',
  './js/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
