'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b6e6365d2e2b6c3dce75a23ae8cdf492",
".git/config": "d8eab0b10559f6136edad68a988da60a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a48ff4bf24d3f728813c94aa02d5832f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c1e8d98e00bc17efd96ed093645d5248",
".git/logs/refs/heads/main": "3a0e4693fb126c389f65a6c5f48daee9",
".git/logs/refs/remotes/origin/main": "23e423f9eabe3fe4b0cde716117a143f",
".git/objects/06/2ea9f3a908cee22b504324f84b517db4e2700b": "9ba217bdf436fef9ba319c6cd2358d78",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/8495f276dffaf92fcb34c616c7dac433785c4d": "3d604d6940fbfab7bcee0b38b9595d9c",
".git/objects/10/f3191b7e96732a1575be8d0960513a81359a24": "80668fa9f7a90d335a0f3e2dd3a00f98",
".git/objects/12/37a05baadf8ded96a032b2cdae0edd9db71f58": "fc4221dc4157cdcff260195edd1cfb96",
".git/objects/13/607fa6715a37e1c80e9214d9aa3e3716b3cf39": "8764c6a69f6227d96c0688cd1bc9b44d",
".git/objects/1a/7e40a605332fb50ef4cf340bce65157746b2b4": "8204443d24dd33a58393ba4d7bd9e3ba",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/1c/2d29a3baaf7e33815f9a18607cf6b1a9d2d9b2": "022cac3cdb09ea0b1f87838a18d5ae3f",
".git/objects/1e/8a5c6f88f942ab985a3b86a093c8f3554e9850": "f47fc032392bf7effb96c43f4bbfbc92",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/5b8fd8fe1510061899b4fd4eef166a8bc87974": "bb348be608412731047bf4da5e8ef949",
".git/objects/23/c3243abe54ad964f0d05d5138b369965aaee38": "e27fafca983ba8f311ba4040af72d550",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/25/3ff888bec84bd18af8c3ed1a2c375af77a45c4": "0a879fbae9e95b2ce0a5a31c35f1cbc9",
".git/objects/26/c5596c7ca1b850728e00d124b124871bb0ab6e": "b65ff1028df190f6dcde0a4627c0b7b7",
".git/objects/28/278ae66673df03400b46302983e5ae15c2b9ed": "a89e4be82ad576215a76603015b4ed6c",
".git/objects/2d/c38941420119a0059511bbcfe73a4594eb0a3b": "3e7aeda2ea3c1839323ccb17658d208c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/bdc23bb3ff8d933b5db17d2b15fc5f8721a242": "fd8a447eaf937d6e127f6abcbd9d3654",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/ba3db8aba45684e12398aea27fbe0e14ce742f": "cbd96bc049c2983203737328c5bc42e4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/a1360028202ad9553359d154b4012162640c12": "f1f4e9cb8f87da0cf929df46b9b7a8ae",
".git/objects/46/e91d2c6f2b0fb4e080b6175074fe3255777f0c": "232a2e54188ebbb742726ea352dfd62c",
".git/objects/49/075c1f4d44aa7bf28c686e485d892b705d7220": "dbf9cb61c013bff20d83d98a9691c345",
".git/objects/4a/a321cb92dbe3068992ce6157d616d0bfb7f0de": "18a1edcc84fb45882e05ab6012c0ab97",
".git/objects/4d/89db25fd05a81cd0f34b3e50209f4eb11472d8": "b8835fa6567010a76b041bde3191d57e",
".git/objects/4e/31335df34768e50d87c2c428f99efe95a53a37": "694f7fe62e1349286a2b30585ee1075b",
".git/objects/5d/a4e1b3a73a98de285e699c98e29832a2239822": "5bfa703f1ca8023bc580642dccd3816a",
".git/objects/63/671fed8de4dc5bf16a4dbd0d5cfc9fbe9c965f": "abe7f46d1688b46b5f7b7917558aef75",
".git/objects/64/4d074d7b83a0594fc056b133f87ca701e10480": "f17c6ccf3d8151eedacca1373ccc6a49",
".git/objects/66/cc938b50b6fa223aecd988838d87984bf9ea41": "828319719f72e35f9281500e66ee8469",
".git/objects/67/ec1323c5ac67b11ea4d41e53712c03066f9b3a": "6deb446e9a6613b05c05a124ac030f4d",
".git/objects/69/19a52dca3f3748bfbdbd906603fd85cc59faf9": "6d713bb8bb28435bceca0b1ce964243e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/14e72224ca30c1949d4f3dc6a09bb334b68dd7": "8421fd0c993c763c717f27512f830160",
".git/objects/70/4e8e3c1febf70b93d2929a83b94bc17eb8d73f": "aa64955621136fad763f4f4f9015a63a",
".git/objects/73/095a3ef6b4f24db8b3c5e1358dee9203aa2789": "036949fbfdf9977a4eaf27a248ecc390",
".git/objects/73/4b7da8da987f4f468cc5fe7fc5e89af0d08f6f": "b07705e3a86ee72d053950ef68e5adfa",
".git/objects/74/a6905691c99c66e3399c90870d2705af6d47fc": "b00e00d0cabde9c4cca3beba15318dd2",
".git/objects/75/c2ad91c78cb74c18fed511982abeaf70e1c6b9": "c1b81119d8d9e1bf73cd3f3f136d4e06",
".git/objects/7c/e4689ded758da14fca83bef1bfe82c358307c7": "06ea2818b12cd2467f6125ed48b066a4",
".git/objects/7d/d4a8f877e656d333b7598fd11a79723bf1dd30": "28e54fd0ce905c69dcdb8ea82f0b17f7",
".git/objects/7f/19da9375ec70e4bc1443d80bc2deef4ba7320c": "9f2a9969e74e187833b2ff48a2fcc2c0",
".git/objects/7f/dcf5d9199e713cd91de044ebd0458668e71d9f": "3ad6f0a66b8417fe8426339f22f4ce86",
".git/objects/80/8ed705443b7fdf00748d8859de262dbe579af2": "7b2e5b803b2a25fcd70ecdce0df8b935",
".git/objects/83/768ceaf96a08ab1b1c45c00aabaa697c8ab4d6": "2b00036124ec199a47d1f1320407dd44",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/8050dd5b099cba35a7290dfe1dc4cd2e3a73bf": "5f859251a087a25b56951b1e07707697",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/2bba0bb1650510ffdb56f513caf4ee0c123ebe": "93c0cfe932622a0894d6dffd53b3e004",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/d3a25b8ed0039200ce310a4248f5ff7e08f986": "c2d5b494b79451ddbd081b57f5032867",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/4292cb3365f06a7042ecc8f2b82cf14e8ac68f": "dfc205073f3a0b6382ea542b5300e3a1",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/203ffea7e463cddf648521d61fbe057ae02d1a": "979f227a46bccf623d31e961f24d7f43",
".git/objects/9b/72ed7f86512ea2afd0685e358d4b5a459f7482": "e871591ecc9082347c708518f1f1f3c2",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/9e/ffdc07f5af764852cb50df2922e8a0df0b10ed": "e4528b655903234eb5832f461f66e5b0",
".git/objects/a2/0197a9db9d721eb213c1de7daf314dfaa02af1": "df2e4191064aa9679906ea55522d2e23",
".git/objects/ae/d5c344938b13972c91b1ea3d55192a36f1966e": "8f1e75562788eafe0ab78cc751f6d6ea",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/1f64c95cc409ad85ee997fa422c0bab71514ff": "551ab04ef8dfb88ad83447ca8ca2d0ae",
".git/objects/b6/77e07b83e93d3ddbeb16876b47142376b04780": "9641a23c2b5b844f2ebc4231b50113fb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a45ad161abc25ff1e0b3b2065ccbbdb7ca2188": "0185bbd3cd4ac201097d41522c784b77",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/7b24823f45b06d35c372dd2dd31c9cb3c590bc": "b16bc4b5a10d9c77e0a0dded651a8436",
".git/objects/bf/67df1705c4f77109de741540cd7175003680f9": "a126cb08f46f698b289445e45af27ae1",
".git/objects/bf/6ca31c2f13ce80d51c500221817ae5fc142787": "f7ee715ed73872b179a858b2b6662dde",
".git/objects/c1/9bd9e9222fb99130196305b0ed45eade07e7be": "c22836cbc6584bc5e9c5174f8c971c29",
".git/objects/ca/9b5eac556bb83931ecfc1a28c2f78dfbde9f68": "82989c0c0a612231ba627bb4555e78ea",
".git/objects/cc/fd4362d16b2fa3a0dbcfb65ea63c97a8e30ab5": "b975d67eb0ef5993c35ac8f7430916a4",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/12f99d2056cc6b3d909e051a781d5ada3c751e": "69c73e580eb300e21d00bcb89808ed4f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/d17fbe9679a74771767e872c864ad33bac7e47": "f46cc7ca2ef384c374ad030cb54a961e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e0/2dde54c8ddbcac29433dd10b6e65ae2fb7fbbf": "9811e1cb29f25e1b1376d355a8d3dd20",
".git/objects/e2/ba7fc5400d26b5ec4273149898c9df78f67f1d": "70e0d1fe9492503d6920b6ed9063a678",
".git/objects/e5/3204a257c9694d76f055bb4cf97081985480b6": "e689820a0b5d50af67e5c8ac6e9c0903",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/adf62052dce6358ea8c143686e1464c2a428f6": "c31e1525b15cac02a70d4c95ee876148",
".git/objects/ec/d11ef8f49637edc38aeef9eef4902679171265": "f8a2131c43658f9e8b7b04dc8a9ac0f3",
".git/objects/ee/6d74069358257e6ed84d96d07615ca844b83c3": "3786a7046650b842e76d8fdd0695781a",
".git/objects/f0/b96c25f722049c64cbf06b386680b2c175576f": "9b473469d753764e03b630f8040cb505",
".git/objects/f0/c3e24cf605b9e75429f05ebcf71b2b2edc1d54": "ae5e533105dc2573f651785ee4b192a5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/f2b2ae2f0eaf605aa8e9e510146b914a13f895": "ef3152bf277f57fdc0ad808fe77ec86a",
".git/objects/f6/bc61f45ef5163e638b17f0f383d09913862e17": "53390ad4e4947c7e8bb328acaaaf752e",
".git/objects/f8/3b26c68ee2987a8329bca07b28aee620a8a6fa": "f0260eb46f39220b21c0037435b9cd68",
".git/objects/f8/5809b9c3129d97308e8dd9b287dee3ad9e25ad": "e2b666a5fba74681ab55595ecd8b866c",
".git/objects/fb/2167d5eb63479cd83fbcde066926eb824bb0ed": "373e375c37becff90b124e7d752fe733",
".git/objects/ff/4d9d300996c2ef7425f026bbb5a0e6b5222e6b": "3c60ee7c5527d49b2e81b9dc2d70f7a9",
".git/refs/heads/main": "74d73eae01114faa1e5688c3c113620c",
".git/refs/remotes/origin/main": "74d73eae01114faa1e5688c3c113620c",
"assets/AssetManifest.bin": "c615217776c336e427ca79842adf793a",
"assets/AssetManifest.bin.json": "04b03a18f5ff9be83a0ddd05cbcbd8f5",
"assets/AssetManifest.json": "ed8e3791c0429f6c4871f2935a1426a3",
"assets/assets/animations/celebrate.json": "66dac932037c6c52d8bb49e49c117121",
"assets/assets/animations/empty.json": "7ff73ac129bcad6974681cdf20740f63",
"assets/assets/animations/lose.json": "0dd3a3aa9c30a83b25a9d6d3f9296a42",
"assets/assets/animations/won.json": "51f24c7a7d2fa41a9fc93c49ca953535",
"assets/assets/audio/click_1.mp3": "5d9b33e2fe5767119dec6d7bb533f5fd",
"assets/assets/fonts/Archivo.ttf": "02295880efb2fc088d46cbb10136bc0b",
"assets/FontManifest.json": "4ad7b6a24611c1c41400c08c33c4a71a",
"assets/fonts/MaterialIcons-Regular.otf": "f38f52159c03c50aa9756ad794934c14",
"assets/NOTICES": "beeb4cb8780385bed744b88c00643d8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2e3dc24ddcbd67d0d93b88dc6883a453",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "795722b6e5954cc834f4ae503d070bf0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7c3c6f83ac6739e3235a86594a5c6712",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "92803cb5c3f884fa665c1b7cbe5138c2",
"/": "92803cb5c3f884fa665c1b7cbe5138c2",
"main.dart.js": "7e3314e1245679bcef1720a14dd6c4ed",
"manifest.json": "a67f98acf38685b2f7a0d67cca06f251",
"version.json": "2fc840905b56561ccd5b0fd58f9a13e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
