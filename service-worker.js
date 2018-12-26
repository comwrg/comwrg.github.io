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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","ac6e9dbe757971f974c3527d2a615622"],["2018/11/02/about-linux-attr/index.html","6a823c3e97a21e81a752afe947f55ece"],["2018/11/06/vim-range-details/index.html","e5bc84a2e6b9881fe8a807ced7930bb8"],["2018/11/07/vim-substitute-basic-details/index.html","1aaa197d7867a20569a100be2f05dcd2"],["2018/11/13/macos-default-groups-diff/index.html","b6aae563e80de54506b4578374001ad3"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","e6c4759c65673acb40258365e33dba4f"],["2018/11/21/algorithm-recommend-potential-friends/index.html","10f798926eddf4beedd3bec0cbb841eb"],["2018/11/22/android-startup-alert-dialog/index.html","decf5c035f37fb5cf103b5198751772f"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","e75996b720ea29a95d28d9976e3a6a45"],["2018/12/18/algorithm-181212-1/index.html","2d6631d3dfbd79c3dc1e6dfa7c20e85e"],["2018/12/18/algorithm-181212-2/index.html","fbfdce7d6dbefef303fb29f92d80fd5b"],["2018/12/18/algorithm-181212-3/index.html","c2fceffe1400f291974b71746abdf906"],["2018/12/18/algorithm-181212-4/index.html","ce49ec978956655b58dcd92205ddea56"],["2018/12/18/algorithm-181212-5/index.html","2f307804b67a20d3c4f17a92755cfea8"],["2018/12/26/algorithm-solve-pocket-cube/index.html","1b48d39d3168fc0ea0c1c333607af3e3"],["archives/2018/10/index.html","73e1146580e3552edc5e1763d5c7eaf3"],["archives/2018/11/index.html","1ebd556c634c4b628ef6bde78621e2b7"],["archives/2018/12/index.html","30ca8a84d11615009c886c17723672c0"],["archives/2018/index.html","5935a6f46ec1d7e486e65a732bca870c"],["archives/2018/page/2/index.html","01067bd5406476d1145501fb78e09f45"],["archives/index.html","a0af6075cc64912649be077a803abc8d"],["archives/page/2/index.html","e570485766b076e7592b8635f160169d"],["assets/algolia/algoliasearch.js","6f27b5bf47ed4666b949ee524e0047f9"],["assets/algolia/algoliasearch.min.js","a1d6c162ac2f64d153b319f3f83649a0"],["assets/algolia/algoliasearchLite.js","98188059a115d487aa14346ed918ff9c"],["assets/algolia/algoliasearchLite.min.js","4d993ab63bd60b3171e37bbfbd69f3d1"],["categories/Android/index.html","81667f5ebe2527ea14a6c450765038a7"],["categories/algorithm/index.html","59e69e955605feec22000f8595ad4d00"],["categories/index.html","93d3511754866a5a63196f90d4b7bd05"],["categories/linux/attr/index.html","9a91cccdd023e1893a351c6d44229cbb"],["categories/linux/global-proxy/index.html","388013f1259ec7b85c610c190969dbc3"],["categories/linux/index.html","7bbf090532431089589571abe18b5da1"],["categories/macos/groups/index.html","40692c88ac2e9971b52b99f820b9b5a3"],["categories/macos/index.html","c2c4efd5ab3f9b5f48f1c1111f15467f"],["categories/vim/index.html","ec6c1f8a36f02e653dc2bd63f2321b2b"],["categories/vim/range/index.html","4fbf5dd8eda31ef37df1a8deb2ebf69c"],["categories/vim/substitute/index.html","5df0ccaa500e09d6485d2ca4fe852d58"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","3ccf4e0a7f2d649372c74730677db690"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","d8f3b3df75ddedb468bac6fb6fa77bd9"],["tags/Android/index.html","282aeb46be633afe3734d596fbe8d086"],["tags/V2Ray/index.html","a7f7801259e9081b5d7981875f977a85"],["tags/algorithm/index.html","84296cb81ce50880d90388ae4ef65379"],["tags/attr/index.html","308a2f44b460f5b9d27c8f52f789462b"],["tags/first-blog/index.html","9db955c662e8886e106e3ae41f813f4a"],["tags/groups/index.html","29abb948a3a44fe55d3d822a570c791c"],["tags/index.html","cf87ba24800ac97bdce7ef7c5acb9d6c"],["tags/iptables/index.html","52dbb98096eaac7049e70c20d6cd8142"],["tags/linux/index.html","b8cebcba704a595bed1feb0abaf53121"],["tags/macos/index.html","e575e3e02695339d2e7ebdc669ca63bd"],["tags/proxy/index.html","1ff117222987cf4f7c3380a0b13f7121"],["tags/range/index.html","1f82dee5c0512a396cee585d154eb0db"],["tags/substitute/index.html","7b3df8cc89dcfbfc10318cce1d5dec3e"],["tags/vim/index.html","57b216569838ea4064bffa310c20507b"],["tags/water-post/index.html","368ba1e8e2ba81ed9b2de9ea0a696607"]];
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







