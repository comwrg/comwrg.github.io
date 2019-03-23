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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","98acac5fd0c674a8d304c3764ff7bbff"],["2018/11/02/about-linux-attr/index.html","fd0e8705e04cc4f7ca1a06c595d097ca"],["2018/11/06/vim-range-details/index.html","b4513e4c3373b7250b0952836e8a832a"],["2018/11/07/vim-substitute-basic-details/index.html","e5db5658721b62f3eae7b48077f513d3"],["2018/11/13/macos-default-groups-diff/index.html","32dddd3f1a35171dc6f02ecad81d5ffd"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","913847d2fb1075c35c98afe791c6c86e"],["2018/11/21/algorithm-recommend-potential-friends/index.html","e67bae98c3a0e27d8c57b79173f3ac83"],["2018/11/22/android-startup-alert-dialog/index.html","45ef61a09c437983271b86cd3b5c0cbb"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","b5de8025a3c2391a867d201241050ece"],["2018/12/18/algorithm-181212-1/index.html","6192d4b91a4102eb67e14fed86829421"],["2018/12/18/algorithm-181212-2/index.html","b50ec06502214c6adddbeb49dbec4b80"],["2018/12/18/algorithm-181212-3/index.html","713e0c891c6699f87e6d0ae26d7bb69a"],["2018/12/18/algorithm-181212-4/index.html","c86a1979a4e991ac681d608304b47fa5"],["2018/12/18/algorithm-181212-5/index.html","b585108ee02ad1e67c686ae253c0475d"],["2018/12/26/algorithm-solve-pocket-cube/index.html","555338faed41ea1539334afc1bb66383"],["2018/12/27/cpp-rvalue-reference/index.html","b564470d5cc0aa25a12e7f4ad1f77053"],["2019/01/06/some-questions-about-gpg/index.html","a7aecf63e3d2fce7712b58bbbaf79f55"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","c3ca8661cb260b08a06fbaea590d7132"],["2019/03/21/add-commits-to-pull-requests/index.html","50b25005992d50518b97d621c026a2cd"],["2019/03/22/josephus-problem/index.html","b689247e46da9ce90b2c3d4deec7235d"],["2019/03/23/POJ-1159/index.html","0dd753bbe925fa31f90ff91704a46c00"],["archives/2018/10/index.html","4f7d2c7c6715896f01412020c88eb9e1"],["archives/2018/11/index.html","d6d51578aa13291bf69c92206aae4f95"],["archives/2018/12/index.html","2edfe1f0466ccd0d6caa7c476e9beb0d"],["archives/2018/index.html","789207e76e674d427ef417c74b849829"],["archives/2018/page/2/index.html","3c607d596336f02c9210f577c6ea787d"],["archives/2019/01/index.html","045c2ec4c1f7ad531c8d160517af59ec"],["archives/2019/03/index.html","670a8414355f0427a1138748fb5aed29"],["archives/2019/index.html","d517463c70fe3f88f7a67cf91d57f575"],["archives/index.html","9fa167813269593dbfb4df8a19f39f5f"],["archives/page/2/index.html","2a55f18c8c692222c2ad8d49e334db08"],["archives/page/3/index.html","75881f8ef68b481651c62446ef44e557"],["assets/algolia/algoliasearch.js","c41ae37217e9870abe4a41f2923741d7"],["assets/algolia/algoliasearch.min.js","1278c3563ad328fc483ec5772b30a581"],["assets/algolia/algoliasearchLite.js","1c9cc1eb3e3de06a93bb390a4242beb5"],["assets/algolia/algoliasearchLite.min.js","55aac64547190f356c0e8bc5c0eca71d"],["categories/Android/index.html","f4352ad89d0d6417f9f7f2419851b143"],["categories/algorithm/index.html","dd74c6e23cb6bf94ce82fa93187e2f46"],["categories/c/index.html","00b8fa21b91dba0c4834e10a53a80472"],["categories/github/index.html","316bf893e3e584f2adb589d31a6a9b7a"],["categories/gpg/index.html","167e8e5e0e9295b77aacb61867d4d029"],["categories/index.html","abbe3e03627c565bd9b92cfa78174a4b"],["categories/linux/attr/index.html","0bdefe16329f49f291039eabc8e178ec"],["categories/linux/global-proxy/index.html","35acc06268a1a960c05d6c4e6b328e10"],["categories/linux/index.html","240846021f5197598d98ec371292d52e"],["categories/macos/groups/index.html","fc2169cc4eb3455718b2fe4101944fe6"],["categories/macos/index.html","da6ad8d38201d63e333e21bab3b2123c"],["categories/ssh/index.html","77e8193ae320a07f5589c18204dfe321"],["categories/vim/index.html","e2ebb174bda1e4b01df43fb32c3fac69"],["categories/vim/range/index.html","e8c8bb0d0f11a43799698ecda296ee44"],["categories/vim/substitute/index.html","b1ddf06e5dbe0c8dbf7cbd289aa40b2f"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","26355b62a2649564194f892e09f86c62"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","a5f56ebe9e14439396a19994c36e21b7"],["page/3/index.html","f90ee8584deb62f2eac58a19331cd014"],["tags/Android/index.html","f60e54ae407ca476b3de250126dda65d"],["tags/V2Ray/index.html","8b783f6f594701155c7d87e66da48666"],["tags/algorithm/index.html","dd5d1b6ae56d471408ffe6e1ea88d793"],["tags/attr/index.html","d741fddcadc5f01d56782843f5ef12fa"],["tags/authentication/index.html","38bc348cd89871892c50ba947d22b06e"],["tags/c/index.html","de2a6aa54afa6c2e8401046916129113"],["tags/first-blog/index.html","204c774642668301dfc7bd133cade6f0"],["tags/github/index.html","c9b7133e50a82b48766222b73fb4413c"],["tags/gpg/index.html","935f88dd08d715f9e2d326f5a1930eb1"],["tags/groups/index.html","db23a181259ef49ba0f1ce494392c157"],["tags/index.html","811d985823a8250250437a74b92a7526"],["tags/iptables/index.html","266aa008035fc49f656ccab5fb6eb12b"],["tags/linux/index.html","edcecaf2f0e50a8ecd7be72a593738db"],["tags/macos/index.html","3277cd81534cd7bdc065e494d3e5ec73"],["tags/proxy/index.html","6d7b887c752f5c4513bcedc620b1dff9"],["tags/pull-request/index.html","e4b5b8698b414b2f1fefa13ec1182dc5"],["tags/range/index.html","06b0cd1c9422f7f66f17b1354a7fc70f"],["tags/rvalue/index.html","023c635d944d375b69eb32fb84f4bffe"],["tags/ssh/index.html","00f89d3b6be41df428d23201b3494501"],["tags/substitute/index.html","4838952e8ceba14013338c3023a996f8"],["tags/vim/index.html","4e72d2ffb3ec9a1eddfaa89974d42f66"],["tags/water-post/index.html","57bbe713f161f063043b9b158ad8435d"]];
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







