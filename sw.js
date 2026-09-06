/*
 * 最小 Service Worker：目的只有一個——讓「加到主畫面」可安裝，
 * 並在網路不穩時仍能開得起頁面。刻意不做完整離線功能。
 *
 * 安全性原則（不可放寬）：
 * 1. 只處理「同源 + GET」的請求。所有 API 呼叫（Groq / Gemini /
 *    LINE / Google Sheets）都是跨源，一律不進快取、不經手，避免
 *    語音逐字稿或 API Key 相關回應被寫進 Cache Storage 而落地。
 * 2. app shell 採 network-first：GitHub Pages 更新後使用者能拿到
 *    新版；離線時才退回快取，避免使用者長期卡在舊版。
 */
const CACHE_NAME = 'voice-card-shell-v1';

// 相對路徑：GitHub Pages 部署在子路徑下 (/repo-name/) 也能正確運作
const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // addAll 全有全無：任一檔案 404 會讓整個 install 失敗，
      // 因此逐檔加入並忽略個別失敗（例如 icon 還沒放上去）
      .then((cache) => Promise.allSettled(
        SHELL_ASSETS.map((url) => cache.add(url))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // 非 GET（API POST 等）直接放行，不經手
  if (req.method !== 'GET') return;

  // 跨源請求直接放行：不快取任何 API 回應
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        // 只快取成功的基本回應，避免把錯誤頁或 opaque 回應存起來
        if (res && res.ok && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      })
      .catch(async () => {
        const cached = await caches.match(req);
        if (cached) return cached;
        // 導覽請求（直接開網址）離線時退回首頁
        if (req.mode === 'navigate') {
          const shell = await caches.match('./index.html');
          if (shell) return shell;
        }
        return new Response('離線中，且本機沒有可用的快取內容。', {
          status: 503,
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      })
  );
});
