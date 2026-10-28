// Offline support: the app shell is fetched fresh when online and served from
// cache when offline; hashed build assets never change, so cache them for good.
const CACHE = 'yds-v1';

// Precache the shell and the hashed assets it links, so the app opens offline
// even if the first visit ended before anything was fetched through here.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      const res = await fetch('index.html', { cache: 'no-cache' });
      const html = await res.clone().text();
      await cache.put('index.html', res);
      const assets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
        .map((m) => new URL(m[1], self.registration.scope))
        .filter((u) => u.origin === self.location.origin)
        .map((u) => u.href);
      // addAll rejects duplicates, and the icon is linked twice.
      await cache.addAll([...new Set(assets)]);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('index.html', copy));
          return res;
        })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((hit) =>
      hit ||
      fetch(request).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(request, copy));
        }
        return res;
      })
    )
  );
});
