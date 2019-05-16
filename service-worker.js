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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","01a237abfaed35cf53003b2fc187fb7c"],["2018/11/02/about-linux-attr/index.html","725c41420dd1d3ab23ade240b5db96f1"],["2018/11/06/vim-range-details/index.html","059896e7070b2c1260fbe47b575db152"],["2018/11/07/vim-substitute-basic-details/index.html","de265267e147f2f688aa4bfaf2c8252c"],["2018/11/13/macos-default-groups-diff/index.html","3257bfcfb7e3d1c85977c4c64f34cf23"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","1c6cfb77b02c4c6b968f86af5513e0f9"],["2018/11/21/algorithm-recommend-potential-friends/index.html","6b4e4ccf258560e35f7f9836544838e3"],["2018/11/22/android-startup-alert-dialog/index.html","3df14ee0655ab08f57dc72da1b656656"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","a918cedda0c1a6c8471aeec4af2acfeb"],["2018/12/18/algorithm-181212-1/index.html","17b648af9f44afe5c5f4b2e883335e18"],["2018/12/18/algorithm-181212-2/index.html","1820e30d8ce574875aaea14fd6ce5436"],["2018/12/18/algorithm-181212-3/index.html","999393534d42e9dc5f15eb0ffc68c9ae"],["2018/12/18/algorithm-181212-4/index.html","0811a524f637d94c89c9e6b9b64539c9"],["2018/12/18/algorithm-181212-5/index.html","c1d5c2ca326e4f6ed12592a1ca37d737"],["2018/12/26/algorithm-solve-pocket-cube/index.html","82608b27a6b7519926c7cff6e7ddb391"],["2018/12/27/cpp-rvalue-reference/index.html","aa002b7b63a76dff9296e6257865baf7"],["2019/01/06/some-questions-about-gpg/index.html","aeb1532d344a2927b1947fdbb3984332"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","9a481a4ed4f92682e29e1be0ddeaffff"],["2019/03/21/add-commits-to-pull-requests/index.html","9d9db186ee36b2a766ab58b1589da5d9"],["2019/03/22/josephus-problem/index.html","6c179549e61a09847d18454f860aca18"],["2019/03/23/POJ-1159/index.html","9c92e861cc91b5227976aa1f95fa89e9"],["2019/03/23/POJ-2533/index.html","8555208d559167feaf7c8191e59b9168"],["2019/03/23/UVA-624/index.html","5e0b34551af42aa12033ebdead50391a"],["2019/03/25/POJ-1019/index.html","da343221a1666b995b550ab9a2a899c4"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","db701910a73c493b4af5f7516a048775"],["2019/04/17/experience-in-purchasing-P2415Q-monitor/index.html","035c3ffb5359466580edd42b4482e85c"],["2019/05/16/bat-minimum-swaps/index.html","db41c8120cc7fd9627a08b7814bfe6be"],["archives/2018/10/index.html","3d3033b58d8d797e8bd094bc39e49286"],["archives/2018/11/index.html","3147c76fb30a048092600200fffab313"],["archives/2018/12/index.html","59961792a3af393aaa044b4124f94e2e"],["archives/2018/index.html","4bf267039c7c5d596e29088c369fd7dc"],["archives/2018/page/2/index.html","e4d30f10e1dfd840073ae6b4215b4cca"],["archives/2019/01/index.html","8631efcb2fc3ae6be9d2cd2f39497da3"],["archives/2019/03/index.html","d593bc6c3a85a2c6b96ddaa4b5149d0e"],["archives/2019/04/index.html","bb8e515a7371710c78eb0ee8bea821fb"],["archives/2019/05/index.html","3e9f2b7e87bceb5756b6b3b42b92a23e"],["archives/2019/index.html","9126b1e6914aa5ec6dc3a5b745c4b2db"],["archives/2019/page/2/index.html","dcb4b18e001d6008267f95daadc676b5"],["archives/index.html","e67fd42b0f232b1fd0c0fa78c457df41"],["archives/page/2/index.html","ae720371c130ced35defc619ef375c36"],["archives/page/3/index.html","53941cca7a630c69843e23940031fbda"],["assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["categories/Android/index.html","ecac88f247da5cd5d7c0218e1aab0041"],["categories/algorithm/index.html","cb89b72a420e7249799cc87c990219c1"],["categories/algorithm/page/2/index.html","01157a367de7dca1bc97f175e7e249af"],["categories/c/index.html","5b85090a8ad738af50e86aa976835475"],["categories/experience/index.html","8d2734d16f18babf8280726dd8ee97c2"],["categories/github/index.html","57c10edc9a0ffba452b67cdc55c61d84"],["categories/gpg/index.html","9722ea7f3b2272fd3876cef56adba59c"],["categories/index.html","ea2d68652f15f3148d1e5eb5f8510d6e"],["categories/linux/attr/index.html","be792cf2872fa2f04b462400015f215a"],["categories/linux/global-proxy/index.html","ff1d58ed6df6174142ca196a4a665394"],["categories/linux/index.html","910bbd9365e743d0799e2927ba36d9b9"],["categories/macos/groups/index.html","057383a9ff9d14a0f52a85a2e50dc873"],["categories/macos/index.html","cb66a18977ed124f899870dd061f7476"],["categories/ssh/index.html","6a1eb0e62acf9466c0af1fb7b9ffc2a2"],["categories/vim/index.html","cfd7fc57798686c623b1145b1c028b61"],["categories/vim/range/index.html","e9a1bfdbe9216a380181cac8c8caf726"],["categories/vim/substitute/index.html","b9654391134c0e10fca9b308333f8b36"],["css/index.css","eb7d1d29f3db9bdaf7a5a89013db639e"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","6c60a4e7fe932abbc297f09197931ed2"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","f09d56fad63e9af397da97afe966d40b"],["page/3/index.html","464f1d18da6a6eed6ccfac46fdf502e7"],["tags/Android/index.html","730ab33ce1aa52be548cbfc3b4f48642"],["tags/V2Ray/index.html","a75a7deb69c988869c1a387653c3aa9f"],["tags/algorithm/index.html","8f7335194634f6d078907283e7ff6cc8"],["tags/algorithm/page/2/index.html","c29d86c19a2f96a798f8c430f4f79776"],["tags/attr/index.html","7077b86ef65fc61dc3c2a3be1c22d7d7"],["tags/authentication/index.html","f93036b5aaec2e6b2a18af2614f4457c"],["tags/c/index.html","132c7263a8c2246f0d8df79ce668899c"],["tags/experience/index.html","ba0a114c74e19b8a58942e6c49bffbc3"],["tags/first-blog/index.html","ed68d1e25b47a9e6a7673127acbab016"],["tags/github/index.html","0f496628700738588c190352000c1631"],["tags/gpg/index.html","0c210b23e3bd0da5edc1e1d9edcfe3ec"],["tags/groups/index.html","358d6d54f3e15f5af6d9ccdad5566274"],["tags/index.html","c6f70c0cfba829bdaa288d0448cc63f6"],["tags/iptables/index.html","b71e7f008fa7e91b7fe4da0fe82f13c5"],["tags/linux/index.html","7a0792f47ea331b1e1cb774444761269"],["tags/macos/index.html","a3d233e340784512bae90570c93e92a8"],["tags/proxy/index.html","e0890639d9122a77e81bfe766e00d2b0"],["tags/pull-request/index.html","5d947393a2e784e3bb1493346db4c1b5"],["tags/range/index.html","921b0e9ba137f66fc7606b8f30cd064b"],["tags/rvalue/index.html","229e742e429526c34527a1990d3a10da"],["tags/ssh/index.html","3fe544d5a6fd84c8e600e40f0482b8bf"],["tags/substitute/index.html","b2133e62f13461a981cdf1074f33c7dc"],["tags/vim/index.html","2d9ec30238d0dbd5610403d563ad818a"],["tags/water-post/index.html","f7735c7ccdac97464ce280987d52fce6"]];
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







