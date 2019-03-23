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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","617c5cbed7ab1fcd1a01e309a5fa980c"],["2018/11/02/about-linux-attr/index.html","95188ec7200189d1f276e4251ec4c2e8"],["2018/11/06/vim-range-details/index.html","0f8db5f29ca4d31c10cb2a23fd74c6dc"],["2018/11/07/vim-substitute-basic-details/index.html","a7f31590b103dd12441a0cdca19071ec"],["2018/11/13/macos-default-groups-diff/index.html","b5f3c1cb5fd838f9924e9ba926da5d88"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","23238c3a87494cd2f71fc8079345ccec"],["2018/11/21/algorithm-recommend-potential-friends/index.html","f766a4a9dd91ce920b67f90dc3bddcf4"],["2018/11/22/android-startup-alert-dialog/index.html","44d58ff91d0817bdfbdcff0ac171db67"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","ff66dc0c898d47ead46d8038108c90b0"],["2018/12/18/algorithm-181212-1/index.html","9377a7e7efbfffddf05b07c453f7adee"],["2018/12/18/algorithm-181212-2/index.html","2e0771073eaf2eea0751e5c6a39b48f2"],["2018/12/18/algorithm-181212-3/index.html","965578b76a29c069d2ffcf3fab6ca48b"],["2018/12/18/algorithm-181212-4/index.html","82e70ed4c941c23fab175d2e16936e2a"],["2018/12/18/algorithm-181212-5/index.html","d3d1b7cbb23bce2c4786e4184e7684c7"],["2018/12/26/algorithm-solve-pocket-cube/index.html","7d6a30b8bc2a0de13c1e0e8cb4101251"],["2018/12/27/cpp-rvalue-reference/index.html","07f1a263f1338ad82df113794db77823"],["2019/01/06/some-questions-about-gpg/index.html","1bb18e88e2f5aa7b5252d1e69c09f53c"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","1a897ca6715fb7d602329fe8be99cf50"],["2019/03/21/add-commits-to-pull-requests/index.html","b4961c8f0e75dde5fa5ede6511354c99"],["2019/03/22/josephus-problem/index.html","88fca262d13adcac8d1f5407c7163785"],["2019/03/23/POJ-1159/index.html","81484f109eb957f53302a505f1df81ee"],["2019/03/23/POJ-2533/index.html","e4741fd2314e63bc7e648981b76a2802"],["2019/03/23/UVA-624/index.html","1b402f73685edef45ff2de24fdc4ab79"],["archives/2018/10/index.html","8775eba7589d413dac38652cc5cf266c"],["archives/2018/11/index.html","0c69ea002d22fbf7d9e993344bc37af1"],["archives/2018/12/index.html","9038cd7dd6f69235b75c7e8326b8552c"],["archives/2018/index.html","635db6da38228969a68fa9c33b6eda71"],["archives/2018/page/2/index.html","3da5c529b1934a57a13f0e367e90cf74"],["archives/2019/01/index.html","f39dc2d74cd9a61decff92831debad09"],["archives/2019/03/index.html","2489abf61fbddc5228d3f671d0e5cf70"],["archives/2019/index.html","60faba498e9924b144bb466e720c7b1e"],["archives/index.html","989087d37214186acec654499b4bf8fc"],["archives/page/2/index.html","3bb90d1965b052dd9e70f37ecd80e068"],["archives/page/3/index.html","e360fd9a92557e1008b67a01bfe41ab6"],["assets/algolia/algoliasearch.js","c41ae37217e9870abe4a41f2923741d7"],["assets/algolia/algoliasearch.min.js","1278c3563ad328fc483ec5772b30a581"],["assets/algolia/algoliasearchLite.js","1c9cc1eb3e3de06a93bb390a4242beb5"],["assets/algolia/algoliasearchLite.min.js","55aac64547190f356c0e8bc5c0eca71d"],["categories/Android/index.html","37d6b88abf9514333c8732d2164d90d3"],["categories/algorithm/index.html","2df17d6a891f91e0643fb0957472eca8"],["categories/algorithm/page/2/index.html","84278d9b794093109501c23712efa92d"],["categories/c/index.html","485d658f71bddef68b3ae70ae9ddb57f"],["categories/github/index.html","5f8a80edfb024f8192b457efda1439a1"],["categories/gpg/index.html","84345d8ead86fde34b935455466cbb6b"],["categories/index.html","551c6e04b19dd41668d86bbb03a6be55"],["categories/linux/attr/index.html","91511fcbe7461bf6123cea03d74e3a1a"],["categories/linux/global-proxy/index.html","e9a0e3fa16ab82feede9b151d3db3140"],["categories/linux/index.html","e160460d7503c729b2f56aecdf13dd8e"],["categories/macos/groups/index.html","156dfbeaac465c018bae341033b74379"],["categories/macos/index.html","63db1a0a8f4ff0ea2adda0eb1e069b64"],["categories/ssh/index.html","ad62ddcfd7a23018917b6b638ac810ba"],["categories/vim/index.html","63b4c3a531d34c3ec6c4f143e11b6e4e"],["categories/vim/range/index.html","d70d6def5e40564cf418f6a32eaf1467"],["categories/vim/substitute/index.html","c5769df049a33d3fc464b2d521342c38"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","0d581759fd7f9c7c7ccdfa67d256ccce"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","691346e62b60b69b85e0808565ba67ed"],["page/3/index.html","d453652f513a4de3587e28d90b3d643f"],["tags/Android/index.html","0d60baba7085dfa267739955f80a2ea5"],["tags/V2Ray/index.html","770d2f1472b2af0b14b60021582f1d9a"],["tags/algorithm/index.html","ab53d4cbe822dd5cb71fd49002ff7c12"],["tags/algorithm/page/2/index.html","d74d6165f7eddacecf6c3e0d218d7acf"],["tags/attr/index.html","e8eeb7209edd1608f1d25cf513f57bef"],["tags/authentication/index.html","5dd0a3647ced52a2299dad264aa3184a"],["tags/c/index.html","b3b71691c196a839b06e5e649b272400"],["tags/first-blog/index.html","d3f6173ab9c1c524742311a48d0a76b9"],["tags/github/index.html","ae4763850755ad8cd40efd85a500212b"],["tags/gpg/index.html","bff015ea927d1d67bb466507af7772fb"],["tags/groups/index.html","d77152e490fd29b8b97d046f5e4ffd13"],["tags/index.html","fb557b8e438555ca03f3a9756ec18402"],["tags/iptables/index.html","c7edb5b48735dc1942963846f5e56048"],["tags/linux/index.html","cf9b34cf5d76afd5d64b55ed65fc20bb"],["tags/macos/index.html","d705192a01c8c27146dbf5b5ca9f9f67"],["tags/proxy/index.html","cb304cdbcd825c7cd3ef4ce201bd223e"],["tags/pull-request/index.html","219cd3cb922a19c5950540dbc717a840"],["tags/range/index.html","264c17ca53b67d74708aff12517dce0c"],["tags/rvalue/index.html","fd2e526ea2479dff9fbda52d07dd6176"],["tags/ssh/index.html","f465a996780be7fd541d4e0e8cc31336"],["tags/substitute/index.html","bc6274c6a1b82a58328042d113e77a11"],["tags/vim/index.html","789d31af800f7903611057307a3d6676"],["tags/water-post/index.html","ae0f08bafeac337dfc47197209fb35de"]];
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







