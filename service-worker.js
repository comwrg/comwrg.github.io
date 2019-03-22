/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/10/30/start-a-blog/index.html","f50007fb9a1c5b65ed236d51cfa7eb8b"],["2018/11/02/about-linux-attr/index.html","af5414f707cd4f7f7c6b3ec054c98cf5"],["2018/11/06/vim-range-details/index.html","11b91fae3a9512ea4f2969697cdeda57"],["2018/11/07/vim-substitute-basic-details/index.html","8a05a208f993be228dfd4b3d73d11082"],["2018/11/13/macos-default-groups-diff/index.html","954baa98851719b5e7627177960cd655"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","fdb92f29c53fd4fac2c0bf0dc6f5387d"],["2018/11/21/algorithm-recommend-potential-friends/index.html","089d07c6a8d1a8ee70d442b7b0595c07"],["2018/11/22/android-startup-alert-dialog/index.html","0f38c75c28c59e693a284d34b52fda84"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","f542dcedce75aa1e2106f4594822a1f4"],["2018/12/18/algorithm-181212-1/index.html","cb2aac26938c01c4697cdeb09f9df7ce"],["2018/12/18/algorithm-181212-2/index.html","c2bd95704c313d957b365796a4ace21b"],["2018/12/18/algorithm-181212-3/index.html","1af946b7b1409f45fd4a85bb739cdffc"],["2018/12/18/algorithm-181212-4/index.html","658608bf6a4733d71898944f01747792"],["2018/12/18/algorithm-181212-5/index.html","10404a1492f3f8be14388bd02d95f7f8"],["2018/12/26/algorithm-solve-pocket-cube/index.html","2dc4cd5e4aead8984879f096e1c6b5a4"],["2018/12/27/cpp-rvalue-reference/index.html","91d61dfbe04203ca574c3844895bf9af"],["2019/01/06/some-questions-about-gpg/index.html","4f7973cb158fcaffb74a732b26d14199"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","666727a41b37d10718f2d25c61ebd0bb"],["2019/03/21/add-commits-to-pull-requests/index.html","6cf7b3c81b44ae7f982c7a37d9d3fe05"],["2019/03/22/josephus-problem/index.html","f435e96a21bf1d32abdd76363d793594"],["archives/2018/10/index.html","23ad975e239b43d9648cfbcb5617f5d3"],["archives/2018/11/index.html","5704a2d64a67376a84f6d1a2f3a9c485"],["archives/2018/12/index.html","5cd8da237d6c6589d1d9ccfc8a7a88a9"],["archives/2018/index.html","a2c67ba036278d5b99c7c2f6531bd73e"],["archives/2018/page/2/index.html","a7fcba260c332306e93fde53246d336c"],["archives/2019/01/index.html","003b08e7281fba7766b91f555d96082b"],["archives/2019/03/index.html","68223830dc2fa17db93a1bf15664e464"],["archives/2019/index.html","90efbebc571e5fa7f3f4995b3dc19051"],["archives/index.html","56cebe9d77db290088e07cc07ff61d7c"],["archives/page/2/index.html","89cd096ad09aaaa83a293d8f167d8468"],["assets/algolia/algoliasearch.js","c41ae37217e9870abe4a41f2923741d7"],["assets/algolia/algoliasearch.min.js","1278c3563ad328fc483ec5772b30a581"],["assets/algolia/algoliasearchLite.js","1c9cc1eb3e3de06a93bb390a4242beb5"],["assets/algolia/algoliasearchLite.min.js","55aac64547190f356c0e8bc5c0eca71d"],["categories/Android/index.html","45b94196e375e53034c2c3bbb130ee10"],["categories/algorithm/index.html","12443eb1c25ada13e2d14c12d8aef06c"],["categories/c/index.html","dd991b286273c003376273f367d017d1"],["categories/github/index.html","ad9e95aabd5f1d7bd836daa5665b2ba5"],["categories/gpg/index.html","7f0b7a7f41627e0eb62a726602688b8f"],["categories/index.html","8680216a6e92665948f05e2904a496af"],["categories/linux/attr/index.html","f724001c86a8044986ea8c0bead3100c"],["categories/linux/global-proxy/index.html","3493b212bb3c58dd56ed634b6747851a"],["categories/linux/index.html","09dd65ed771f3188812f4e28347e1b67"],["categories/macos/groups/index.html","147d23a79b0a06b72c02b9e9e4b96e70"],["categories/macos/index.html","7fd95961009737d2a64d0200fc315741"],["categories/ssh/index.html","4342402a58db2451019f9fb405536648"],["categories/vim/index.html","c6eeb08139fec02dd8f1d459cfa58548"],["categories/vim/range/index.html","1f452df825c381f3573c90cbf429af0f"],["categories/vim/substitute/index.html","fec9c6b55bc5e55e99496f7b500f048e"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","429a3f7211ecdf060e473a8370e864b4"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","b02714c48033642cacc9cb1961ad9cea"],["tags/Android/index.html","fb32511fd19cb800a134885e218327cb"],["tags/V2Ray/index.html","57b3b1e9314321249ddde35cf11f1544"],["tags/algorithm/index.html","8795a04cc99e5c97761994b325ad3740"],["tags/attr/index.html","21a00c2258582c2c3689316e30596e8d"],["tags/authentication/index.html","8790557893f851676bfc23c81c2a82de"],["tags/c/index.html","ef190e3a0c65927e775bb00836bd3672"],["tags/first-blog/index.html","b580e74be2f6943defee5879e3b4c62b"],["tags/github/index.html","90d6f5a7a3af2492189cc7396bb02d0f"],["tags/gpg/index.html","e4edd19857bd02f93bfcd420c5610d35"],["tags/groups/index.html","00645ea70d5fa4b1e3e6e9ad6dc06209"],["tags/index.html","fcd64f95420d3c205af60533810c3184"],["tags/iptables/index.html","7e452c699db5d11c2332115ece834ac3"],["tags/linux/index.html","e2978cd9d08d60babd1da0cd83eea6a0"],["tags/macos/index.html","79ba70073b108bf9c3c824f62394af30"],["tags/proxy/index.html","3928465838e456c02fd12f202c006b4e"],["tags/pull-request/index.html","e2914b3aacf2cd24fb0c9c384d5f5e14"],["tags/range/index.html","9764d10e959e871346f433776ced5fcf"],["tags/rvalue/index.html","f77da9afb988bfbddbcc9ce7e7dc55c7"],["tags/ssh/index.html","63c673f78843466dd0c19a4c47af78d0"],["tags/substitute/index.html","1acd54dabdd3ed61f54c85140937c649"],["tags/vim/index.html","70d29431b95a2ad2d00fd838cd027418"],["tags/water-post/index.html","d5e46e58046bbb271913442ad195d916"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







