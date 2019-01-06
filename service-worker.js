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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","12cbb599e0c5e68b4da373217775637c"],["2018/11/02/about-linux-attr/index.html","aaea0e9fd806b528aea03f9596406d4a"],["2018/11/06/vim-range-details/index.html","da8bc33a8d4d7d9f59f9df550629ac5f"],["2018/11/07/vim-substitute-basic-details/index.html","39759bf13556bf4087704e4f535d969e"],["2018/11/13/macos-default-groups-diff/index.html","7c8bb51d4b7571f10dbe5b1defbe39dd"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","37b9bae7cdb436348593dda937475604"],["2018/11/21/algorithm-recommend-potential-friends/index.html","c153d179fa7b128a183d7ad47adb7ae1"],["2018/11/22/android-startup-alert-dialog/index.html","13fb4a1cd7bc11a0ee2e520be1213b03"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","5003ba6e68fa5b2ba9e5a633bc52ec49"],["2018/12/18/algorithm-181212-1/index.html","c7a06e2056379b128becf58ff46cbe1c"],["2018/12/18/algorithm-181212-2/index.html","a08a6afd72264044e2c9588d82abde9c"],["2018/12/18/algorithm-181212-3/index.html","34959ce0c4e9535c0592ebee0cd4f793"],["2018/12/18/algorithm-181212-4/index.html","aa1fe9a07f409cb1a7299a7a445de9ae"],["2018/12/18/algorithm-181212-5/index.html","b3875b2457d13e203ce52054187c6ba3"],["2018/12/26/algorithm-solve-pocket-cube/index.html","a155d4911f236ef3427ae710f49d0c24"],["2018/12/27/cpp-rvalue-reference/index.html","3e2956a7a69d8fde85fa388adcdc7977"],["2019/01/06/some-questions-about-gpg/index.html","be7d8af02ede258b1a37b8ab83826fde"],["archives/2018/10/index.html","f0c7e35c2203f8a6ec149734d26c244f"],["archives/2018/11/index.html","c6ff4ce07991c20332d49b3f3129d819"],["archives/2018/12/index.html","c8b5beb54ed9f2c1860a4eef2e7e446a"],["archives/2018/index.html","dc2f58adc8ac488664f50bab5419d6a0"],["archives/2018/page/2/index.html","0e08d6a96b6500bf8e9349334938c7c8"],["archives/2019/01/index.html","e3b48828d59a2c2e8f21e9b08264413f"],["archives/2019/index.html","0c0e0cc4386e68907f6411cc44561da0"],["archives/index.html","fd03c5a90a9b26968054e5e389f7e42a"],["archives/page/2/index.html","2054fc8a3eb5e23ec7c15e61702da7cf"],["assets/algolia/algoliasearch.js","6f27b5bf47ed4666b949ee524e0047f9"],["assets/algolia/algoliasearch.min.js","a1d6c162ac2f64d153b319f3f83649a0"],["assets/algolia/algoliasearchLite.js","98188059a115d487aa14346ed918ff9c"],["assets/algolia/algoliasearchLite.min.js","4d993ab63bd60b3171e37bbfbd69f3d1"],["categories/Android/index.html","39e6504689eb53ede6c6bdb387433c03"],["categories/algorithm/index.html","b8642311ce410f95d00a10b64463f4f1"],["categories/c/index.html","919984bff36d1058e0e12092bf313d32"],["categories/gpg/index.html","267007ded9959682801de32dac94ff1b"],["categories/index.html","c3a3a9ba7a1f15e68c03f433325fec56"],["categories/linux/attr/index.html","4cf1611ab73c91a75f75e3ded5df456d"],["categories/linux/global-proxy/index.html","b717d83143d747ac2cf26d1fd22578f8"],["categories/linux/index.html","497d2da8fc8a180fa2a9990b1f8ebc11"],["categories/macos/groups/index.html","20d25fb9a285c0cafff8fa285158d24f"],["categories/macos/index.html","c8e1c27e678a448cea4be3cbfe4b2f9a"],["categories/vim/index.html","eb29c88d72ab6e105a8b12d6a345fd53"],["categories/vim/range/index.html","c58e156ec6699b547e22bf7de031f0be"],["categories/vim/substitute/index.html","802d1ff5ec59c70a92f5b35d373b470b"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","1a8cbf6ae3e1af6c09ce914c2e97a68e"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","1f82951a2315697023fd0f02de0ed09a"],["tags/Android/index.html","a1d9f6d45de7ac382868b858292003d7"],["tags/V2Ray/index.html","0724815cfd9750f2be5d7defdcd0f14d"],["tags/algorithm/index.html","f0c5db3c55eef0016f8d5267280578c3"],["tags/attr/index.html","c0b2c2f249650292af6fdcf467e765e4"],["tags/c/index.html","4ba5742b4a744765c2d163321be7b556"],["tags/first-blog/index.html","48ab706c06f2aa6c5f1bd8f7be731aaa"],["tags/gpg/index.html","ef1e2f9ab5a71007cf3e94c0ed660d09"],["tags/groups/index.html","4e2866c824c48b8a565cee36204eda5c"],["tags/index.html","b3e27786a2c6b93d9362d1ff19c7cb88"],["tags/iptables/index.html","1fdecc9378061f75680b7d551769bdbb"],["tags/linux/index.html","9e6b08c1d2b4fdfb0b97bafcf404770d"],["tags/macos/index.html","e7098959e75238c32de84b18b8f6a437"],["tags/proxy/index.html","c644c891c268fe55c3b78d17a70c9433"],["tags/range/index.html","0291a84201d9913117f9fc478a690cd5"],["tags/rvalue/index.html","e2f2339150db0a1e98b3dfec96064c46"],["tags/substitute/index.html","6d54a5cbb71e510b9da9678226e0d29a"],["tags/vim/index.html","172a51acbc026557fe1f06303b03a8b2"],["tags/water-post/index.html","1ae4428dfd21ffd955ff674c0eaf1ff0"]];
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







