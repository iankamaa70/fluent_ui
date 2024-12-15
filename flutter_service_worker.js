'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.js_10.part.js": "0bc12b8599bce37324bc49a1a4c2fa19",
"main.dart.js_13.part.js": "34fc75a678d1cb0f58058ac9504a326a",
"main.dart.js_18.part.js": "2e8344e2078c4b9f28900f9f3d76b23d",
"main.dart.js": "c41ddc1fb8518f214f1797b4f34c6f55",
"main.dart.js_7.part.js": "5a42495bf64903d1b48d1dc5f382d529",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"main.dart.js_27.part.js": "66b256a69ac87f9b07eb90a9cb765754",
"main.dart.js_4.part.js": "9e12d264311ccb86d99be0d714b64cde",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/AssetManifest.bin": "b6563f51aab4da1919b1718cb313cc3b",
"assets/fonts/MaterialIcons-Regular.otf": "258caf53506d40d0f5987f6662fd99a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/NOTICES": "35a36adcf8836137ac5cd66292d51839",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"assets/AssetManifest.bin.json": "ddd3257fb805b264e2dadba5b806e0f3",
"main.dart.js_25.part.js": "dcf3fc7b08f6623cf96da7ecbb7034a9",
"main.dart.js_8.part.js": "b599e3e8e9971d5e8ae1e6b469898593",
"main.dart.js_9.part.js": "690e163f78f2d4296dcd24d486d09cb6",
"main.dart.js_22.part.js": "37520c7bef08be73ee2aa43b0596da3f",
"main.dart.js_23.part.js": "eb0151e8ba205c8bac02f2a1c6fce90c",
"index.html": "fbb39eb160d707fd602a1368ed8eba6a",
"/": "fbb39eb160d707fd602a1368ed8eba6a",
"manifest.json": "1e04e819df5e7720a7659fb598692f21",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"main.dart.js_26.part.js": "e910dcad9b0b399f754a8ea23242785d",
"main.dart.js_20.part.js": "0016bd4689baeaeb833b293e57568a73",
"main.dart.js_1.part.js": "fb7a8e99ed0dbb791fc1b2f30688331d",
"main.dart.js_12.part.js": "270ffb80409021a428285f29ec5e984a",
"main.dart.js_28.part.js": "35c106b3f6cf18fe63bb4a8afce8cfff",
"main.dart.js_6.part.js": "78143f98a193b47bce73e408d5f1881b",
"main.dart.js_17.part.js": "64d1609e9d7f9f68a84681bccd432e00",
"main.dart.js_2.part.js": "8801022a3429e4df1eea35692a4eb9a5",
"main.dart.js_15.part.js": "69f97415fe7ebfaeea2490cf42a45aeb",
"main.dart.js_19.part.js": "854697c119ada1df1d162b0ad9115e76",
"main.dart.js_5.part.js": "a2c3d9b8acb49784e25acc114eef5bee",
"main.dart.js_16.part.js": "2c0ef0e9591c90c672588a4dd04cbd6b",
"main.dart.js_3.part.js": "e40769123713db5854622169b8b7b55c",
"main.dart.js_24.part.js": "50281f81ee25fd23d294ea8fc01df6c6",
"icons/Icon-maskable-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-maskable-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"favicon.png": "aa55c22e0c7bce9da0110b3035be5332",
"main.dart.js_29.part.js": "a4c33b60969bbf472f672e8c2befc7fa",
"main.dart.js_11.part.js": "0543e625be057820d84cb44236967dca",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"flutter_bootstrap.js": "f6ec1d76f749f0a129a228f9fa3a5ed3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
