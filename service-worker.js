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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","e9f2acc582f5d72ade253ead93b09b0b"],["2018/11/02/about-linux-attr/index.html","ffe797fb5f47b47a942a1682602e8e04"],["2018/11/06/vim-range-details/index.html","4d822f53e5c355856fa64fc6f9ecb259"],["2018/11/07/vim-substitute-basic-details/index.html","3818b370cf6dfb513005a4e738294385"],["2018/11/13/macos-default-groups-diff/index.html","444f1ac5a4b1d3c881d2f934fe27e114"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","83e24e70c37c7c73a5f661e69b1ec14a"],["2018/11/21/algorithm-recommend-potential-friends/index.html","94451eb29eb78f4325bbaf5fe8c9d785"],["2018/11/22/android-startup-alert-dialog/index.html","0959383064347339dda12b7743dbfe6f"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","32e845bece01be09f87638631adaafc7"],["2018/12/18/algorithm-181212-1/index.html","38b3c13a7ffe91e88979074d551db7a1"],["2018/12/18/algorithm-181212-2/index.html","d464c0721d2427bd86f0a190cd1ef302"],["2018/12/18/algorithm-181212-3/index.html","74dd0adf14b105f9d02ab0bb910caad1"],["2018/12/18/algorithm-181212-4/index.html","deba22008b755c0f39e9957d9b52437e"],["2018/12/18/algorithm-181212-5/index.html","7e8e77d4a3a8f6051c3a908e1b57705d"],["2018/12/26/algorithm-solve-pocket-cube/index.html","128aa0a4eed87f5ba39aae6954301970"],["2018/12/27/cpp-rvalue-reference/index.html","e58b08eac847427bbc7bd4d75d0e594b"],["2019/01/06/some-questions-about-gpg/index.html","ce2d9fa4846b5e86991537ed50beda4f"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","a839e6902a0fdddc54cb013cc511732e"],["2019/03/21/add-commits-to-pull-requests/index.html","b90be071215de31d63bb2b4f4342b6b0"],["2019/03/22/josephus-problem/index.html","603ca4d522603b821ba061e8acdb98b2"],["2019/03/23/POJ-1159/index.html","6744202e9fc3e337ab0cab037358b7e0"],["2019/03/23/POJ-2533/index.html","e1c39366b2b6dea9f2dbda5d362de348"],["2019/03/23/UVA-624/index.html","fe2e4352c49a3308e4dec84b0a1b6d56"],["2019/03/25/POJ-1019/index.html","9b3d2b2432e5e64a94056da880df2cce"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","60ddfdd683d07b356d821f260df69a11"],["2019/04/17/experience-in-purchasing-P2415Q-monitor/index.html","79d8b0d0f74feffde751b6d63c7f2190"],["2019/05/16/bat-minimum-swaps/index.html","c4510f46ded7669eadbfd364d6c7dee9"],["archives/2018/10/index.html","c1e2234764828d218fa7024e4a77cb8d"],["archives/2018/11/index.html","f7c8ba69dd98b986c23bd9db4a31e93f"],["archives/2018/12/index.html","505a638c308864a78599fef74a779cbe"],["archives/2018/index.html","c79a02ab2b454f4ade9e8a2dd99af7d2"],["archives/2018/page/2/index.html","55036d2427a4faa56ac96220bd25c5a4"],["archives/2019/01/index.html","c00fd898b03efaaa7754253f83cdc005"],["archives/2019/03/index.html","62a78eeeea2d262595e9527d6a547e40"],["archives/2019/04/index.html","208f7a3df027f9fa8522963f3489d113"],["archives/2019/05/index.html","6232f9fe59216923362d0ef7fb40b2e2"],["archives/2019/index.html","51a5a07d88744727d4475497ce9551a6"],["archives/2019/page/2/index.html","304023a68d881481c19f3f85d13fc63f"],["archives/index.html","db02155515e9e30ac8700e80eb9f56d6"],["archives/page/2/index.html","22e855bede234d67b5422380ff1fd830"],["archives/page/3/index.html","f851d2c4c22dfaddca248d02e886777b"],["assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["categories/Android/index.html","b697cec574fce335349ff5485e4804b6"],["categories/algorithm/index.html","c559f915cd77b8165d7f49eb9488bf63"],["categories/algorithm/page/2/index.html","207f71799e032b5f77d87855e88951c9"],["categories/c/index.html","809dbde26e4442d8cf61e07ddceed01e"],["categories/experience/index.html","dc2e70d43b641d20c67f06ec115dafe4"],["categories/github/index.html","ddc50f73a26e664a8391ec53accec737"],["categories/gpg/index.html","b5b5f39892b77df31fb2cb261c72c73c"],["categories/index.html","08435a3614829d1e487f31049ff749fb"],["categories/linux/attr/index.html","6ee208cd0f0f1ff533db5b0801097f49"],["categories/linux/global-proxy/index.html","90e3faec9b6a08c14469b11c7371e6bc"],["categories/linux/index.html","18ac64c517db8f15e777af525b1387b8"],["categories/macos/groups/index.html","e2adf5caec5824c7e303af368eb7c27c"],["categories/macos/index.html","1bf7bf6c32bcbefeacef41f2f09cd323"],["categories/ssh/index.html","5431c1f0b4ad4cbf0e544a1cad1de2c8"],["categories/vim/index.html","da29bc32abf378bcd3cf43442e2c2daa"],["categories/vim/range/index.html","a188f9f26ba7c9f31b5237a6947a8728"],["categories/vim/substitute/index.html","4410c73b4728b631b57b456daecdff46"],["css/index.css","9bf044ea637341da589c055837fe98f6"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","bba0172baf76938e4612dac69c4ff39e"],["js/copy.js","a6ad34d1b890d7024823798a2ee43890"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","d6d0d81959e6b3af664e7d8ef15dfcf6"],["page/3/index.html","bb6833876369375622b0ee0e38fa99c6"],["tags/Android/index.html","2a10ff07c3c30386d61690f5719c131c"],["tags/V2Ray/index.html","c0ea17c08a2e5b72ff01631dfa5d89ae"],["tags/algorithm/index.html","4b2d6545f32e6f159bc922827b8c36ab"],["tags/algorithm/page/2/index.html","2c01ad57f5f53add0aae62b4fadfd68b"],["tags/attr/index.html","a5f623b4b2485469d44ef6c5e159ea94"],["tags/authentication/index.html","84920f9db6368b1c5f7eac8d4a1ba9ab"],["tags/c/index.html","38fadf01940320bc0b196fdbccdbb099"],["tags/experience/index.html","8fb9ebeef99d10f4c57f762a7892d95b"],["tags/first-blog/index.html","93e5db826cb3bdea14d34a5bae7d122a"],["tags/github/index.html","3faa755b8ea070bccafb74711648b31d"],["tags/gpg/index.html","56f5f6ef822dbff5fa21552fd5cd0d56"],["tags/groups/index.html","53de96bce581ac5e65615fbe0f8dd327"],["tags/index.html","959c2324cfd32a078de4de0efe60afed"],["tags/iptables/index.html","af9c47f539cea63f667d461b58f86585"],["tags/linux/index.html","1898f22ceaf4a78d10f1ec6e0c8bb778"],["tags/macos/index.html","31edfbd334238426145e2750c7a9f872"],["tags/proxy/index.html","d52049211af4f12cb770d189c4c2f996"],["tags/pull-request/index.html","5dd724a8efe6921023c95a17064965bc"],["tags/range/index.html","613aa597002b2a8a95ee538e2b7d688f"],["tags/rvalue/index.html","c07aa76e5f988013a2d58e7169e2a8b7"],["tags/ssh/index.html","a59aa2d50d71c643f15ad14df8d6d92f"],["tags/substitute/index.html","08567948484cb07ec685792c2ee68bb5"],["tags/vim/index.html","072885429f72bb96f9e38d0fcfa07be8"],["tags/water-post/index.html","106ef01de52b16a1eba5952d60e89068"]];
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







