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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","db3a0b3d7742c2faf76e3d123847f5e2"],["2018/11/02/about-linux-attr/index.html","7610e87545bc7f8eb53a179c37526af1"],["2018/11/06/vim-range-details/index.html","273688fde72ede9471161c3759da0744"],["2018/11/07/vim-substitute-basic-details/index.html","04a2ae128bcbde74b8d0fd040dd7f50f"],["2018/11/13/macos-default-groups-diff/index.html","1ab22990c98e80531c5e915df654779d"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","b17cd564c7e67a397dabb14751bb742b"],["2018/11/21/algorithm-recommend-potential-friends/index.html","b3090864d61ea005bc2e44997d2bf74e"],["2018/11/22/android-startup-alert-dialog/index.html","d7f6c37ccf936a7bb062b82b12130de1"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","a713543074b074dcb0695d1e58619d48"],["2018/12/18/algorithm-181212-1/index.html","63a7ba20a5de9a7c036b71d405645a48"],["2018/12/18/algorithm-181212-2/index.html","5ba147d1d2f45c3cc81b3707d49ad859"],["2018/12/18/algorithm-181212-3/index.html","07bcf109511d736ae3d80ea70af55cdd"],["2018/12/18/algorithm-181212-4/index.html","a4134009e71087a75abc7dc2213b7679"],["2018/12/18/algorithm-181212-5/index.html","aec6973eb1b6db8a85575e44123f8c33"],["2018/12/26/algorithm-solve-pocket-cube/index.html","d31652da86f2b8811afeda18cde9a9a6"],["2018/12/27/cpp-rvalue-reference/index.html","de2b3c6586a543b570b68aa429aae7e9"],["2019/01/06/some-questions-about-gpg/index.html","5116ba17f254805600ca77f9cbbbc2b5"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","5d18abe71ad6280820ddde6bc2361133"],["2019/03/21/add-commits-to-pull-requests/index.html","625d4f4d8fe99905e24b7276dc386f99"],["2019/03/22/josephus-problem/index.html","790abbdd193696ddb1b0142802a992fb"],["2019/03/23/POJ-1159/index.html","8d7462d30e02921424e931512a3bb5d0"],["2019/03/23/POJ-2533/index.html","cc5d11c5b3f43b85634917e5eb83ca04"],["2019/03/23/UVA-624/index.html","d7356ae52983ec79e208f83a774ff436"],["2019/03/25/POJ-1019/index.html","96a3bac1a66c295dfa29ac3514013695"],["archives/2018/10/index.html","daf222bd3f424f5cd2e972afad72dc62"],["archives/2018/11/index.html","6311f55fe079327e00b55005df9fa349"],["archives/2018/12/index.html","2545344fb452c64bd7731c7ea35c9c11"],["archives/2018/index.html","dfce8c2df3ea3c0aa83c4fff8eb25213"],["archives/2018/page/2/index.html","3efd0a58d11cb25e94d8c17ece968ee3"],["archives/2019/01/index.html","65512a86eed7a19f09d71a3d336cdf18"],["archives/2019/03/index.html","1b7c595647939e19256dbb4b4acb9177"],["archives/2019/index.html","a5679d0197c7c802e336f3320ae293c7"],["archives/index.html","4fad6bb31c1ad70638c4a27b9a8869f3"],["archives/page/2/index.html","289ef85af9413f0e18a3022a0656959f"],["archives/page/3/index.html","09d20c6381fd860a49ead666d611d9d9"],["assets/algolia/algoliasearch.js","c41ae37217e9870abe4a41f2923741d7"],["assets/algolia/algoliasearch.min.js","1278c3563ad328fc483ec5772b30a581"],["assets/algolia/algoliasearchLite.js","1c9cc1eb3e3de06a93bb390a4242beb5"],["assets/algolia/algoliasearchLite.min.js","55aac64547190f356c0e8bc5c0eca71d"],["categories/Android/index.html","81a3afe67a728506e9d69b6d76564e2a"],["categories/algorithm/index.html","8bb6f12cf6138ee9ba6efe4af9fbd028"],["categories/algorithm/page/2/index.html","11a5bd331f88dee46528604d1ebcf2cd"],["categories/c/index.html","38cba9d7f43dcde1ea50220b7e84d561"],["categories/github/index.html","a65c455d6d6b82e5942c80a3389cf90a"],["categories/gpg/index.html","c50458541ccc17fbd054daac852524b5"],["categories/index.html","4cf5ae8c5ee24a98dbb5ac7b0937a03c"],["categories/linux/attr/index.html","6debee527d85dd14ea564c24124707dc"],["categories/linux/global-proxy/index.html","3be539a40857f348b84b609c9e30b7ce"],["categories/linux/index.html","9a851485b2164d3cbcf4e7918de18c95"],["categories/macos/groups/index.html","d72ffd11a3b7fc87bbf2cf39887de4a2"],["categories/macos/index.html","ece1b7a6f29286a38a399e1413fb2a31"],["categories/ssh/index.html","1c6fefb9168f6417735027d12d09db42"],["categories/vim/index.html","44602b8ffa2aba9b1a79e87fad33a779"],["categories/vim/range/index.html","e7a50f31fe3d02b3a72b150fb5b861ef"],["categories/vim/substitute/index.html","dab5f52739cdb056f7ba3c1bd81cee1a"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","abd386843073b1a3c6ed78dcfe716ab3"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","1f5683664f58364fe974c7c109be728e"],["page/3/index.html","22d60aeac8e470457687414746da0d8a"],["tags/Android/index.html","52ba57f3dcc44ff692077105395c4806"],["tags/V2Ray/index.html","4f37df17c07d4e70ae63850c67aa4817"],["tags/algorithm/index.html","93559db810b26fbad72a2605786d213a"],["tags/algorithm/page/2/index.html","ce613fa1488637b72b74b14e31a1e39e"],["tags/attr/index.html","d7336a9e1abbdfba02fb998811977fc6"],["tags/authentication/index.html","f1a0abcf022f7e76120e557a965605b1"],["tags/c/index.html","d693215868ab239c08191a7c900280ce"],["tags/first-blog/index.html","136f65ccd6ac7ab3a127b4968eeb03c3"],["tags/github/index.html","af315ba5a352bf81cdaaf6bf96c31719"],["tags/gpg/index.html","4b07f562f20fc222eedb7a6d5e4acf9b"],["tags/groups/index.html","dc52f98c94e37c9821ecbd216b644e5e"],["tags/index.html","f5a641721141d87142bfe805fcb3198b"],["tags/iptables/index.html","8e5e0d578302affb88017643ca455eac"],["tags/linux/index.html","8c33f18638b8aef4b14289ca9b2195f9"],["tags/macos/index.html","1d44e2bb92209899ab76d2cf661e419a"],["tags/proxy/index.html","23fb13abf1be54c9d9899bca7293acd6"],["tags/pull-request/index.html","35074a059c340be53f3d349652e21677"],["tags/range/index.html","4d55fea0dcbee6b9016aa53e75a0d67c"],["tags/rvalue/index.html","25447904f5593d9ba65126d5147fedbc"],["tags/ssh/index.html","e2adcbbd0143941f10b495a4bdf3b110"],["tags/substitute/index.html","cd6c81fafaebb34a43ed8a6c524ea5ff"],["tags/vim/index.html","3e9885a6970c1d72739390909ea5f960"],["tags/water-post/index.html","2a157d05e57032c9fff96003cd992e56"]];
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







