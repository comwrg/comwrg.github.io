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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","debd2b6f13b25203dbe7332bfefb8fb8"],["2018/11/02/about-linux-attr/index.html","3356363e2dc25dbcac9eb33f880a4da0"],["2018/11/06/vim-range-details/index.html","010f6d9566ed9783ae6ab8cc10c27aaa"],["2018/11/07/vim-substitute-basic-details/index.html","9894beefb5465ccf4b6bf4249aa49ae2"],["2018/11/13/macos-default-groups-diff/index.html","eaae39977901ccb96ff8ab9f9db303b8"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","286258cf8097198dd6a401da53f80432"],["2018/11/21/algorithm-recommend-potential-friends/index.html","ed7f4d5996d6eedb067331d672907f92"],["2018/11/22/android-startup-alert-dialog/index.html","1b1d23f683ca30c08625ac5886bfce42"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","55633d633aced1b2833d88d39b4235df"],["2018/12/18/algorithm-181212-1/index.html","c1a4c89a93f1c1b642fb0b370753eaed"],["2018/12/18/algorithm-181212-2/index.html","a3eafb56520572265b1c30c2c64a445b"],["2018/12/18/algorithm-181212-3/index.html","595086226697846a1473a10699e70945"],["2018/12/18/algorithm-181212-4/index.html","c963103ac69d19e4f6e1c6eef6a55cb1"],["2018/12/18/algorithm-181212-5/index.html","51f4df68a8c2e28af697b38092647846"],["2018/12/26/algorithm-solve-pocket-cube/index.html","1e0ea33df7a54438da0282519711353b"],["2018/12/27/cpp-rvalue-reference/index.html","8015aae9d088fef0026355b291a9b0be"],["2019/01/06/some-questions-about-gpg/index.html","016019e77be65ff61cf9a74a6da54fa0"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","3bd2f6081f047fe21ac7e47559474e71"],["2019/03/21/add-commits-to-pull-requests/index.html","6ce4a50467d32fca83f0b0e846b68a40"],["2019/03/22/josephus-problem/index.html","2bdf5b21378fa215df5e0e2f721c47f4"],["2019/03/23/POJ-1159/index.html","c2984a34c12032773c0295245eabc4ed"],["2019/03/23/POJ-2533/index.html","9682437f8405de3debc2d6f2f26749d2"],["2019/03/23/UVA-624/index.html","fcb26eaf671d4eeb5fd6c0987781b035"],["2019/03/25/POJ-1019/index.html","a85f1790d66140c8502d8f71e173699b"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","edf1959ce46a3459f5beaba1919dae35"],["2019/04/08/git-commit-part-change-during-single-file/index.html","0268315cc5328bbdade8d35e1d4ee504"],["2019/04/17/experience-in-purchasing-P2415Q-monitor/index.html","1852836b882706081b3c944ff057e94c"],["2019/05/16/bat-minimum-swaps/index.html","02ebd0ef11c1d3c07c6060c3c1ff1f3c"],["2019/08/06/string-to-hex-using-python/index.html","0745068772b69185acf4f694726e2114"],["2019/08/09/wp-backdoorgood-writeup/index.html","43d676afa30cde12ab855253b24b264a"],["archives/2018/10/index.html","b0a7912412e9851d8a700eb54d825db0"],["archives/2018/11/index.html","a6bb892e668e3748bd0d20abceb0fbad"],["archives/2018/12/index.html","c36f4128bd495086d1d6ff752a5f5030"],["archives/2018/index.html","014db41056f9d6d72914e193853a151f"],["archives/2018/page/2/index.html","22c08a954cd22485599216b7d65fd4a2"],["archives/2019/01/index.html","a1dfb70151997c67c5f29a31e578dcaf"],["archives/2019/03/index.html","bcf69e7d654d14a13c159c511fcc1ebf"],["archives/2019/04/index.html","93704cf7a932a6a68b1c79ae94dbe697"],["archives/2019/05/index.html","01d4b3d6dbf25a6b5d28ef6e7d8a52b4"],["archives/2019/08/index.html","33979092915a758d1c69a8ddd3d7c82a"],["archives/2019/index.html","e67440fadba975eb54fb28f90f056da9"],["archives/2019/page/2/index.html","09c077ab47e17c8de5a3bfd9cac25b86"],["archives/index.html","7abca31017a785a9685ea42801adfa90"],["archives/page/2/index.html","5de4fb0fdea49952e4d3effda28a4e12"],["archives/page/3/index.html","84275f64fb7aefc8c90aab0e53dc7a9a"],["assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["categories/Android/index.html","0bd757dde9e3dcd17288c92807a66dfe"],["categories/algorithm/index.html","8a4dedaeb91a7cd15779cda601d15282"],["categories/algorithm/page/2/index.html","fc5361534885478d2f5a0f0f3f1ba06a"],["categories/c/index.html","d547c7f6e87fe66a4386fbb7e72403ef"],["categories/experience/index.html","4e6ad205ba305ed2a401896180f90f54"],["categories/git/index.html","07ea64e6061339e7fcb51d7d40afa031"],["categories/github/index.html","faaf065d1a67c1e9be9882fc40bdd758"],["categories/gpg/index.html","33bb903631a5903669d5c5e55360f8b2"],["categories/index.html","6600aa8f11dc126ebab24d52f3db8000"],["categories/linux/attr/index.html","5442e7dc2f664651107c11536851d5b0"],["categories/linux/global-proxy/index.html","4f3673d0b656a006ed399946c93450db"],["categories/linux/index.html","a72e6a0ffa1e3d1fd0594ed095b45f69"],["categories/macos/groups/index.html","ed480fa8ff153999276c3d1a7ee88938"],["categories/macos/index.html","edf368c608b83fce11da216e37447fe8"],["categories/ssh/index.html","ef61b5e512091fa7cacde1197133a9d7"],["categories/vim/index.html","a1e8af6bf697d4e2640921c229e80bc3"],["categories/vim/range/index.html","9573f445aead8d08cb6f7dea2d8c3f31"],["categories/vim/substitute/index.html","5a1e5ac21e04959d92b96f0f30d04e92"],["css/index.css","9c62726fb134fa43dd154959768e66e5"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","307ca9c4cd08a8b824592cc940c92bc3"],["js/copy.js","a6ad34d1b890d7024823798a2ee43890"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","69b64a6d71de22031a42b80cedd486f0"],["page/3/index.html","4b53a1c5d82efa707d56e3a65c820710"],["tags/Android/index.html","fb4cc280d4d61b68b6d5108c2404d9f4"],["tags/V2Ray/index.html","d0c0622c47cf5a2342f46693dec3d1c2"],["tags/algorithm/index.html","4aa3762c293b09ad34a49dfaa7ba8d36"],["tags/algorithm/page/2/index.html","f6b2185e188bcc69f5d9b9ce4ad0485b"],["tags/attr/index.html","cb0b8ed78cc22775291cb3414042cff9"],["tags/authentication/index.html","09ffcef007938c2befa91813ecb77712"],["tags/c/index.html","4fbae95f475f314b99debefa6130959e"],["tags/experience/index.html","45a3e29d974c1d9b1b664f67e98f51ea"],["tags/first-blog/index.html","e44d739f370d19869dcc827b531cbf35"],["tags/git/index.html","6cd278c96bfccfefc81c3362d5acba24"],["tags/github/index.html","3c740858f77b6ae19ef5b27d1283dd96"],["tags/gpg/index.html","42aab90a76da79dfd2e783ae4fae32a7"],["tags/groups/index.html","e6ac28451970db9674e924a55043a14b"],["tags/index.html","8bc37be07061c4162f7d994e32f1ddbc"],["tags/iptables/index.html","bfa4a8694548f28079b1d933582a33ba"],["tags/linux/index.html","cac5e2760fc6912a03f17a5d889acdb3"],["tags/macos/index.html","105368b76df3f59c71285df68646f7bb"],["tags/proxy/index.html","af0beb12a07e96a1ea19bd2b6767145b"],["tags/pull-request/index.html","bb777e92aa1d7dff9de03d31c0874a27"],["tags/range/index.html","114812133a03a3604ac0421906da2a91"],["tags/rvalue/index.html","86e2eb539fb9b1ad7f9c85cf4e2b043a"],["tags/ssh/index.html","1e5a5b2c819415c29c96ea1b1376ab98"],["tags/substitute/index.html","4d1e37e07317a3fe93e0be249c211b73"],["tags/vim/index.html","b06877b66b2ea63a379b88b36c1d1e55"],["tags/water-post/index.html","241cc8cd862edc8341455cfcd2856d97"],["tags/wordpress/index.html","bc4a96b7659fe81ce9f4c2e3b34b9b4f"],["tags/writeup/index.html","48fbc1fc4cb1d20385b2826b10acebec"]];
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







