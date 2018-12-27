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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","bd3b14156859937dfd77f22c3435b824"],["2018/11/02/about-linux-attr/index.html","6d8537103ccfa0277decfa0fc6d0eab5"],["2018/11/06/vim-range-details/index.html","c9ba989830a1a4ec91659ccefe652aab"],["2018/11/07/vim-substitute-basic-details/index.html","25115395382ff0f38bc0e457f8bf58ef"],["2018/11/13/macos-default-groups-diff/index.html","45f40171dc1e488168bf0eedc6bcb971"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","e0726bdeeb1ad8a5daa738be028b9af1"],["2018/11/21/algorithm-recommend-potential-friends/index.html","ed9dbf6f027d2bf8d929c481f0bd233e"],["2018/11/22/android-startup-alert-dialog/index.html","cb5bee511bc57773eac58e4c512ca981"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","0730ede4ecfa7234f6ca88f45af341dc"],["2018/12/18/algorithm-181212-1/index.html","310877b8564924833b4f51a89f1e4447"],["2018/12/18/algorithm-181212-2/index.html","914128618d5fd13c8c1a77f203b8dafc"],["2018/12/18/algorithm-181212-3/index.html","6dac9e155d138e4cc6aa83f84a5c8a3d"],["2018/12/18/algorithm-181212-4/index.html","caf8fdaf0a84b51c6edd1afdcad8f319"],["2018/12/18/algorithm-181212-5/index.html","ab622402bc4ae33fbbfb1ea4abad9118"],["2018/12/26/algorithm-solve-pocket-cube/index.html","c48394d189f64b808eb06a690cfa0f03"],["2018/12/27/cpp-rvalue-reference/index.html","154ad198b21290923e88b3c9f25bc765"],["archives/2018/10/index.html","ba167e06fc95ad473412787d79b83767"],["archives/2018/11/index.html","42586fd1a787131b3966df53d27e05cc"],["archives/2018/12/index.html","11674c15746a7870ffdbc6d24337cf91"],["archives/2018/index.html","057fccbf0d69888253bb9d170aba6ed4"],["archives/2018/page/2/index.html","7170bbe0d90fcfeac59fec9370cbc8c3"],["archives/index.html","49cacdb976c15e6ba86493a535c70243"],["archives/page/2/index.html","4cc9ce6b36e317054cc2655cce0185c2"],["assets/algolia/algoliasearch.js","6f27b5bf47ed4666b949ee524e0047f9"],["assets/algolia/algoliasearch.min.js","a1d6c162ac2f64d153b319f3f83649a0"],["assets/algolia/algoliasearchLite.js","98188059a115d487aa14346ed918ff9c"],["assets/algolia/algoliasearchLite.min.js","4d993ab63bd60b3171e37bbfbd69f3d1"],["categories/Android/index.html","a49de3e14c13d7f9ea18f322edc7a0d1"],["categories/algorithm/index.html","588e43dfc7c8ec2397b0f25dece0ac9e"],["categories/c/index.html","6013d680edc94cdf2b4248f37efdb675"],["categories/index.html","d79298d157ceab7e38352c1526107dc8"],["categories/linux/attr/index.html","e4e6935cf63a3d30809541f5e73efbb6"],["categories/linux/global-proxy/index.html","a4660b7c93ee81639f246b2afeb275ca"],["categories/linux/index.html","8fecb46cd6dbe64ecf26025e00b600c3"],["categories/macos/groups/index.html","f9aaacc1a860096b0fda959bb7257a13"],["categories/macos/index.html","dc1e7609b1708f4e1496957a79768c8f"],["categories/vim/index.html","97b7d8e0e22602fae3336b6c9a942803"],["categories/vim/range/index.html","5539df457ba8de3ccf7a7c876484583d"],["categories/vim/substitute/index.html","aaed09be06987bac4dc8a70cc143f2f4"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","d885ccb928c4387bff3be605ef53cb76"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","3fda7fea770ef8e390c827a293757072"],["tags/Android/index.html","3499e0994f53e820057abaed35e14703"],["tags/V2Ray/index.html","3ee3c8c893b8398350201b2ca0aa65c7"],["tags/algorithm/index.html","d0b83d129b2b7107c94a2300d1452799"],["tags/attr/index.html","84ecabd3921a2a177580625fe3d63294"],["tags/c/index.html","d6d4913dee9ae80b83b86e86d759f76e"],["tags/first-blog/index.html","6eaa220f7a7afe4fc6969133be09e2fc"],["tags/groups/index.html","fb5f7e96ccc9fc1339de4f0d4295f376"],["tags/index.html","e8a023c233e31aa7c9751c8f873464c5"],["tags/iptables/index.html","b4b1c6e22fbd8271b5049768a2fdb309"],["tags/linux/index.html","b048007b882679053246654133c871cf"],["tags/macos/index.html","bee0ac41fc43e754046cc184ef79735a"],["tags/proxy/index.html","408fa2b296cec7a12cdea3cbe260f14d"],["tags/range/index.html","9faed8ab8f124e8e8feaf9f2de0cab8a"],["tags/rvalue/index.html","afedfaf04a45dd41d4aaa2e43a2175e8"],["tags/substitute/index.html","ba094ae727894f9ebeb66a55f394b4fa"],["tags/vim/index.html","174e7a689283470d475a8f01697b981b"],["tags/water-post/index.html","aaf1c082b3eaf429b324f8ceea8db882"]];
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







