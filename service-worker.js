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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","25c777677ebe2f2bddfe2f01fe840acf"],["2018/11/02/about-linux-attr/index.html","c20c6599f583d7fbd496b90fa9a5ca33"],["2018/11/06/vim-range-details/index.html","70f856d0e9585faf79053bab34c6be1b"],["2018/11/07/vim-substitute-basic-details/index.html","3c3acb76dd19b75623ea2f89dd48b048"],["2018/11/13/macos-default-groups-diff/index.html","f15f02ebf286335fe81e64d731b3b8a0"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","e317b6966080a4fbc5e3bd43a7afbae6"],["2018/11/21/algorithm-recommend-potential-friends/index.html","edb9ef618ce3fc9ffe46ecb5b45220b0"],["2018/11/22/android-startup-alert-dialog/index.html","3745693eb1c41e17094fd3d145aea357"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","25c38993be30c399419ea85c942f3b79"],["2018/12/18/algorithm-181212-1/index.html","4c027130913282cf10c5673894d24579"],["2018/12/18/algorithm-181212-2/index.html","aa428e3069d16c0777d30657d68f6dd7"],["2018/12/18/algorithm-181212-3/index.html","30f7f8c47c3702dce738c032360aba8f"],["2018/12/18/algorithm-181212-4/index.html","d7a74f5dbd0c2038934976e069c997c6"],["2018/12/18/algorithm-181212-5/index.html","1b75d0b6d1d7bd3800dabae1ea95b9ac"],["2018/12/26/algorithm-solve-pocket-cube/index.html","af4fd7b2e5dd8b2c90a91b344cf4cb1d"],["2018/12/27/cpp-rvalue-reference/index.html","9b24afcb4500d53f7af79031a2694eba"],["2019/01/06/some-questions-about-gpg/index.html","e89c1fa9db5038b37037662f595c1049"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","190d9503d85e8bd330388c0cd4ece610"],["2019/03/21/add-commits-to-pull-requests/index.html","d5773c17a9d0686dfbe95b18d14fa024"],["archives/2018/10/index.html","08ba97c970e6229e6b179991b3bbe073"],["archives/2018/11/index.html","0094ec95a906ee5439d0103f9739acdd"],["archives/2018/12/index.html","bb1731984bd927677a5fcb94d75e71c1"],["archives/2018/index.html","9a6d0573ec88f9980f44ababf4a4e974"],["archives/2018/page/2/index.html","366deeb1578e0a403b56ce184c7f2e59"],["archives/2019/01/index.html","f46930788a50621b7f4cbc8c37adbb91"],["archives/2019/03/index.html","a75fae55151a659b43651f879e04fb12"],["archives/2019/index.html","d9ab4f8ccea0d520168aafd829becbc8"],["archives/index.html","92a7b1fb4248dabc530fc4d297d3615b"],["archives/page/2/index.html","105e08f441c4b890d68344bb1f4c4ffd"],["assets/algolia/algoliasearch.js","c41ae37217e9870abe4a41f2923741d7"],["assets/algolia/algoliasearch.min.js","1278c3563ad328fc483ec5772b30a581"],["assets/algolia/algoliasearchLite.js","1c9cc1eb3e3de06a93bb390a4242beb5"],["assets/algolia/algoliasearchLite.min.js","55aac64547190f356c0e8bc5c0eca71d"],["categories/Android/index.html","e5a4b9152d71d3eb41e9c67f13a57e9a"],["categories/algorithm/index.html","09c8c92c5502a57d13846c3412df3426"],["categories/c/index.html","d922375932c64513d23e9cb04b6dc2df"],["categories/github/index.html","35cf1e730d0b9da65a4fde71275a0909"],["categories/gpg/index.html","160c7d551f0d6fe495ab1cc84b4bdd32"],["categories/index.html","8a9efc54d4dd07778b3bb4acf3cd63bf"],["categories/linux/attr/index.html","6a75e7bbc59b4a05450f2a5adac1d587"],["categories/linux/global-proxy/index.html","201b1aa887e500c89365b471626b00ab"],["categories/linux/index.html","cadf3af256a273c5bdcee007106346fd"],["categories/macos/groups/index.html","598b5b576a70f4fb569b1181384a20ea"],["categories/macos/index.html","7fab62198992fc63253d0de0583da81c"],["categories/ssh/index.html","27db5f27755d90c31f01b8c0ac85236f"],["categories/vim/index.html","6ad0f7a9277786d40f44246b56609636"],["categories/vim/range/index.html","15f49367c7cf8fc6a50aebb92f2a406e"],["categories/vim/substitute/index.html","37f4a51a67327ee91952f346190f078d"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","9c6077855d5d58ed5a6dee616055a3d4"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","c6eec882adfaaea0069f649d51c57dd0"],["tags/Android/index.html","df4e0254fd062cc505131768e2e23d96"],["tags/V2Ray/index.html","1e2dc4cbcc32a3667949d95e6bc7365d"],["tags/algorithm/index.html","66613145874608b83c04018e12986ff3"],["tags/attr/index.html","7ee09d463157428e2b63c7c8971c93ff"],["tags/authentication/index.html","012f6e466287b3a8d9cb79728679c12b"],["tags/c/index.html","60437657ded60d8a8d44dcff860b8960"],["tags/first-blog/index.html","16045e90539c1ad0ce8c6ae7f3349b12"],["tags/github/index.html","4ff977f7c98aa42175f88f895a1965d6"],["tags/gpg/index.html","c3eb90fdb6b77fad5ad7c9e70b4dfa78"],["tags/groups/index.html","3aa0a3c9836291d37cd3866e76f82bef"],["tags/index.html","28afdafa93c8420551e551908e0bc5bc"],["tags/iptables/index.html","43996e89f4ac8bddabc0870e94d7eb82"],["tags/linux/index.html","97a0cdd59825f471fff7a2b3e698866d"],["tags/macos/index.html","1ce07ce0f571c3b154477d7078d5b59c"],["tags/proxy/index.html","c4cbfb274f559d175ab1a5a6815cefa0"],["tags/pull-request/index.html","abd427bff82341c7bf40c433042cd209"],["tags/range/index.html","4b3a9dc06e582f81c6f2b089f2613f68"],["tags/rvalue/index.html","7a7b7171733aad59c47b92fbfd49e3bc"],["tags/ssh/index.html","ff04e221baf077deec07b86f36e8925f"],["tags/substitute/index.html","cf9b30e056915a31bf1c32b9db329069"],["tags/vim/index.html","97279211526b34e57d350eac264b6aba"],["tags/water-post/index.html","8ba89261dcdebf06bb5b0462f1ac2310"]];
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







