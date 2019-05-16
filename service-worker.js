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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","f772eb955b53846bf8005a739d6d119e"],["2018/11/02/about-linux-attr/index.html","d16e1c2b93de04ae25d42da2e3bc730c"],["2018/11/06/vim-range-details/index.html","40e14246bfc63f36021e04a26eb456fa"],["2018/11/07/vim-substitute-basic-details/index.html","193b62e4731ef267d39dba366a410811"],["2018/11/13/macos-default-groups-diff/index.html","58e46d79c9161b4ecf5a9b7eed2a14c3"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","5e24b38fe2ce13247dcd8affd695c35a"],["2018/11/21/algorithm-recommend-potential-friends/index.html","ed058fecb920622bd4d959b0aee00ef6"],["2018/11/22/android-startup-alert-dialog/index.html","21840254fc2dc853734265692bab0afe"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","ee7fb35df9df60beeace731bd9720d9c"],["2018/12/18/algorithm-181212-1/index.html","1c99b11d9ff7412200da923263b9d165"],["2018/12/18/algorithm-181212-2/index.html","16974acf5469124043e1761c76f4f562"],["2018/12/18/algorithm-181212-3/index.html","580016543c1df5a955d916951988cf59"],["2018/12/18/algorithm-181212-4/index.html","2e99bde86467895879bc6db631e0a9c8"],["2018/12/18/algorithm-181212-5/index.html","9ce2f8050b6d8e7cfe582e8324cd2fcf"],["2018/12/26/algorithm-solve-pocket-cube/index.html","54064494ac9e0159b27f738496920a6b"],["2018/12/27/cpp-rvalue-reference/index.html","39f3530b5ce94c16b8134aa2ec548f4d"],["2019/01/06/some-questions-about-gpg/index.html","5a7758e67acac8735961f93188936e3b"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","a3854f429a5454569814ac26bf867efb"],["2019/03/21/add-commits-to-pull-requests/index.html","4c7c104133a490d1069e12d8b4f76b1a"],["2019/03/22/josephus-problem/index.html","ac80a1c3208151d3bee08838ff733265"],["2019/03/23/POJ-1159/index.html","40ebe0c65c46582aae4c4ef7887bbea3"],["2019/03/23/POJ-2533/index.html","da4b82306210f7b12e4ff2bb2babd9ce"],["2019/03/23/UVA-624/index.html","1f0486694b7bb55ed14deab6395977d9"],["2019/03/25/POJ-1019/index.html","717b19dd74ab88b96d446d37c4f4878e"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","9ed6cb59c747e72d31b797e02dd6cf4a"],["2019/04/17/experience-in-purchasing-P2415Q-monitor/index.html","4a10413130ab842093892afaf5b80166"],["2019/05/16/bat-minimum-swaps/index.html","850fec8e5a62df7dcb752ffceef5cc27"],["archives/2018/10/index.html","b58318fc5e7c3775550cf7c73d78aba5"],["archives/2018/11/index.html","a0068fe83f9e9a288c596a4fb0944ebe"],["archives/2018/12/index.html","151d2523aa4f3208c3e1f04ec5c5de10"],["archives/2018/index.html","ec8ab59ac2788db1300d896bcdeadbb4"],["archives/2018/page/2/index.html","7f17aeabecb81c3a362d5ac0c4843fa2"],["archives/2019/01/index.html","017059f82e23fcd5a61a950212fb9b64"],["archives/2019/03/index.html","2124c39e9077596bec767dc3ebccb142"],["archives/2019/04/index.html","6f7ce997c9a35e295f06593b66f40fab"],["archives/2019/05/index.html","a68a3a205f362896c0402298132df03d"],["archives/2019/index.html","6cc080054cc0a0207366fd082134a724"],["archives/2019/page/2/index.html","9edd3c4cbe6c35a4d83084d041896da8"],["archives/index.html","a6f9124d0eaf4df41e59ccaf945768e9"],["archives/page/2/index.html","e74a927fb9317e8c55e383164cfb6f31"],["archives/page/3/index.html","b89d04001dc9d69cf79035a1cd9344e5"],["assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["categories/Android/index.html","338d861c6aa81f79bcfef0f3dee70f7a"],["categories/algorithm/index.html","42230f3781e0b2063685dd0bc67e8b1e"],["categories/algorithm/page/2/index.html","c99bc9464eaaf420f617fea780869ee6"],["categories/c/index.html","da0ab8f062895e2984e52a6d05948077"],["categories/experience/index.html","0eb9fb3aec886855541896c94d5a2a21"],["categories/github/index.html","fbaa3787f83211d7e73ed18d82e77b65"],["categories/gpg/index.html","b5b1e1e0f6025c703cedefe71918a646"],["categories/index.html","c13b5a74a712d5a49f740719b4fd9edb"],["categories/linux/attr/index.html","c432f8c9458438422314d82c8fbdcb0c"],["categories/linux/global-proxy/index.html","5979e7efd0afd0260d507d034cc982f3"],["categories/linux/index.html","a8b6b3b9b71097e3b92c8e89840f9d2f"],["categories/macos/groups/index.html","c38af9fdab6aa8480775e22ae052e77d"],["categories/macos/index.html","586088af6d43c6cc8724b8c00a87921d"],["categories/ssh/index.html","373e865b94f834163f9585bb5c3d022d"],["categories/vim/index.html","70065790c1b05c8d71211c9eb817ad8a"],["categories/vim/range/index.html","50796deccc10e5f66b8cc2cf77e1e9a7"],["categories/vim/substitute/index.html","24c8c6526a1f7fc5bffcea7a12e2d447"],["css/index.css","5ee2afc5f114aa14984a3dc678a8b2c1"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","95e9ad5f202d837f245f4b55469a9766"],["js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","5af1584ae5a8bc637cdd3d275a5a8eb1"],["page/3/index.html","6eaf3fc625bb63b5342925ede04c0e20"],["tags/Android/index.html","df6560a6a1bbc01e2586cfd2797014f6"],["tags/V2Ray/index.html","cf7c8ce902aed57727850d4c36289bd3"],["tags/algorithm/index.html","55f6c13aee80142bf502223952cde35d"],["tags/algorithm/page/2/index.html","e16530da9af410458d137c5bc7b0b27f"],["tags/attr/index.html","b51a79d03f3a002aba1d478ffcba2ff6"],["tags/authentication/index.html","47f27b658422d50618aa796e52e29cef"],["tags/c/index.html","24270ebffa85e2aa980403cc4c55daf9"],["tags/experience/index.html","9fe2ec9db7b6afc5ea9197fb19811893"],["tags/first-blog/index.html","51dc6777b1852958c460ae6108542809"],["tags/github/index.html","1bdabddf3669578e73ef008e4a91f107"],["tags/gpg/index.html","e1ea6a54bbdf5b9f5270ee9471b2e2ad"],["tags/groups/index.html","8aa7f1b9ee6f626c55ac9a24c4f16854"],["tags/index.html","55fbe369dffe5262edee911b53252a04"],["tags/iptables/index.html","fd1bc5c89ade5086404b90eda76a8679"],["tags/linux/index.html","13b85d9374a9e746323c1aadb41ea2aa"],["tags/macos/index.html","4030884a6711a702d4a6916be1edcbd6"],["tags/proxy/index.html","c4b08c766bbeba18419ddd3b6d7f1e38"],["tags/pull-request/index.html","2303728eb6d8aa8eac9337fad6c43c9c"],["tags/range/index.html","d62421d8dc7ec0f30bf301568db3bc06"],["tags/rvalue/index.html","999fc6c855478279f2128a721d8dfb01"],["tags/ssh/index.html","292e87e21483baaf4483ff6049c5fed7"],["tags/substitute/index.html","76503d22d985fa2fed1446c432233c95"],["tags/vim/index.html","14ac70e05faed40603bb3a8b14188a7b"],["tags/water-post/index.html","12b041b4552e22adb3c7161d28fa3dc2"]];
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







