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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","8962e3514d9fa9a2772d10e4dbd4d79b"],["2018/11/02/about-linux-attr/index.html","fce915ae051b2590953dca22c79096df"],["2018/11/06/vim-range-details/index.html","7a29b6975d33061faa5f96b3a36696a2"],["2018/11/07/vim-substitute-basic-details/index.html","7829c6effd793d139798a1cf6b38dbb8"],["2018/11/13/macos-default-groups-diff/index.html","4a608d594c39bedad1900b17d57bf823"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","084bbd177979207f4a843be0342e1103"],["2018/11/21/algorithm-recommend-potential-friends/index.html","6559d8ce5d0e9a873951d39a6e2392a1"],["2018/11/22/android-startup-alert-dialog/index.html","283780d52698e50926952a643353c410"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","66b4f83b2eaec0c319059b1db10ede37"],["2018/12/18/algorithm-181212-1/index.html","97b29916a53ce65cccfadb66ba0a5b0b"],["2018/12/18/algorithm-181212-2/index.html","43d5287126fbd989f961d9993e83ba87"],["2018/12/18/algorithm-181212-3/index.html","1a08cfbecc6b8088f68b552f4d78e55d"],["2018/12/18/algorithm-181212-4/index.html","a77c530af43464ef708bd6508192e04f"],["2018/12/18/algorithm-181212-5/index.html","47747292b7f00b8d06428f15db8f4f22"],["2018/12/26/algorithm-solve-pocket-cube/index.html","48ee46ac2a0d80babdf21df4dbba05cf"],["2018/12/27/cpp-rvalue-reference/index.html","c92d3104bd208a422f5d030b6b35d2b1"],["2019/01/06/some-questions-about-gpg/index.html","d24ed24532485d09bc9bd6ba8e7cbdb1"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","5b379b6f2225d7052e69130734277027"],["2019/03/21/add-commits-to-pull-requests/index.html","80c590b26b147eafd607a575d9a0bc8f"],["2019/03/22/josephus-problem/index.html","ff98338497850f451bf9677b37b72ead"],["2019/03/23/POJ-1159/index.html","15df5091f307b35ce495ffeef93023b5"],["2019/03/23/POJ-2533/index.html","2db1a22d860438325582cf127a0f6c7f"],["2019/03/23/UVA-624/index.html","82b28fcb52315898186a3966bd0f9fc5"],["2019/03/25/POJ-1019/index.html","2ec7b1b23f9b909324e1b9b41a5ccfef"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","1860ddd86a475d0653a8001187d8b64a"],["2019/04/17/experience-in-purchasing-P2415Q-monitor/index.html","589ec89919e457f2ac475104253abec8"],["2019/05/16/bat-minimum-swaps/index.html","ce30df1f0783f7ef951c0bf0bb9f2443"],["archives/2018/10/index.html","1f4f8e404ca3cd6482f734952fc51d12"],["archives/2018/11/index.html","66118d71471b81f03b5c9509075dddbf"],["archives/2018/12/index.html","f9d55b735347920940a0c8c09a84be05"],["archives/2018/index.html","89862ddb898113328cb68d142ba11bc7"],["archives/2018/page/2/index.html","1dba1990ac3c1205d453e5851004324a"],["archives/2019/01/index.html","f05e8ad2627dbe393586cdc1a96a8978"],["archives/2019/03/index.html","8e9498f33f3c5133d86aa8845a645b06"],["archives/2019/04/index.html","a3150c8fde913c089e10753deee16e24"],["archives/2019/05/index.html","065c1a602508598f3ae3a8b998d59e08"],["archives/2019/index.html","627ca13de45e0f135e35bc4c57ef0a77"],["archives/2019/page/2/index.html","caeba5117777aac4ec58440175eab149"],["archives/index.html","a2f647f1c0cb65d2fdd4120decf1f4f4"],["archives/page/2/index.html","43a6764ea9d87b562b6261189dd05f96"],["archives/page/3/index.html","efacc213c7e58f0ea3402f799b4a0d18"],["assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["categories/Android/index.html","79957e11b9d486a3f8a476d76eeacd2b"],["categories/algorithm/index.html","1ca48b19c9e5afd1ac4a0d6811c38d7a"],["categories/algorithm/page/2/index.html","ae67a8221433e8038c0759207d0ae8ef"],["categories/c/index.html","3e0008efeff87f02ab473fdc7d5eff33"],["categories/experience/index.html","9c1914a2ef57276a7cdb4c964de0d5c0"],["categories/github/index.html","9c6b0cee3163aeab6346b8ca6ec5fd35"],["categories/gpg/index.html","ab04ca426211347321ca3fb296a2d68c"],["categories/index.html","498d19ee3e5a1123c61301f22d4084d2"],["categories/linux/attr/index.html","5424394366026ca7abea51ef7d00b493"],["categories/linux/global-proxy/index.html","c4fb3f85fb34014e1e1492f17da19471"],["categories/linux/index.html","3dcc9a3830f54d58bcc5c1b391211d50"],["categories/macos/groups/index.html","654bc4ef226a504aded83976cb6ac5bb"],["categories/macos/index.html","ddf7ade232b91e5f9ba03c43f933665f"],["categories/ssh/index.html","23657621dc3c854aeb9b6bae33ffcb4b"],["categories/vim/index.html","6cb2a6ce7f5cae47577b50559180deca"],["categories/vim/range/index.html","df4d3cc078e8df6f9ae51850bc3ec64c"],["categories/vim/substitute/index.html","527965a70d4e36021675954b62e114dc"],["css/index.css","5ee2afc5f114aa14984a3dc678a8b2c1"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","bf49dfc44e07eb32f4858532ef156800"],["js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","8f2a8a95efbf23b54b8407e74646bf75"],["page/3/index.html","c35ee08e094fabe7eb4deed53726e0f2"],["tags/Android/index.html","40d1648e0d64eb3965608346ec01e357"],["tags/V2Ray/index.html","674e68ffff57b77974e9a11c6e56b67e"],["tags/algorithm/index.html","22e79f55fdabadd0dd4cfddb7cd06e1e"],["tags/algorithm/page/2/index.html","89ad26f91591458f14880977663dd3ec"],["tags/attr/index.html","f1dcf484e36096614e5482a751fcd544"],["tags/authentication/index.html","4feecbb0560ed3cc8797ac17ee95a307"],["tags/c/index.html","3619f9d932a174b3a3a902ec62865858"],["tags/experience/index.html","3b85a6eebe9e4f832ea41793f68d557c"],["tags/first-blog/index.html","a5e4e2ba85beb52389e8dc7e58052e5f"],["tags/github/index.html","1bae2b32a49e81d42e02d19e0a3c755d"],["tags/gpg/index.html","292a0b4f5ca0f6331b7a86db33315fd0"],["tags/groups/index.html","dd25ff123edc77ac32937d79c7dbefe6"],["tags/index.html","a5a4cdfa86e56ea73cff2cb368c2c3ed"],["tags/iptables/index.html","a9627944b0e5bfcab8cfc42804fdaea9"],["tags/linux/index.html","ec7428d15dd352b05a09c40dfdeac83a"],["tags/macos/index.html","5a429bb2b67755a7a11bcc80926031a9"],["tags/proxy/index.html","912fa4f1644bdbabb2f1e2498fc63452"],["tags/pull-request/index.html","e9c922080f0331e7ec506a1efb0b4076"],["tags/range/index.html","60a7a18f4d9d501f161ca61a4f5bd3c2"],["tags/rvalue/index.html","396215744826a24a4c5d7832d0e7e6e3"],["tags/ssh/index.html","2634445c2747e4ef5cdf67f38a5de8d4"],["tags/substitute/index.html","de5b86f32ae36394fdf4dcda8f6ae3d9"],["tags/vim/index.html","424b044a8cd9690265281e790eda23f0"],["tags/water-post/index.html","7c4a6a3e734c5a59bc47ce6cbe91d696"]];
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







