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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","3015eff1492e27df629f0c189f5cdebd"],["2018/11/02/about-linux-attr/index.html","dd02432fd548925d9276cc1727b167fd"],["2018/11/06/vim-range-details/index.html","fd95b1c2e4285178bcf01272fd8fd00d"],["2018/11/07/vim-substitute-basic-details/index.html","e6e2b5bd29439866e3b412914378dd55"],["2018/11/13/macos-default-groups-diff/index.html","32ca5c9adc800b956739ac44161b69d2"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","93873e631ce0109bbcce746b34834421"],["2018/11/21/algorithm-recommend-potential-friends/index.html","100fed334409c6a67a58d14ef0482553"],["2018/11/22/android-startup-alert-dialog/index.html","366842b3613c9977e679abcc471260a1"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","6f195df0b552f4bea0c816e3bb226102"],["2018/12/18/algorithm-181212-1/index.html","452003696a3d762fca6701c6e89d5de8"],["2018/12/18/algorithm-181212-2/index.html","c0fb0e1b954c47ae20893d79186fd77c"],["2018/12/18/algorithm-181212-3/index.html","d6c6a21ecd2b20a438b90802a4c9cd6e"],["2018/12/18/algorithm-181212-4/index.html","1e7a5e61b0ff4d74f47e88a7bb6bb498"],["2018/12/18/algorithm-181212-5/index.html","87cbee50f40ec2396affd996f8a1a609"],["2018/12/26/algorithm-solve-pocket-cube/index.html","47be0af1bee9d414ad4691da5e0a8f8e"],["2018/12/27/cpp-rvalue-reference/index.html","cebbe0bbe6192d9cc67184c725f2bd1a"],["2019/01/06/some-questions-about-gpg/index.html","0c2d6d7a279a909dfdc24e6b526253e5"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","7924a2e677233637460c137163a3c494"],["2019/03/21/add-commits-to-pull-requests/index.html","123f4900bed53af7e0bbe9e251915f84"],["2019/03/22/josephus-problem/index.html","9b503e9ec55ee74d87b88bcf57150e7d"],["2019/03/23/POJ-1159/index.html","e364bed66ca3768ec222c42ebcf33d9f"],["2019/03/23/POJ-2533/index.html","3356042ed33e13fa6174136c6fe3cad8"],["archives/2018/10/index.html","1dc6c9fa3639d9a16332276daa06bf04"],["archives/2018/11/index.html","1e4cd072d46f74ea7c28a7cd92aed51d"],["archives/2018/12/index.html","d16638a4689c8abdce0712def9576322"],["archives/2018/index.html","59c820c88e5c0731e591b3b3edab3ad7"],["archives/2018/page/2/index.html","3180c1cc917cbfaff4598cf10a2c3fbb"],["archives/2019/01/index.html","33213134ffe4906fe50bd526919f6976"],["archives/2019/03/index.html","7bce7b89691e47086d8a3b08c71a95f8"],["archives/2019/index.html","92e820fccb19e3812736fec05ca3c12d"],["archives/index.html","bdf1b34285d3f372ae22a86638395630"],["archives/page/2/index.html","ca0690c903c47bc3667346b14f3b52e7"],["archives/page/3/index.html","49f3af11a4c04d090ade809cfd2682d2"],["assets/algolia/algoliasearch.js","c41ae37217e9870abe4a41f2923741d7"],["assets/algolia/algoliasearch.min.js","1278c3563ad328fc483ec5772b30a581"],["assets/algolia/algoliasearchLite.js","1c9cc1eb3e3de06a93bb390a4242beb5"],["assets/algolia/algoliasearchLite.min.js","55aac64547190f356c0e8bc5c0eca71d"],["categories/Android/index.html","ff19baa50ba53e47ae41104f946bea5b"],["categories/algorithm/index.html","7761cc048038de1cba27cc0bd25eab60"],["categories/algorithm/page/2/index.html","57e6c2ea5edd75c270e26e1c02b9ef5a"],["categories/c/index.html","d343c3603912c5c259e391784fc0a28a"],["categories/github/index.html","094cb31f00d58c13a0f06a14c76eae67"],["categories/gpg/index.html","75ee88a827c6a18ef7938a13a5421324"],["categories/index.html","74053fac6c2edcc89cd150e579db9e98"],["categories/linux/attr/index.html","4984d050e922ba56805c1afb51fa7bed"],["categories/linux/global-proxy/index.html","0bcba9028b73340dc4d5e61bbb920ce0"],["categories/linux/index.html","770176df88d958ebc74dd72dd7da4cac"],["categories/macos/groups/index.html","45ec86ac158d593ae0dc6d4f46079be8"],["categories/macos/index.html","13942b8b3a714b435c8e126feba95bbd"],["categories/ssh/index.html","7b00ffe3f7d1b67d73bcb1200d44f68e"],["categories/vim/index.html","87f35d61be4da13125138ae8754267f1"],["categories/vim/range/index.html","280be8aa78a75c50e88c46968d170f94"],["categories/vim/substitute/index.html","1da80f0d5177745d4f1127b09a8cb83f"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","ea529dd310eb92527f38eda8f4d7d96d"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","cacc92f55934a38330e2028a566f1620"],["page/3/index.html","2d1a38b5492ae56032b9397f2debe444"],["tags/Android/index.html","487090d7fb4dc5935fff9ced15ae2bd7"],["tags/V2Ray/index.html","5760a0a9746eaad74e59944121a80b9f"],["tags/algorithm/index.html","3a1405c46a7a5760f39eb761121d9e45"],["tags/algorithm/page/2/index.html","593345cfb90bdc19d6eebcb3ddb5bf64"],["tags/attr/index.html","a3c8210123289e35172968afd2962d03"],["tags/authentication/index.html","19da613970148b964ffa6f83a879a373"],["tags/c/index.html","f669ce0f072a26dc362eb3ad65a5fc71"],["tags/first-blog/index.html","2046fa4935690591131ec5243624823e"],["tags/github/index.html","e876734e908e4501807ee26f0303125d"],["tags/gpg/index.html","7a03487a744806d213caf7d45fc3ae5a"],["tags/groups/index.html","4ad58176eb2382ca8266055a6577880e"],["tags/index.html","0aaed0adc620ecc82a9f3783321b4c54"],["tags/iptables/index.html","8a1f2db9ff3fae023246acca28dcc9c6"],["tags/linux/index.html","d447664cad720b9fa9091428b0cd6c9a"],["tags/macos/index.html","bac045edcaa8a9c13e87a95f7abb16e0"],["tags/proxy/index.html","f0c76642c45817c706756e738340e73d"],["tags/pull-request/index.html","4f342de9b40f5fd36fdc6b99aadb7423"],["tags/range/index.html","998eaaa5c565c38f494c80f22222b249"],["tags/rvalue/index.html","ca5b9e482e6a76e4f0e3b84cbfb02478"],["tags/ssh/index.html","82ae29a6ba3b3b226c3e7186a164a648"],["tags/substitute/index.html","45b8515f367a4240543e1ed09725d08f"],["tags/vim/index.html","44c13ea601fb922de4850e69f798af55"],["tags/water-post/index.html","43aaa1a132bdd96c0eee909c2033350f"]];
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







