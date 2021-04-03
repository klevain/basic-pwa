var cacheName = 'basic-pwa';
var baseDir = '/basic-pwa';
var filesToCache = [
  baseDir + '/',
  baseDir + '/index.html',
  baseDir + '/css/style.css',
  baseDir + '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
