if (!self.define) {
  let e,
    a = {};
  const s = (s, c) => (
    (s = new URL(s + ".js", c).href),
    a[s] ||
      new Promise(a => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, i) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[n]) return;
    let t = {};
    const r = e => s(e, n),
      d = { module: { uri: n }, exports: t, require: r };
    a[n] = Promise.all(c.map(e => d[e] || r(e))).then(e => (i(...e), t));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/1lNs9AT4COtXRFu8q--1I/_buildManifest.js",
          revision: "4d783cb19b62a1a700cc529b71d37f3f",
        },
        {
          url: "/_next/static/1lNs9AT4COtXRFu8q--1I/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1123-d0977c371071b8f5.js",
          revision: "d0977c371071b8f5",
        },
        {
          url: "/_next/static/chunks/1585.00655add8af8adc7.js",
          revision: "00655add8af8adc7",
        },
        {
          url: "/_next/static/chunks/2138-5e23b4efec692927.js",
          revision: "5e23b4efec692927",
        },
        {
          url: "/_next/static/chunks/2489-493fd8a52f68976f.js",
          revision: "493fd8a52f68976f",
        },
        {
          url: "/_next/static/chunks/2741.734764f66d43e501.js",
          revision: "734764f66d43e501",
        },
        {
          url: "/_next/static/chunks/3253-2e8e37117a00dacc.js",
          revision: "2e8e37117a00dacc",
        },
        {
          url: "/_next/static/chunks/3fff1979-bb37b24d4da1c9a4.js",
          revision: "bb37b24d4da1c9a4",
        },
        {
          url: "/_next/static/chunks/4544-0e9a735ab5f6b402.js",
          revision: "0e9a735ab5f6b402",
        },
        {
          url: "/_next/static/chunks/5094.c0245b92fd1a09ac.js",
          revision: "c0245b92fd1a09ac",
        },
        {
          url: "/_next/static/chunks/6455-ef45861ab8809b87.js",
          revision: "ef45861ab8809b87",
        },
        {
          url: "/_next/static/chunks/6517.e53744ba1ede2830.js",
          revision: "e53744ba1ede2830",
        },
        {
          url: "/_next/static/chunks/6859-29acce5db18d878a.js",
          revision: "29acce5db18d878a",
        },
        {
          url: "/_next/static/chunks/8023-32fa7e1e3e23c144.js",
          revision: "32fa7e1e3e23c144",
        },
        {
          url: "/_next/static/chunks/8589-d407ce90e6ff34d1.js",
          revision: "d407ce90e6ff34d1",
        },
        {
          url: "/_next/static/chunks/8811-4d3ecfe2f8c0180a.js",
          revision: "4d3ecfe2f8c0180a",
        },
        {
          url: "/_next/static/chunks/9086-343c799bc6011b87.js",
          revision: "343c799bc6011b87",
        },
        {
          url: "/_next/static/chunks/9376-be00c9aa64241a3f.js",
          revision: "be00c9aa64241a3f",
        },
        {
          url: "/_next/static/chunks/9651.f273097d59decf3d.js",
          revision: "f273097d59decf3d",
        },
        {
          url: "/_next/static/chunks/c16184b3-84598d65ced9e4c3.js",
          revision: "84598d65ced9e4c3",
        },
        {
          url: "/_next/static/chunks/fb7d5399-3fe2fdd15208259d.js",
          revision: "3fe2fdd15208259d",
        },
        {
          url: "/_next/static/chunks/framework-d51ece3d757c7ed2.js",
          revision: "d51ece3d757c7ed2",
        },
        {
          url: "/_next/static/chunks/main-7635c2bc71cd2946.js",
          revision: "7635c2bc71cd2946",
        },
        {
          url: "/_next/static/chunks/pages/_app-48903079abf5bfde.js",
          revision: "48903079abf5bfde",
        },
        {
          url: "/_next/static/chunks/pages/_error-da349fa2dbc03188.js",
          revision: "da349fa2dbc03188",
        },
        {
          url: "/_next/static/chunks/pages/admin-c2566ed9aed7f311.js",
          revision: "c2566ed9aed7f311",
        },
        {
          url: "/_next/static/chunks/pages/admin/commerce-7b8e4432b2078e03.js",
          revision: "7b8e4432b2078e03",
        },
        {
          url: "/_next/static/chunks/pages/admin/product-5a5242a82571827d.js",
          revision: "5a5242a82571827d",
        },
        {
          url: "/_next/static/chunks/pages/admin/product/register-0c063732bd7ebe0a.js",
          revision: "0c063732bd7ebe0a",
        },
        {
          url: "/_next/static/chunks/pages/admin/user-522a8c7d59d810fc.js",
          revision: "522a8c7d59d810fc",
        },
        {
          url: "/_next/static/chunks/pages/commerce-73db58b5dd65a304.js",
          revision: "73db58b5dd65a304",
        },
        {
          url: "/_next/static/chunks/pages/commerce/cart-2ffe6d7084f98571.js",
          revision: "2ffe6d7084f98571",
        },
        {
          url: "/_next/static/chunks/pages/commerce/list/%5Bparams%5D-3f0e1de94c91d56a.js",
          revision: "3f0e1de94c91d56a",
        },
        {
          url: "/_next/static/chunks/pages/commerce/order/cancled-939a09b6f88796c5.js",
          revision: "939a09b6f88796c5",
        },
        {
          url: "/_next/static/chunks/pages/commerce/order/complete-98e9bba918351e18.js",
          revision: "98e9bba918351e18",
        },
        {
          url: "/_next/static/chunks/pages/commerce/order/order-form-80a81697537ac425.js",
          revision: "80a81697537ac425",
        },
        {
          url: "/_next/static/chunks/pages/commerce/product/%5Bproductid%5D-5c820940896cd227.js",
          revision: "5c820940896cd227",
        },
        {
          url: "/_next/static/chunks/pages/commerce/survey-e545dc0c9699f069.js",
          revision: "e545dc0c9699f069",
        },
        {
          url: "/_next/static/chunks/pages/index-5d1636bf8883c717.js",
          revision: "5d1636bf8883c717",
        },
        {
          url: "/_next/static/chunks/pages/login/google-3e2cd3c4c67b3c30.js",
          revision: "3e2cd3c4c67b3c30",
        },
        {
          url: "/_next/static/chunks/pages/login/kakao-908a8f51d94a6f76.js",
          revision: "908a8f51d94a6f76",
        },
        {
          url: "/_next/static/chunks/pages/manage/%5Buserseq%5D-b74a9e866455e17b.js",
          revision: "b74a9e866455e17b",
        },
        {
          url: "/_next/static/chunks/pages/manage/add-057f83338786ab6e.js",
          revision: "057f83338786ab6e",
        },
        {
          url: "/_next/static/chunks/pages/manage/add/search-77fefa549caaaf0c.js",
          revision: "77fefa549caaaf0c",
        },
        {
          url: "/_next/static/chunks/pages/manage/myplant/%5Bpotseq%5D-d75e25be89d8be01.js",
          revision: "d75e25be89d8be01",
        },
        {
          url: "/_next/static/chunks/pages/mypage/%5Buserseq%5D-8470ad396a9ac52b.js",
          revision: "8470ad396a9ac52b",
        },
        {
          url: "/_next/static/chunks/pages/offline-dcb482e5a4abf67b.js",
          revision: "dcb482e5a4abf67b",
        },
        {
          url: "/_next/static/chunks/pages/search-6a1c3a902ce4534a.js",
          revision: "6a1c3a902ce4534a",
        },
        {
          url: "/_next/static/chunks/pages/search/ai-search-aab2435035b6310d.js",
          revision: "aab2435035b6310d",
        },
        {
          url: "/_next/static/chunks/pages/search/ai-search/camera-9c22fd0bae4bb131.js",
          revision: "9c22fd0bae4bb131",
        },
        {
          url: "/_next/static/chunks/pages/test-59cfc02d0b25fc29.js",
          revision: "59cfc02d0b25fc29",
        },
        {
          url: "/_next/static/chunks/pages/welcome-5ea68728bae4c119.js",
          revision: "5ea68728bae4c119",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-f269a93964e29b3a.js",
          revision: "f269a93964e29b3a",
        },
        {
          url: "/_next/static/css/dd062fba556b0451.css",
          revision: "dd062fba556b0451",
        },
        {
          url: "/_next/static/css/f1d5a30b5a4d1378.css",
          revision: "f1d5a30b5a4d1378",
        },
        {
          url: "/_next/static/css/f8aee2f66a30e49b.css",
          revision: "f8aee2f66a30e49b",
        },
        {
          url: "/_next/static/media/KOTRA_SONGEULSSI.4a55bbc0.ttf",
          revision: "4a55bbc0",
        },
        {
          url: "/_next/static/media/air-banner.027471a2.jpg",
          revision: "841bcceddb711af5c04692e3ae8a13ec",
        },
        {
          url: "/_next/static/media/calander.bde8ef0c.png",
          revision: "91ed21e692edb0e38ef3792cd4895d7f",
        },
        {
          url: "/_next/static/media/googleLogin.81810f80.png",
          revision: "cf0304e47a43639a964b4c4fb559fd2f",
        },
        {
          url: "/_next/static/media/home-banner.9cde7496.jpg",
          revision: "8c7bb823d300f9c04f0db6ae05500367",
        },
        {
          url: "/_next/static/media/humid.1353c34d.png",
          revision: "ef26c4cb6486888b440839927435d325",
        },
        {
          url: "/_next/static/media/kakaoLogin.0e0e069d.png",
          revision: "b2df8abced56e0bbd49f7878a411e9c0",
        },
        {
          url: "/_next/static/media/mainImg.63ffc221.jpg",
          revision: "c4dac5fccec3d69162c2798d903db90b",
        },
        {
          url: "/_next/static/media/main_banner.24f45c23.jpg",
          revision: "090613c5fe7d2634068be2a6e2df231d",
        },
        {
          url: "/_next/static/media/pet-banner.f409132f.jpg",
          revision: "0b7c3511b449bbf32944af5c9295fc94",
        },
        {
          url: "/_next/static/media/plant1.70242e1d.jpg",
          revision: "05cc8d10cdad9eb7cfac2595c25f82c3",
        },
        {
          url: "/_next/static/media/smart-pot.b5f44247.jpg",
          revision: "24e92489f7231356e542fe41bbc02e0e",
        },
        {
          url: "/_next/static/media/smartpot.c9097ee1.jpg",
          revision: "b79ee4d721fe11caeeaab988f6b3f64c",
        },
        {
          url: "/_next/static/media/soilhumidity.b45f23fe.png",
          revision: "9cfe8d5b9fc89967b53301c8e1ef5811",
        },
        {
          url: "/_next/static/media/starter-banner.7431928f.jpg",
          revision: "20d314a251d2c25787024a5535dccc0f",
        },
        {
          url: "/_next/static/media/sun.4e6b6580.png",
          revision: "b09ad3828efa3033850fe095405d664f",
        },
        {
          url: "/_next/static/media/survey-banner.0b108b2c.jpg",
          revision: "8f81af6d52be95699e60b082a5dc65ea",
        },
        {
          url: "/_next/static/media/tempAdvice01.60e02d9e.jpg",
          revision: "ef72611a545224d548e726dc4272b9c8",
        },
        {
          url: "/_next/static/media/tempRecommend01.369cb9f9.jpg",
          revision: "916463a9cbf9e27c435880f6f1660e99",
        },
        {
          url: "/_next/static/media/tempRecommend02.45b82b14.jpg",
          revision: "dad074aa2b60307154df02414613710c",
        },
        {
          url: "/_next/static/media/tempRecommend03.99ba5747.jpg",
          revision: "ebb30e0d14f121afed0857ac6164d3ae",
        },
        {
          url: "/_next/static/media/tempRecommend04.ec3a7288.jpg",
          revision: "a61713b8da3343d830e316d813a0bb91",
        },
        {
          url: "/_next/static/media/tempSearch01.59ad8604.jpg",
          revision: "26a84aeb4f9c2bf56ca3622acaebde9e",
        },
        {
          url: "/_next/static/media/tempSearch02.0bb7884d.jpg",
          revision: "33f9cc31891eadc1ca10282760233aea",
        },
        {
          url: "/_next/static/media/tempSmartPot.74f50956.jpg",
          revision: "5c84f6268227493c2801c74b3b09a311",
        },
        {
          url: "/_next/static/media/tempSmartPot02.c3b9d3f8.jpg",
          revision: "52fb162c9a66c5ce5d9b41b079186354",
        },
        {
          url: "/_next/static/media/tempSmartPot03.9540c898.jpg",
          revision: "a999e5a2647f07f432bdd634699d2c50",
        },
        {
          url: "/_next/static/media/temper.f0e8c87a.png",
          revision: "bd36ddc4b757e7baa672661e2640efb8",
        },
        {
          url: "/_next/static/media/thermometer.e0749f15.png",
          revision: "1e36bea472646ece5671d10587e411d4",
        },
        {
          url: "/_next/static/media/water.4c07f191.png",
          revision: "9cdabba63c1bf11bb1b54e0b146bf1cf",
        },
        {
          url: "/_next/static/media/water.919afd67.png",
          revision: "e8f991092cee686d269d760ba2a2b8ed",
        },
        {
          url: "/_next/static/media/waterbottle.25e4f84f.png",
          revision: "ac3e76d2d1b091c6836e569618726972",
        },
        {
          url: "/_next/static/media/김포평화B.a2badafc.ttf",
          revision: "a2badafc",
        },
        {
          url: "/background.hdr",
          revision: "7ff4d46b6876cf990c60865900dd9437",
        },
        { url: "/color.jpg", revision: "5f0cf4defd6f6a3ece641281f631a499" },
        { url: "/disp.png", revision: "6982709bfd213dd370329dac67f22598" },
        { url: "/favicon.ico", revision: "9f656ee89db90bea3c81fee0e6902da7" },
        {
          url: "/firebase-messaging-sw.js",
          revision: "cb85bc8d08fbb77dc3f4d06aa7b34a10",
        },
        { url: "/icon.png", revision: "2a13a7a6acd7e37856c423254beebef8" },
        {
          url: "/icons/icon-128x128.png",
          revision: "096e74c01fe0f495d6bda7d2d7542183",
        },
        {
          url: "/icons/icon-144x144.png",
          revision: "821e9213687b679f1f24b1d0f8025ff7",
        },
        {
          url: "/icons/icon-152x152.png",
          revision: "29741634752b5c7cd053cd25fe6088c9",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "3034c3944deb8205427304f51430c8ed",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "0b16376d1cfd03727465eee7fdeb9f86",
        },
        {
          url: "/icons/icon-48x48.png",
          revision: "2a13a7a6acd7e37856c423254beebef8",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "0fc31447997f8807ba4f2f0fa9e9b259",
        },
        {
          url: "/icons/icon-72x72.png",
          revision: "8e013b6e7a57f5b4e28232397c6b82b6",
        },
        {
          url: "/icons/icon-96x96.png",
          revision: "c1f21b829b154ca1a554150c13c455cc",
        },
        { url: "/manifest.json", revision: "45d6bd97adb5325fe973bb0dee629b97" },
        {
          url: "/models/model.glb",
          revision: "f7713f61c07f7142c4f9db4acc7c4ee0",
        },
        { url: "/normal.jpg", revision: "0357fa3ffc406161ec16ee9ca666df73" },
        { url: "/roughness.jpg", revision: "08f946ffbaeb16cf92bb7b1725b897fb" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: s,
              state: c,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
