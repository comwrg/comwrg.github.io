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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","f566fc54a2f1e1dd94614c3d58529d73"],["2018/11/02/about-linux-attr/index.html","112f9bf2b5225cf996549a39d519f0eb"],["2018/11/06/vim-range-details/index.html","a4e71bf523570b1b5a968da6037c06c8"],["2018/11/07/vim-substitute-basic-details/index.html","94df561917e3d56e7ac7cdf92a00104e"],["2018/11/13/macos-default-groups-diff/index.html","1dacbc38dcf927cb8dc797a27580200f"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","78813d2ab58dcc4376dea8a825d5d0b0"],["2018/11/21/algorithm-recommend-potential-friends/index.html","0184f5a4d08c1b9ccd20cba7821ec0b1"],["2018/11/22/android-startup-alert-dialog/index.html","2adb7d1a6076857b25ab5e92cf66586c"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","e4f12e753393aeb74c0fa638aa31f769"],["2018/12/18/algorithm-181212-1/index.html","6859694eb1ae2d8b0f88078a73e02328"],["2018/12/18/algorithm-181212-2/index.html","ae605f7bac7afeb53bbbd946ff21a6d8"],["2018/12/18/algorithm-181212-3/index.html","db4b270d2a7d3924aa4b7c18328d36f8"],["2018/12/18/algorithm-181212-4/index.html","6c97afc9266830f0bdcc6bd1fb6b49cd"],["2018/12/18/algorithm-181212-5/index.html","3dcbdd5ef779d1b51b53dfd4a091312e"],["2018/12/26/algorithm-solve-pocket-cube/index.html","4b2763a11449d4c7af1954d35fe89ac6"],["2018/12/27/cpp-rvalue-reference/index.html","dc20e6a968be0522e250efa10140abc0"],["2019/01/06/some-questions-about-gpg/index.html","cace8ccc9a663d136c8f8e3bd957a7ae"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","357ac87dc0a855fc34e1131a89744fa0"],["2019/03/21/add-commits-to-pull-requests/index.html","fef5b475daf48d51e2cdf9f03b90f4cc"],["2019/03/22/josephus-problem/index.html","a517f4cc5938af9653f167bffa081284"],["2019/03/23/POJ-1159/index.html","e82a4c1d367c392a2c09a9a7312b0898"],["2019/03/23/POJ-2533/index.html","dd71b600840ecadcf0dceb2e3608e16c"],["2019/03/23/UVA-624/index.html","9d4c57b8888810b4deeab64cfc96b0b4"],["2019/03/25/POJ-1019/index.html","5f8f19ea8c4f2e8d12cd164130da8210"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","d386e5be436a0bb591a25569edfee2e0"],["2019/04/17/experience-in-purchasing-P2415Q-monitor/index.html","750d1534e9c371fc381e20abb8199016"],["archives/2018/10/index.html","26a88ff817a97ce917e0a54c969f2a65"],["archives/2018/11/index.html","c53416b91ecd34eab53ca3a8c910fb73"],["archives/2018/12/index.html","11f797ffbfba42178978eb0a8fda45bb"],["archives/2018/index.html","06cd53592edcf3e54189384209c9c5a9"],["archives/2018/page/2/index.html","da771bf7f133c3ca24602d5ba3d4377d"],["archives/2019/01/index.html","4e3ca1ffb7a76ad0e0bb4f5735a58a68"],["archives/2019/03/index.html","6f6d0f27613e12205f684cace0314650"],["archives/2019/04/index.html","6acb2c4b8b7ad2c9f6a3e5fba03b0f9d"],["archives/2019/index.html","0c29223483a38865f5afb7dd6ce3afb8"],["archives/index.html","07b13c93261c0c61dbfd234bd7bfe753"],["archives/page/2/index.html","876adcdc8d9db0ed24fa2a889030a97f"],["archives/page/3/index.html","8a9cbc4a6ded4918c902b43031ee2418"],["assets/algolia/algoliasearch.js","c41ae37217e9870abe4a41f2923741d7"],["assets/algolia/algoliasearch.min.js","1278c3563ad328fc483ec5772b30a581"],["assets/algolia/algoliasearchLite.js","1c9cc1eb3e3de06a93bb390a4242beb5"],["assets/algolia/algoliasearchLite.min.js","55aac64547190f356c0e8bc5c0eca71d"],["categories/Android/index.html","f26c37fa7bf5240885e760a67de51b7d"],["categories/algorithm/index.html","672ebcb5e14420e6941ebf7a7b6ca9bf"],["categories/algorithm/page/2/index.html","acebb8d73a75f11728d4d4f3b86fb93d"],["categories/c/index.html","d0d362272e6a21cc37a96b949da85817"],["categories/experience/index.html","eb4e9ccd44051bf6b0e8ecf72f3cbda9"],["categories/github/index.html","965fec644940c88ed64f6755d91ffaf0"],["categories/gpg/index.html","a99a0f42e5bf69447c3d838331cfea28"],["categories/index.html","ac781955d521241ee5f9ea18887d7522"],["categories/linux/attr/index.html","a4986416b50728803fdc925b16df1c31"],["categories/linux/global-proxy/index.html","61e64ae1e308ce71e18dd63242a4cd06"],["categories/linux/index.html","721853b2794356f06964237d712b94d6"],["categories/macos/groups/index.html","7eab0f4f2612ef16add3fb235993eeae"],["categories/macos/index.html","93a5dd719694d50ffe1ab933ee938072"],["categories/ssh/index.html","4562088efc41836d3ca8999d4114afd2"],["categories/vim/index.html","db25eb417c890fa7bedf50ceb6c4b959"],["categories/vim/range/index.html","e8d1db6e49d583e3528a877bae814f8f"],["categories/vim/substitute/index.html","b85a110f5e667df91b1f6d0cd79fdf0c"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","a64fef3b727d3d605a95eb4cc625a6a9"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","a469b9a4b0a51942cc78b88d29a66d78"],["page/3/index.html","d16d8881b1ae23f6643efe2c54267f13"],["tags/Android/index.html","209862416eb78d241d47bb2b4493d0cb"],["tags/V2Ray/index.html","959200ac1788e75fef82ee409f93069c"],["tags/algorithm/index.html","e3ef5ef0ab0481d456d8174e3e022516"],["tags/algorithm/page/2/index.html","bb693704d7809e037f22937b9a67d0ba"],["tags/attr/index.html","c9b225963b51f3eb816acd225e149c0d"],["tags/authentication/index.html","62496620f488146ac85cde3e253649cf"],["tags/c/index.html","670dc811d8440906bc58cb4c8d081c06"],["tags/experience/index.html","1a4b125c3bdfb7d138c0d0d3efdad528"],["tags/first-blog/index.html","206c964b12b7cb9b7de3127590a977fa"],["tags/github/index.html","71a53d7d8a7f751645084a931bb1a95c"],["tags/gpg/index.html","55708fb13112c106618953ee745a627a"],["tags/groups/index.html","e8ff4e2e31d21dcc7fb5a321f270741d"],["tags/index.html","6c98e5366098eeac765d58b7db809de7"],["tags/iptables/index.html","7acc8d02ea5bb61b5bb8fb0b73d10aec"],["tags/linux/index.html","a384dc03ce6aaddcefa1fdd27cd3b1c0"],["tags/macos/index.html","e12881731d6ab0154b29907c93d7805a"],["tags/proxy/index.html","45b7d323ccfcb53ffa1e7d4f85be302f"],["tags/pull-request/index.html","3eda42ea787b9a9a1f59bd5c03688ae2"],["tags/range/index.html","73d5ff518b5795bea3a92d0df68d0c26"],["tags/rvalue/index.html","ec0ab4bfe38643b1a92b1cad56fcdd60"],["tags/ssh/index.html","965abac0dee1a0201c68c571f8518bf5"],["tags/substitute/index.html","f3a2a6f65ad67993581ff09c763f94b1"],["tags/vim/index.html","24afa83868c34e51d2bb7ad72748ef5d"],["tags/water-post/index.html","7bfeb309946468263b11a4e170f91b11"]];
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







