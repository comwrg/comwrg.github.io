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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","673c18d869d89df306128a4a6331247b"],["2018/11/02/about-linux-attr/index.html","0710279a7e3a11df86c8e824eead3f05"],["2018/11/06/vim-range-details/index.html","5a93057114ea26ac96118b469eb7db87"],["2018/11/07/vim-substitute-basic-details/index.html","cf24c02cf919665ed96308a6d89e489b"],["2018/11/13/macos-default-groups-diff/index.html","c84a4e6f8344af4ce159121b615dd95d"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","b3f233894e1e21ef1916b44ee19d0da3"],["2018/11/21/algorithm-recommend-potential-friends/index.html","28743bdaa88751656c39e0c1f0aa70c9"],["2018/11/22/android-startup-alert-dialog/index.html","6b0e89695b6a4d0b3a05d5f02a96d196"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","6c747065686e8fbb818085b29bf337d2"],["2018/12/18/algorithm-181212-1/index.html","c874696d603f9ad31fa27100d59f0dd6"],["2018/12/18/algorithm-181212-2/index.html","c71cec05f153ee4db3dc15eeff0a453f"],["2018/12/18/algorithm-181212-3/index.html","6989593cc55c5cbfe51d9ba86a39b96d"],["2018/12/18/algorithm-181212-4/index.html","6e937ca15f6cbc8d133e6c154a2fab9d"],["2018/12/18/algorithm-181212-5/index.html","9b176d294c1ea72f9fb8d9933a37088f"],["2018/12/26/algorithm-solve-pocket-cube/index.html","5ce45616dd24442cddcc0aefb033f7ff"],["2018/12/27/cpp-rvalue-reference/index.html","be4c24bf452f05cf00d19347869cb015"],["2019/01/06/some-questions-about-gpg/index.html","3651f4bbd250f793314a38b3fadafa15"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","444d148122d7a055ad5364179eea866c"],["archives/2018/10/index.html","512d1cb374af192e22c928e9ec376c46"],["archives/2018/11/index.html","d8f023bd64d73d6644feb37cea2b2f59"],["archives/2018/12/index.html","ff839ae9e58cdab4bb280501356ce321"],["archives/2018/index.html","9c4dae11cd95024473499dbca96a156e"],["archives/2018/page/2/index.html","b481562dc8efa32b973810827d5ed0cb"],["archives/2019/01/index.html","be6441b4385a9acc1cb32c0170ef0731"],["archives/2019/index.html","fd92a5c628cff85f984eb9c463267e8e"],["archives/index.html","522c7560e1cdec9a20fb742117dc385a"],["archives/page/2/index.html","896dc9c87241d62a6c2213f98062d371"],["assets/algolia/algoliasearch.js","6f27b5bf47ed4666b949ee524e0047f9"],["assets/algolia/algoliasearch.min.js","a1d6c162ac2f64d153b319f3f83649a0"],["assets/algolia/algoliasearchLite.js","98188059a115d487aa14346ed918ff9c"],["assets/algolia/algoliasearchLite.min.js","4d993ab63bd60b3171e37bbfbd69f3d1"],["categories/Android/index.html","8fd80ed193d0d51de46a1d8b05d09715"],["categories/algorithm/index.html","69ab2d63f99ba7e248239309a4f6dedc"],["categories/c/index.html","86eecfd9393c39ff8b3139253aebb3ca"],["categories/gpg/index.html","b9ef867587ff896fd59f7aa957570351"],["categories/index.html","ff0779e38062eb7d7046a471cb956d75"],["categories/linux/attr/index.html","bbb49aa3a0f5baa008a2b9d46c76fd39"],["categories/linux/global-proxy/index.html","5c88e87080e65cd433092b8d1add4035"],["categories/linux/index.html","b124cd950d3f0cab0812496299d7597c"],["categories/macos/groups/index.html","5823da57ed51c36870f88a98ea8d5414"],["categories/macos/index.html","16308e425568c857484607faea6a2f29"],["categories/ssh/index.html","4c9d9fa5fefeda070a6929765b15cf1c"],["categories/vim/index.html","04cd401c543f209b93b04a15c808d035"],["categories/vim/range/index.html","789df29b3d3c6846918d47072c4f153b"],["categories/vim/substitute/index.html","ffad34363d1bd26af7ffbe6b117e9d47"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","5836d7b34be6760ba20e5a07fd68f0be"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","a52988ddefc939ed1fec1359857f81d8"],["tags/Android/index.html","e5efffcc8ea9d79b7fece58aca6de4d8"],["tags/V2Ray/index.html","6cc5e55a8370294f703e81dbaf445e8d"],["tags/algorithm/index.html","f959d5cba3fda99c3116ecd3db430261"],["tags/attr/index.html","3ea302fe1918c278f80dc959463098ee"],["tags/authentication/index.html","025f0449f75b6b46d20420231f31d87c"],["tags/c/index.html","1282f4beb0b6776e8e14b7f347b96c4b"],["tags/first-blog/index.html","0d37a4fe26c23bc1a4841b2a7b530899"],["tags/gpg/index.html","e2e46fb9d28e0366074028e47c59760a"],["tags/groups/index.html","c6fb7ed278236bc77de56e62a89eb9b1"],["tags/index.html","7b4724d3be2e6e3d6bc99a578690df36"],["tags/iptables/index.html","a660e3043a46a5aff33311e55b43e703"],["tags/linux/index.html","acc9d5acbb54e13f416b40dc2cace0f5"],["tags/macos/index.html","066eddd498b49ac236c218f030ff6f03"],["tags/proxy/index.html","37e3901207ab26dbe86b68e3fe656c8b"],["tags/range/index.html","b482f1488e948a48a28eb9c3eb5b8881"],["tags/rvalue/index.html","67e3c48e0abf1b34d708bcdda5a120ee"],["tags/ssh/index.html","de6ec7ba8d173a7ebcdcf98302598a8f"],["tags/substitute/index.html","834157239908269b05b428064b47c454"],["tags/vim/index.html","c1cb76758ae1e9baeb845ed52fe8cceb"],["tags/water-post/index.html","ff035a761efc8e573993724ed0f97e6b"]];
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







