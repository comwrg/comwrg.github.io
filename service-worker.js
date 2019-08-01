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

var precacheConfig = [["2018/10/30/start-a-blog/index.html","2e9e5b64404be083762b5fe6220c582e"],["2018/11/02/about-linux-attr/index.html","7d91005581fe737918af24255411ef0b"],["2018/11/06/vim-range-details/index.html","387195a8606446b13536db5320f5aabf"],["2018/11/07/vim-substitute-basic-details/index.html","82c473fe3401cfbcd4fa4489ea92ced9"],["2018/11/13/macos-default-groups-diff/index.html","6d71eff9073442642ddd1e09458560c3"],["2018/11/17/v2ray-and-iptables-implement-global-proxy-under-linux/index.html","f8b51ce4aafd8cb07c5b40203de3bb1c"],["2018/11/21/algorithm-recommend-potential-friends/index.html","d26f781c2e08717a3ad40b4c4cdfd56f"],["2018/11/22/android-startup-alert-dialog/index.html","c85cc65153ebbdb438262006919721fb"],["2018/12/12/algorithm-calculate-tridiagonal-matrix/index.html","f470039eadc09bd8e7dd754f3149194a"],["2018/12/18/algorithm-181212-1/index.html","75eb6a2fa6a619b69f39f42a1d8903ed"],["2018/12/18/algorithm-181212-2/index.html","ecaeca998fec87a7ec1cd0706f31a98d"],["2018/12/18/algorithm-181212-3/index.html","2808a2ae28f8538505168aa3dae78623"],["2018/12/18/algorithm-181212-4/index.html","31d42bbb943eb8011307ae63164ca23c"],["2018/12/18/algorithm-181212-5/index.html","e72b21984b933f88e42b0f6469032270"],["2018/12/26/algorithm-solve-pocket-cube/index.html","544f0780f1de00d5e4a4aa194c703d9c"],["2018/12/27/cpp-rvalue-reference/index.html","93dd00a958b4251ba12d439afaee0a66"],["2019/01/06/some-questions-about-gpg/index.html","f73b33d44c95ea82bdacf850d33d7146"],["2019/01/07/using-a-gpg-key-for-ssh-authentication/index.html","1a48e3e30c3cd2b42f2e88d6855b84e5"],["2019/03/21/add-commits-to-pull-requests/index.html","f24edea187e266f53269d737b47c1654"],["2019/03/22/josephus-problem/index.html","5ae35ca503093ea1032a35a233770036"],["2019/03/23/POJ-1159/index.html","2771ab2c3c8fa844113c45872a453b3d"],["2019/03/23/POJ-2533/index.html","08d13ca97461c2322dfb92ad272e760c"],["2019/03/23/UVA-624/index.html","8815008c044e0c28c2fcf64e2c5b79bc"],["2019/03/25/POJ-1019/index.html","8044de435acfb492801d367e89878f52"],["2019/04/03/telecom-call-transfer-and-VoLTE/index.html","da5c1658209453c6921a9b502e3a66d6"],["2019/04/08/git-commit-part-change-during-single-file/index.html","3397482999f97634bf4a5745b4f6147a"],["2019/04/17/experience-in-purchasing-P2415Q-monitor/index.html","02cdd2af00cc447eba215dbcbbc2ac38"],["2019/05/16/bat-minimum-swaps/index.html","b6f45d50de6dbbea4bb8172085029601"],["archives/2018/10/index.html","468ad9a37761c97a38dbaecca0730555"],["archives/2018/11/index.html","af26f04efe918df36ff0be1458035067"],["archives/2018/12/index.html","8182e9c4998dc23557be4ee75cace2c6"],["archives/2018/index.html","fad2f8ba00c576c8bff288d895253ff7"],["archives/2018/page/2/index.html","4ff4bb55adf77606129bdc6991400692"],["archives/2019/01/index.html","90f222012abd2c0c1d253c773bdf9501"],["archives/2019/03/index.html","abd6a3c544312d78890997dd8048bdbc"],["archives/2019/04/index.html","f15f1886ee7c5f65a090d0fcd2295c3d"],["archives/2019/05/index.html","207fcfb7d03e965b7ed33a96cb2f8845"],["archives/2019/index.html","46da3b1e063b90ec9fc479d93b03a3e5"],["archives/2019/page/2/index.html","90e4c1e7efb8ee762adb9153f4a1a92e"],["archives/index.html","b326bc11db6cab22f24e7cd7c2fd3c53"],["archives/page/2/index.html","ab42dbd6888a4a90ea4dc62427e1b20e"],["archives/page/3/index.html","214415e71687c8ef312ff6377a0daa0c"],["assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["categories/Android/index.html","22a342e0c2db2cc7285de59c1e00d1e5"],["categories/algorithm/index.html","0a7b54208eca0d2d342f7fa659161580"],["categories/algorithm/page/2/index.html","b46fd9238320a728f158d3b8cb78c95b"],["categories/c/index.html","53002723f83a63a86f0a18f427b1ead8"],["categories/experience/index.html","5c30353c2ea3b2b908093ef94e9dd179"],["categories/git/index.html","3bab63baaf615722b8dbf42b25cd9cc9"],["categories/github/index.html","331256c9a09067b012b3a7e274bd0e4e"],["categories/gpg/index.html","455ced121bcc9cf2b220ebdc9c2ca5d6"],["categories/index.html","10b68d1aa48e9ff77d2e3efa0b0080bd"],["categories/linux/attr/index.html","8b798dd0d027263a9437bd84df8aa057"],["categories/linux/global-proxy/index.html","892dc828ce3777bc87c233ec2720b325"],["categories/linux/index.html","460e190c996796d1de11018492b22b59"],["categories/macos/groups/index.html","c8d71d332e9799457c81755ad2dabdef"],["categories/macos/index.html","aacb099dda16983ac973a79c534a30da"],["categories/ssh/index.html","d550900ce4179d16c40f66f8064c35fd"],["categories/vim/index.html","ba12a999e55f2e2150995d5f7dca1292"],["categories/vim/range/index.html","4f87ee645fc545fa7f8c307f443bbd72"],["categories/vim/substitute/index.html","203ca3f1f076a34aafd0b70270419c03"],["css/index.css","9c62726fb134fa43dd154959768e66e5"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","019425919319bd8ecd03f5e64b51458e"],["js/copy.js","a6ad34d1b890d7024823798a2ee43890"],["js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","347edd99f8e3921b45fa617e839d8182"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","3628b402849e75f14884036705fc9582"],["page/3/index.html","27a9d71d6e234f5a1a057ea23139a519"],["tags/Android/index.html","ff4f21ddeb30ecf74a54d177c155e817"],["tags/V2Ray/index.html","ddfaadf77ac2708e1c279603330f8bdc"],["tags/algorithm/index.html","9702a6b581bb877f4bacdeb5dcc6f0d8"],["tags/algorithm/page/2/index.html","62a51c05eac16c8cb76e2f21027c4a2d"],["tags/attr/index.html","a266f6fda1c14c88d350f90697585fe6"],["tags/authentication/index.html","6225eb5109c6a086f5c831a706adfc81"],["tags/c/index.html","5231761a261ec3bf01d77982e2677e75"],["tags/experience/index.html","08c8445a2058d8a874f6aa3ac79486ca"],["tags/first-blog/index.html","50aab1819311f816b1c3b9830f61a51c"],["tags/git/index.html","8e1b81b6077def88aa1d78a0320793ff"],["tags/github/index.html","5c7b7e099e27d2748247837bdfac2ea2"],["tags/gpg/index.html","79629e778fd6a7997d6889753f1c95b4"],["tags/groups/index.html","720a555e272bbccb735a09e17f2dcd77"],["tags/index.html","f5bc536525a0960816b5a9ca9865fc54"],["tags/iptables/index.html","44016d23bb4c11d3d996a677e8c97702"],["tags/linux/index.html","15cdcb1f48f0adfd5f2a42b243b8ef5f"],["tags/macos/index.html","e87be9c61bc49c652974f6da177922da"],["tags/proxy/index.html","a995828c32f2d04a4d3c618cc9a5823d"],["tags/pull-request/index.html","c85c67a4ff40989baa2553396834bf07"],["tags/range/index.html","ee9abba95fa35880eb08bd409ec50499"],["tags/rvalue/index.html","1e9cdd7c4ab7b26e1c5a981c731c689e"],["tags/ssh/index.html","2f55cf91b5beda7f5b389b8acbda95a2"],["tags/substitute/index.html","3078bb186e6abd16143fa690be6d9c7c"],["tags/vim/index.html","feb4bc3976a89e01b153c0a061d68d63"],["tags/water-post/index.html","0126399f07bc26b26dbdcbbb17578ed4"]];
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







