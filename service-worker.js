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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","3e63d02c74d0fbda2ed3419f5f5353f0"],["2018/11/02/about-linux-attr/index.html","68fd8027c65487d757f7005764c91c65"],["2018/11/06/vim-range-details/index.html","29d3c62c901f1fdbf603e1b2a69ac51f"],["2018/11/07/vim-substitute-basic-details/index.html","d9cfaf0bc6899ef201fe3d201ca53369"],["2018/11/13/macos-default-groups-diff/index.html","b94339c474fb3f9d4055df7060850b31"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","9c1250853b3490b0f4263d54a9f072b9"],["2018/11/21/algorithm-recommend-potential-friends/index.html","d5ea2da787fd87ebc92cc5ba2af58387"],["2018/11/22/android-startup-alert-dialog/index.html","17dca9cc780291d06f16079b545cbb07"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","ac7b9468843d22f9a9a021fbbf6e97f2"],["2018/12/18/algorithm-181212-1/index.html","21cad5f3d1b7672ce028b357f2026bd7"],["2018/12/18/algorithm-181212-2/index.html","80e4d801a7dafef54f702b8cc99daa0b"],["2018/12/18/algorithm-181212-3/index.html","1082d164ed84f71bb51181faa416a7ac"],["2018/12/18/algorithm-181212-4/index.html","0c3f5bfbf55c413182b34324a47152d9"],["2018/12/18/algorithm-181212-5/index.html","c0ba21ffaee881e2bb4237c67026789c"],["2018/12/26/algorithm-solve-pocket-cube/index.html","a5d2fca78a42fb312c1c5d2b9bd0c388"],["2018/12/27/cpp-rvalue-reference/index.html","527384cf56f5c268ac347f221bcc8526"],["2019/01/06/some-questions-about-gpg/index.html","d496d47bd0d3eb602a8087cedc1041e9"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","5b3cbc0f10d8dcb89c8aeab8a024e072"],["2019/03/21/add-commits-to-pull-requests/index.html","ea67cebd4a29ae6ead36a7ff60bc0fd9"],["2019/03/22/josephus-problem/index.html","3dcd9fea0680a24c82668a05ddc65ac9"],["2019/03/23/POJ-1159/index.html","20dcda06565da77356352cd53842908f"],["2019/03/23/POJ-2533/index.html","fa426cfc98ab24dc6137bd4612888070"],["2019/03/23/UVA-624/index.html","ab8dd3c280cd770da394fb441ac0e29c"],["2019/03/25/POJ-1019/index.html","35fc72ea67e910bba86b9c6ffb2cceaa"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","7bedce0f7cbb7f12ed6c2e41dc9f4be0"],["2019/04/08/git-commit-part-change-during-single-file/index.html","b7e795e0b5e02de0b8c4cad923e9d50a"],["2019/04/17/experience-in-purchasing-P2415Q-monitor/index.html","593dedcd875e2cab7b43e7cd2895b078"],["2019/05/16/bat-minimum-swaps/index.html","60b8d0bbd44b31d4f11d23f3a59612f1"],["2019/08/06/string-to-hex-using-python/index.html","a502a11b0c9f294ac936f880529e2a9d"],["2019/08/09/wp-backdoorgood-writeup/index.html","686988c5f70672a1ee68244192456429"],["2019/09/07/CVE-2019-0708-vulnerability-recurrence/index.html","cac14a5662f7642f617ba267708ab96c"],["archives/2018/10/index.html","467bc95c478ec6e76a3445a281dd8fb3"],["archives/2018/11/index.html","2295037980cd13db79375404563990f4"],["archives/2018/12/index.html","ef65f0c0dcee33e3ee9649cc8a2dec5e"],["archives/2018/index.html","0f734f537f13a10dc0721301ad749111"],["archives/2018/page/2/index.html","d93d93513a34176f351036a4b9e871b8"],["archives/2019/01/index.html","33616b238908ea258f2d3474ccd9a476"],["archives/2019/03/index.html","e8312c0ca8b82f24fef902c7becba168"],["archives/2019/04/index.html","a1b94b473cf7811ce66a1607e9168c8e"],["archives/2019/05/index.html","1b7a0c3949b4059ccbccd3176ef2f368"],["archives/2019/08/index.html","b9e62c33b19f4be614b30b57c20874ef"],["archives/2019/09/index.html","cfa0495b0c03b079a4d3089d692d9d3c"],["archives/2019/index.html","a5d4548db6f92312f04c8febe055fb8a"],["archives/2019/page/2/index.html","86a4d025f869d4799ea9a3f3bacc0dcf"],["archives/index.html","3768c59af3138b8f1d7f1b1be51447ae"],["archives/page/2/index.html","9867c0064da99ceaa30c872ccef9a71c"],["archives/page/3/index.html","dfb1028f4b32de852c187d3fcb8d2529"],["archives/page/4/index.html","1c08ac2dad2d4009c2e0d76b2fc34894"],["assets/algolia/algoliasearch.js","61caddb3e91165f4a39231b58959ea65"],["assets/algolia/algoliasearch.min.js","d9ef9ebf6b31419239cff8047b30e15e"],["assets/algolia/algoliasearchLite.js","0fea8fbf28c472c562fcaed32fbe94e7"],["assets/algolia/algoliasearchLite.min.js","26355d018bb30d571119f4722036c0b6"],["categories/Android/index.html","12ccb34d23cb249d01bc7e2377a0ef0f"],["categories/Vulnerability-Recurrence/index.html","9463809e5dfb73a9d6b90e88cae4e38d"],["categories/algorithm/index.html","56cd06092298a97aea57ac1ad5073b38"],["categories/algorithm/page/2/index.html","06671368cc0814b8a16b1c7814a2d88b"],["categories/c/index.html","7a88e88baaebb8a73f0962ee085eec87"],["categories/experience/index.html","ad164385ccf508db1dda764d110bad4e"],["categories/git/index.html","45bf52dcc8fdf6a3618a011ef28e4600"],["categories/github/index.html","dfce47d1b13b6fe475c4be83b4056f8d"],["categories/gpg/index.html","94a1e187851570e3fe401151eb2449d6"],["categories/index.html","0ccce67a3ec0f7bbcfea26b4f9c2dfd0"],["categories/linux/attr/index.html","d6e9ad16780879af98eb4aff2df6193b"],["categories/linux/global-proxy/index.html","55453ad25e2cc47f577b71487dbd5007"],["categories/linux/index.html","41c7994e2cde788cac551aaef9741428"],["categories/macos/groups/index.html","28d3b58e7e33175a439b442c0b33be86"],["categories/macos/index.html","d09d7d0aac45c64b613648379d6a1b98"],["categories/ssh/index.html","51b945b1b85e34e4f1a6e082415eaf25"],["categories/vim/index.html","3b12a018c5ca58e878711d3bd886cdd3"],["categories/vim/range/index.html","103d6411a9f3171f53620b532075e6e9"],["categories/vim/substitute/index.html","636ee94d23828d6770db9a22a29a0508"],["css/index.css","9c62726fb134fa43dd154959768e66e5"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","b65d9209fa0a7f54e09b42227ae5e4d2"],["js/copy.js","a6ad34d1b890d7024823798a2ee43890"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","9d1bee484372b0e93fad070ec5e281a1"],["page/3/index.html","6dcc8871e0dcc25f18c27cf27bebaa1b"],["page/4/index.html","9f60e90778db9d7145c852a4f5219a74"],["tags/Android/index.html","45eb106882f6cef5f673d7a21b5833c8"],["tags/CVE/index.html","746c7b8694c6d6f3f50fb8ed2fa4de81"],["tags/V2Ray/index.html","b1f5cbf382f6253c8ada027f8d83dcb1"],["tags/Vulnerability/index.html","f8f198519a78a28db9d15dd9e7a7cf7b"],["tags/algorithm/index.html","f530484726e0ddfc8a40abc8c525c581"],["tags/algorithm/page/2/index.html","c2b60ac8d4be2b631e225af44754451e"],["tags/attr/index.html","3b63ec327663877820fe3b567ee91c6c"],["tags/authentication/index.html","ef00ce89e712b52e9158e443eb94637e"],["tags/c/index.html","58d1fce9abedded07a931fe9878c6500"],["tags/experience/index.html","a3849014bee17f809820fa41a1f940ed"],["tags/first-blog/index.html","f722a5a4e361f957cb7fcfeef6f7a543"],["tags/git/index.html","c4708c5bc787006a96886273d215228e"],["tags/github/index.html","1ac269f4e7cefc75f118f10668b07b41"],["tags/gpg/index.html","ee2b88e310fb5e848056f2da7c949ded"],["tags/groups/index.html","dc914e26d82ce48161e8ff55f5053cc1"],["tags/index.html","f65702fc259171bb1452ec13f75bddca"],["tags/iptables/index.html","56704e79c2ffea95a22de323175234b2"],["tags/linux/index.html","629a3ccb8d761034d3edf3175568f7a4"],["tags/macos/index.html","d0bfa3b309837bb0fcef5e82f22e20d2"],["tags/proxy/index.html","5230dd639e6059d6b361d078d0641afd"],["tags/pull-request/index.html","1a17a43a7ac3bb61ee954b3626ae3c62"],["tags/range/index.html","2c9b873c704b556ee1dfe9f39567714f"],["tags/rvalue/index.html","69ebb1573f1b967b0bd1a8d744047f11"],["tags/ssh/index.html","2561e0a659e2a3656c1ec49ed284248c"],["tags/substitute/index.html","468c0d77f8414d2848503165357b20d4"],["tags/vim/index.html","44c5a9d1396e25ff8ee76c1d667e6989"],["tags/water-post/index.html","d14f7824b923f1034746951f7a4ae0c6"],["tags/wordpress/index.html","f92b516b2d3fddea6bc4179eee8610ba"],["tags/writeup/index.html","0dd709c50f14eb9cecfe2115efe54054"]];
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







