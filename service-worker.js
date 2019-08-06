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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","ab6c3761238c6350ac13da1d82dc3a7b"],["2018/11/02/about-linux-attr/index.html","d69ce91024240bbbfa49d3d604c6d902"],["2018/11/06/vim-range-details/index.html","394fc39d5fc7251c5398f191224d90f5"],["2018/11/07/vim-substitute-basic-details/index.html","8c0e580a8f42ed694408abf249cbbb63"],["2018/11/13/macos-default-groups-diff/index.html","2dcef7ba04cbd22f1219960860e3af67"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","0287c77c4d92d51938623876ce54baad"],["2018/11/21/algorithm-recommend-potential-friends/index.html","660f6df7c3f59a3d13b0d1743f7a8ea7"],["2018/11/22/android-startup-alert-dialog/index.html","86551a63a04263699c116160fb8316e5"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","edef6e401953dad0c1a6966dc77812dc"],["2018/12/18/algorithm-181212-1/index.html","8b3eda1bfd4c15de89762feb03a7985e"],["2018/12/18/algorithm-181212-2/index.html","94219c4e34350021b9cab309e28f4fa2"],["2018/12/18/algorithm-181212-3/index.html","58391045fc5026e8a03b30e85aa77a99"],["2018/12/18/algorithm-181212-4/index.html","e20b85e571a66ea5364298311a2008b3"],["2018/12/18/algorithm-181212-5/index.html","df4fb31f328ccc54f1509a456dbbb098"],["2018/12/26/algorithm-solve-pocket-cube/index.html","a6679333c867f53457173681f1a83463"],["2018/12/27/cpp-rvalue-reference/index.html","693e847b08b73bc0373d9453023ad1a0"],["2019/01/06/some-questions-about-gpg/index.html","90a1aeca1cb2b9010071d7f473b2385a"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","f59bdae187e59f9448b59c5ae736c550"],["2019/03/21/add-commits-to-pull-requests/index.html","8bf9001b2daed64382d6ba6810b0aa0d"],["2019/03/22/josephus-problem/index.html","7a7f98d8631187bbb2e8df2da99c9e55"],["2019/03/23/POJ-1159/index.html","1159be4daf9993fecc75822a623c5303"],["2019/03/23/POJ-2533/index.html","ffa2a46ef0eddb13b38c05822b937253"],["2019/03/23/UVA-624/index.html","a514cf0599bd33e6f9eda403477ad97f"],["2019/03/25/POJ-1019/index.html","a484184a6b7b930048805104f0a015dc"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","9cc3ff9199cb4de94c12da4fbe110266"],["2019/04/08/git-commit-part-change-during-single-file/index.html","92aee708f9bea4944779f390d18080a4"],["2019/04/17/experience-in-purchasing-P2415Q-monitor/index.html","86f8c18eca9e2a3a6c6488d8d8d7d3fa"],["2019/05/16/bat-minimum-swaps/index.html","952f1a49f39b8fcef6451d4d2751a73e"],["2019/08/06/string-to-hex-using-python/index.html","0eb1f222589c41bd500209415a720aab"],["archives/2018/10/index.html","b9facce95165ef3045a501ef7c5601d6"],["archives/2018/11/index.html","4be80f74a3e09d831a341303d16edc2e"],["archives/2018/12/index.html","e04256f190c5cba3a16beec08786a6e4"],["archives/2018/index.html","0ae64fec2583667362e72c2b1b651da3"],["archives/2018/page/2/index.html","e4e27fae2d0c51361c586f12283f17d8"],["archives/2019/01/index.html","446a68a0d0257aa0d9dfe00ae4c22a8b"],["archives/2019/03/index.html","a4cf3a04281d1cf9e455e0a9fb289441"],["archives/2019/04/index.html","3e8f0197419edc4fd46dee9b3930cff0"],["archives/2019/05/index.html","7a65bd24be6545f259448275d50e7e62"],["archives/2019/08/index.html","b3d53b9054a886f243eba85eaaf0d059"],["archives/2019/index.html","023e33d823a1e5ef1c84bd033a54f76c"],["archives/2019/page/2/index.html","1a25f3d6a0dd148f5ce164910580e5c6"],["archives/index.html","11b990d6b0294fca3e0fd32918448ce1"],["archives/page/2/index.html","84da30d4a25db56a4fd34c6dee62d48b"],["archives/page/3/index.html","6ed0547ea960385cbd126a7c28446ebd"],["assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["categories/Android/index.html","2d3f670ca1ab60e8dc300a825bdc63f2"],["categories/algorithm/index.html","4fc2472c6606aee2d79866177958f304"],["categories/algorithm/page/2/index.html","230d52648f459c9c1d36090d778b1636"],["categories/c/index.html","efae8050fce91998665d9e341435be7c"],["categories/experience/index.html","2be04a43d0345bb93d4dcf557a8d934c"],["categories/git/index.html","87230295c54a30c38501d02affbdf428"],["categories/github/index.html","c2e9db8fc1aca92b2f6f7d51f2d659cf"],["categories/gpg/index.html","8c7c68d69aa545265520656b82c329f3"],["categories/index.html","ef822ad835af57284cd476695dbbe360"],["categories/linux/attr/index.html","0d25a133b89a2c04b6a3a1098fec4a19"],["categories/linux/global-proxy/index.html","e9daa534a1959fcb36d61b69345c32c4"],["categories/linux/index.html","93e6b018ac6f91977354124a13112088"],["categories/macos/groups/index.html","282a2c998f7c140e86d5791a5d1f532a"],["categories/macos/index.html","a249f460a9ca28cf6fe5b981fd790b4b"],["categories/ssh/index.html","e2c2b180aa3179ba0e0a6c075d9b5ab2"],["categories/vim/index.html","05f749b405ac689e4bd9a52ec3f42168"],["categories/vim/range/index.html","c62073bece2726b9243bfb246ded5b6f"],["categories/vim/substitute/index.html","c2f1ead60668ea54f9d6ef003bd8bc47"],["css/index.css","9c62726fb134fa43dd154959768e66e5"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","385238b7f0bd3d46b21bf44495e723e7"],["js/copy.js","a6ad34d1b890d7024823798a2ee43890"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","c0c3b3fccbf160cca48eface3f368ef0"],["page/3/index.html","6d6474e273172d5d2643b9a9e5a2c62f"],["tags/Android/index.html","80c75c2398189c9a3e34d25da9201499"],["tags/V2Ray/index.html","121248093e8d97a8ab77565ae98feafe"],["tags/algorithm/index.html","01a8cc07060745141fe8b29792af1dda"],["tags/algorithm/page/2/index.html","339d44cca65e60e51f2fe84a2242b155"],["tags/attr/index.html","0646c260cd519404f5e7afe80f3e3add"],["tags/authentication/index.html","7ae110c8b1e8c70148f752ea1e9afec1"],["tags/c/index.html","c745957dec4bb9d7b92ebd11272dff02"],["tags/experience/index.html","373dc5daea7648557a2e43f42edaba2b"],["tags/first-blog/index.html","db53cd398b65dbefaf071e1413618a05"],["tags/git/index.html","a128d68c87ba4cd264e40540de919a1e"],["tags/github/index.html","274f276103a681981bacadf661c3d525"],["tags/gpg/index.html","9b4575ffd85e75b05fb65c29931b9270"],["tags/groups/index.html","15d619235e37299ded110931ac9ccb27"],["tags/index.html","404415e61b6dd1409df2ba163330618d"],["tags/iptables/index.html","6788d252d1fe64a282ed940623abf017"],["tags/linux/index.html","2c859de9dc427e80e1073b83d5c81750"],["tags/macos/index.html","04fef58d13b02cae2ea03e9f04d39221"],["tags/proxy/index.html","84cad384a25f6cb9b550d97ee64aa947"],["tags/pull-request/index.html","4c2c4812142adca46274e6c71a00058a"],["tags/range/index.html","11b1297eb14d60cb79b5dc26b06317e6"],["tags/rvalue/index.html","51d2a1b9eafdec26f9a0beeea0ac263f"],["tags/ssh/index.html","6a0d51f746eca24197a09e1eb56880ad"],["tags/substitute/index.html","73d5b0a39f3a2d0069e6b9ddf40a4cd4"],["tags/vim/index.html","d2efe035a93e90cd69f20227e5396187"],["tags/water-post/index.html","57c9a1c3cfcb0c0976fcfa69455497b3"]];
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







