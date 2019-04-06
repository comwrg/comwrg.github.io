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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","521c5e22f00a95589e1892e8468fd378"],["2018/11/02/about-linux-attr/index.html","a42ac92680d29cda632b5396b8893eed"],["2018/11/06/vim-range-details/index.html","08ebe158a72afa93c021e45a035d628a"],["2018/11/07/vim-substitute-basic-details/index.html","f53800183f0a8f5d08d32ad35e0f415a"],["2018/11/13/macos-default-groups-diff/index.html","524cc2d0d25811ea0f9b0f15fcb53364"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","4d613c6de9cff15632da931690523c8d"],["2018/11/21/algorithm-recommend-potential-friends/index.html","3ab24df56210e0e05b65e6a5aa79f5e7"],["2018/11/22/android-startup-alert-dialog/index.html","6c40b99da28a1494b1abb6e86ad222c5"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","fb1a23edd5d0d3f8fdcba27aed951b99"],["2018/12/18/algorithm-181212-1/index.html","3dbddda616dc3cb4adcb6b108be756a1"],["2018/12/18/algorithm-181212-2/index.html","3d415db6dd5d1fbfeeb7033f535c31c8"],["2018/12/18/algorithm-181212-3/index.html","4c5fc64f890d72e1ac909fefa269305d"],["2018/12/18/algorithm-181212-4/index.html","354a5459ee010c96dc7910fe4e31c99c"],["2018/12/18/algorithm-181212-5/index.html","3bcf34cd424a1dacab3235f8c88a6fb0"],["2018/12/26/algorithm-solve-pocket-cube/index.html","1ea0aad17d6da9be2abfdb40b759beda"],["2018/12/27/cpp-rvalue-reference/index.html","41c7c72bdfd30e29965568af8af37cef"],["2019/01/06/some-questions-about-gpg/index.html","9c72ddd23b7d43e4264f57d193f085f3"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","678b848b2289e72880761575634ad3eb"],["2019/03/21/add-commits-to-pull-requests/index.html","ef894f6c4306a99611f105d80b5b4b48"],["2019/03/22/josephus-problem/index.html","45fa1fb3d54c1cdac821c0e926cd3035"],["2019/03/23/POJ-1159/index.html","40586a1a2ef4621a1f6c7f322beaecad"],["2019/03/23/POJ-2533/index.html","eca0876f735cd4c68d2529bb9338f4c3"],["2019/03/23/UVA-624/index.html","8e33b65c667c0ae0fd0de81d2af7f6cf"],["2019/03/25/POJ-1019/index.html","b3b288313978780bd086b97cd2fa31df"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","56f799a0753564b2236fdb146ca5087a"],["archives/2018/10/index.html","9aba833105b758b41006b9f35bb73692"],["archives/2018/11/index.html","e5b472979065ffa2cf33ff15ba97f95a"],["archives/2018/12/index.html","7dd0460f760a25d00b9f6d47dd9cd8b1"],["archives/2018/index.html","ececd962ec040f1697c586595002ef26"],["archives/2018/page/2/index.html","8f268dc25bee0193ee4dcc169021066d"],["archives/2019/01/index.html","69ebd0bf18ed2609deb20b2fa7143cca"],["archives/2019/03/index.html","3ba9c0dd53bf97bdc5f48316fda85fcf"],["archives/2019/04/index.html","4a2ec2173afc266778a3ed2ec8ca6de1"],["archives/2019/index.html","eea3a444f51f95067df6c78ee96f56f7"],["archives/index.html","2f2b45190604bbb9d5a3d3d87f461b54"],["archives/page/2/index.html","0412bd9526a865f7e0badf8327a03674"],["archives/page/3/index.html","28eecb3677f2a57864555340de33a9a1"],["assets/algolia/algoliasearch.js","c41ae37217e9870abe4a41f2923741d7"],["assets/algolia/algoliasearch.min.js","1278c3563ad328fc483ec5772b30a581"],["assets/algolia/algoliasearchLite.js","1c9cc1eb3e3de06a93bb390a4242beb5"],["assets/algolia/algoliasearchLite.min.js","55aac64547190f356c0e8bc5c0eca71d"],["categories/Android/index.html","63fdaf9a580db28325630a4cac5a5acb"],["categories/algorithm/index.html","5b0e6a6e1891aba0b8576f1726cc31bd"],["categories/algorithm/page/2/index.html","1d8cc73a728aef284f3f1b34edf68f70"],["categories/c/index.html","ed670f188719e4b7e903f86bddcb3db1"],["categories/github/index.html","a55073314b0d4fe7e82e866379c600a9"],["categories/gpg/index.html","6e43a7b6576c700e4f4c3a89b51dc6c4"],["categories/index.html","edaf8564118af0d372cb3d97728b1679"],["categories/linux/attr/index.html","4128238e3b064ee0403c20b17bd02237"],["categories/linux/global-proxy/index.html","666ef8e64efe0c878c8b15f75065750f"],["categories/linux/index.html","53ae1c0e93bd0e8e6f15d75edca28829"],["categories/macos/groups/index.html","e8df147c6e6561d5b207940dc9a689f9"],["categories/macos/index.html","f1fe2d3b690257db7ce0a915861c2f9f"],["categories/ssh/index.html","ada168cfca4ff8a06114aff97214501a"],["categories/vim/index.html","ca9f63f61f2811f24ca7ae84391f9dbd"],["categories/vim/range/index.html","4e3d0985bd5dbd540fd22e1814a38601"],["categories/vim/substitute/index.html","780094b0e3a9c6c15d1bb2010ebd1175"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","b24c4f352cdd3f96870e87abae242ecb"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","8f4bcc3c1737a46469e4b18258f4fa3d"],["page/3/index.html","de5c97c1683d3b214b49c84ec60e536b"],["tags/Android/index.html","7c52b5245494da2202e9a22502b7b581"],["tags/V2Ray/index.html","61ab3445aaf57ded5e7a47be1c2337bc"],["tags/algorithm/index.html","306aab13d9367744cf557332c8a7d669"],["tags/algorithm/page/2/index.html","f9d2577ccd6acf1157336c1bbaaa4c79"],["tags/attr/index.html","5de83e0b33318c24602fe15218b97d4d"],["tags/authentication/index.html","9f8658681fabf7465b514fdc8216f2ca"],["tags/c/index.html","66ff72dd2064a6f18fc99214ca8e5397"],["tags/first-blog/index.html","78b7cb8844013bc30b4c0311f166bd97"],["tags/github/index.html","97c5a610400a1c7a840595b2881d7a45"],["tags/gpg/index.html","59349719105e821fc176d3ff04f22051"],["tags/groups/index.html","7d86c8d09e7eb22e36d7ec74c59a9cef"],["tags/index.html","ad6dc470c661d8483da1b11c3d4ba178"],["tags/iptables/index.html","f934e0e7a23ae387929e7c41c897f112"],["tags/linux/index.html","27d211024c642444e9df5d3374fe9390"],["tags/macos/index.html","68f8f198cd6874f0e6665f207995e2bb"],["tags/proxy/index.html","1b926c39439106b01c5e46ae153eea53"],["tags/pull-request/index.html","2789b44b32f634e21a0a35e132a2c452"],["tags/range/index.html","dac3a5a11da07e505f3f21a82e0310a0"],["tags/rvalue/index.html","91bfa63573a92b655f6ecdb8e8b086b0"],["tags/ssh/index.html","150b3129ab9ade7f13c71632899d6d05"],["tags/substitute/index.html","16e64621ac871d2d187a6b0952cccb4e"],["tags/vim/index.html","6f1640393978bf9dcfb8e3f01cbe868f"],["tags/water-post/index.html","53cc89d1ce7ca4134af1371132da434d"]];
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







